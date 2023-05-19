import { isTauri, notifyTauri } from "./tauri.js";
import { writable } from "svelte/store";

import type { default as NotificationComponent } from "./Notification.svelte";

export enum NotificationType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}

export type NotificationData = {
    id: number;
    type?: NotificationType;
    sticky?: boolean;
    title: string;
    body: string;
    timeout?: number;

    closeActions?: Array<() => void>;
    clickActions?: Array<() => void>;
    timeoutActions?: Array<() => void>;

    component?: NotificationComponent;
};

export type NotificationOptions = {
    type?: NotificationType | string;
    sticky?: boolean;
    title: string;
    body: string;
    timeout?: number;
};

export const notifications = writable<NotificationData[]>([]);

export async function notify(
    options: NotificationOptions,
    nativeFallback: boolean = true
    // @ts-ignore
): Promise<NotificationData> {
    console.log("notify", options, nativeFallback);

    if (nativeFallback && isTauri()) {
        const value = await notifyTauri(options);

        if (value instanceof Error) throw value;

        const notification = value as NotificationData;
        pushNotification(notification);
        return notification;
    }

    const notification: NotificationData = {
        id: 0,
        ...options
    };

    pushNotification(notification);
    return notification;
}

export function remove(notification: NotificationData) {
    notifications.update((notifications) => {
        notifications.splice(notification.id, 1);
        return notifications;
    });
}

export function removeById(id: number) {
    notifications.update((notifications) => {
        notifications.splice(id, 1);
        return notifications;
    });
}

export function removeAll() {
    notifications.set([]);
}

export function close(notification: NotificationData) {
    notification.component?.close();
    notification.closeActions?.forEach((action) => action());
    remove(notification);
}

function pushNotification(notification: NotificationData) {
    notifications.update((notifications) => {
        notification.id = notifications.length;
        notifications.push(notification);
        console.log("pushNotification", notification);
        console.log("notifications", notifications);
        return notifications;
    });
}

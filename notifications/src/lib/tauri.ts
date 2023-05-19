import { invoke } from "@tauri-apps/api/tauri";
import type { NotificationOptions, NotificationData } from "./notifications.js";

export function isTauri() {
    return (
        "__TAURI__" in window ||
        "__TAURI__" in globalThis ||
        "__TAURI_METADATA__" in window ||
        "__TAURI_METADATA__" in globalThis
    );
}

export async function notifyTauri(
    options: NotificationOptions
    // @ts-ignore
): Promise<any> {
    let result: any = await invoke("defign_notify", options);
    if (result instanceof Error) return result;

    return result as NotificationData;
}

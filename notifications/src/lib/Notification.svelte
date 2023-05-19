<script lang="ts">
    import { NotificationType } from "./notifications.js";

    import { createEventDispatcher } from "svelte";

    export let id: number;
    export let type: NotificationType;
    export let sticky: boolean;
    export let title: string;
    export let body: string;
    export let timeout: number;

    export let closeActions: Array<() => void> = [];
    export let clickActions: Array<() => void> = [];
    export let timeoutActions: Array<() => void> = [];

    function close() {
        for (const action of closeActions) {
            action();
        }


    }
</script>

<button class="notification">
    <h1 class="notification-title defign-header">{title}</h1>
</button>

<style>
    .notification {
        background-color: var(--defign-background-1);
        color: var(--defign-text);
    }
</style>

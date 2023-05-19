<script lang="ts">
    import "@deftu/defign/styles.css";
    import {
        Button
    } from "@deftu/defign";
    import { Notifications, notifications } from "$lib/index.js";
</script>

<div class="notifications-container">
    <Notifications />
</div>

<Button on:click={() => {
    notifications.notify({
        title: "Test Notification",
        body: "This is a test notification."
    });
}}>Send Test Notification</Button>

<style>
    :global(body) {
        background-color: var(--defign-background-1);
        color: var(--defign-text);
    }

    .notifications-container {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
    }
</style>

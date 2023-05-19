<script lang="ts">
    import "@deftu/defign/styles.css";
    import {
        Button
    } from "@deftu/defign";

    import {
        ModalDialog,
        SidebarDialog
    } from "../lib/index.js";

    let modal: ModalDialog | null = null;
    let sidebar: SidebarDialog | null = null;
</script>

<ModalDialog bind:this={modal}>
    <h1 class="defign-header">Modal Dialog</h1>
    <p class="defign-body">
        This is a modal dialog.
    </p>
    <Button on:click={() => modal?.hide()}>Close</Button>
</ModalDialog>

<SidebarDialog bind:this={sidebar}>
    <h1 class="defign-header">Sidebar Dialog</h1>
    <p class="defign-body">
        This is a sidebar dialog.
    </p>
    <Button on:click={() => sidebar?.hide()}>Close</Button>
</SidebarDialog>

<div class="content">
    <h1 class="defign-header">Dialogs</h1>
    <p class="defign-body">
        This is a page for testing dialogs.
    </p>
    <Button on:click={() => modal?.show()}>Show Modal</Button>
    <Button on:click={() => sidebar?.show()}>Show Sidebar</Button>
</div>

<style>
    :global(body) {
        background-color: var(--defign-background-1);
        color: var(--defign-text);
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 10px;
    }
</style>

<script lang="ts">
    import "$lib/global.css";
    import { Card } from "$lib";

    export let visible: boolean = false;

    export function show() {
        visible = true;
    }

    export function hide() {
        visible = false;
    }
</script>

{#if visible}
<div class="modal-background">
    <div class="modal">
        <slot />
    </div>
</div>
{/if}

<style>
    .modal-background {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }

    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--deftu-background-1);
        border-radius: 0.5rem;
        padding: 1rem;
        width: 50%;
        max-width: 50rem;
        max-height: 50rem;
        overflow-y: auto;
    }
</style>

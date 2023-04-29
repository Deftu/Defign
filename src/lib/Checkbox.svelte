<script lang="ts">
    import "./global.css";
    import { CheckIcon } from "./index.js";

    export let value: boolean = false;
</script>

<div class="checkbox-container deftu-body">
    <div class="interactable-container">
        <input type="checkbox" bind:checked={value} class="checkbox" />
        <div class="checkbox-icon">
            <CheckIcon width="100%" height="100%" />
        </div>
    </div>
    <slot />
</div>

<style>
    .checkbox-container {
        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        gap: 8px;
    }

    .interactable-container {
        position: relative;
        width: 20px;
        height: 20px;
    }

    .checkbox {
        margin: 0;
        padding: 0;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        appearance: none;
        background-color: var(--deftu-background-2);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .checkbox:checked {
        background-color: var(--deftu-primary);
    }

    .checkbox:focus {
        outline: solid 2px var(--deftu-primary);
        outline-offset: 1px;
    }

    .checkbox-icon {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: var(--deftu-text);
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
        pointer-events: none;
    }

    .checkbox:checked ~ .checkbox-icon {
        opacity: 1;
    }
</style>

<script lang="ts">
    import { Size } from "./index.js";
    import { CheckIcon } from "./icons/index.js";

    export let checked: boolean = false;
    export let disabled: boolean = false;
    export let invertChildren: boolean = false;
    export let size: string = Size.Medium;
</script>

<div class="checkbox-container defign-body" class:disabled class:invertChildren>
    <div class="interactable-container {size}">
        <input type="checkbox" bind:checked={checked} {disabled} class="checkbox" />
        <div class="checkbox-icon">
            <CheckIcon width="85%" height="85%" />
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

        width: fit-content;
    }

    .checkbox-container.disabled {
        filter: brightness(0.75);
        pointer-events: none;
        cursor: not-allowed;
    }

    .checkbox-container.invertChildren {
        flex-direction: row-reverse;
    }

    .interactable-container {
        --checkbox-width: 0px;
        --checkbox-height: 0px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        width: var(--checkbox-width);
        height: var(--checkbox-height);
    }

    .interactable-container.xs {
        --checkbox-width: 16px;
        --checkbox-height: 16px;
    }

    .interactable-container.sm {
        --checkbox-width: 18px;
        --checkbox-height: 18px;
    }

    .interactable-container.md {
        --checkbox-width: 20px;
        --checkbox-height: 20px;
    }

    .interactable-container.lg {
        --checkbox-width: 22px;
        --checkbox-height: 22px;
    }

    .interactable-container.xl {
        --checkbox-width: 24px;
        --checkbox-height: 24px;
    }

    .checkbox {
        margin: 0;
        padding: 0;
        width: var(--checkbox-width);
        height: var(--checkbox-height);
        border-radius: 4px;
        appearance: none;
        background-color: var(--defign-background-2);
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
    }

    .checkbox:checked {
        background-color: var(--defign-primary);
    }

    .checkbox:focus {
        outline: solid 2px var(--defign-primary);
        outline-offset: 1px;
    }

    .checkbox-icon {
        width: calc(var(--checkbox-width) - 5px);
        height: calc(var(--checkbox-height) - 5px);
        fill: var(--defign-text);
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
        pointer-events: none;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .checkbox:checked ~ .checkbox-icon {
        opacity: 1;
    }
</style>

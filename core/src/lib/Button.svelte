<script lang="ts">
    import { Size, ButtonType } from "./index.js";

    export let type: string = ButtonType.Primary;
    export let size: string = Size.Medium;
    export let disabled: boolean = false;
</script>

<button
    on:click
    class="btn {type} {size} defign-body"
    class:disabled
    {disabled}
>
    <slot />
</button>

<style>
    .btn {
        --focus-outline-color: var(--defign-primary);

        border: none;
        border-radius: 5px;
        color: var(--defign-text);
        cursor: pointer;
        user-select: none;
        transition: transform 0.1s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn:not(.disabled):active {
        transform: scale(0.95);
    }

    .btn:not(.disabled):focus {
        outline: solid 2px var(--focus-outline-color);
        outline-offset: 1px;
    }

    .btn.disabled {
        cursor: not-allowed;
        filter: brightness(0.75);
    }

    .btn.primary {
        background-color: var(--defign-background-2);
    }

    .btn.secondary {
        background-color: var(--defign-background-1);
    }

    .btn.danger {
        --focus-outline-color: var(--defign-danger);
        background-color: var(--defign-danger);
    }

    .btn.warning {
        --focus-outline-color: var(--defign-warning);
        background-color: var(--defign-warning);
    }

    .btn.xs {
        width: 75px;
        min-height: 30px;
        height: fit-content;
        padding: 1px;
    }

    .btn.sm {
        width: 100px;
        min-height: 30px;
        height: fit-content;
        padding: 3px;
    }

    .btn.md {
        width: 125px;
        min-height: 30px;
        height: fit-content;
        padding: 5px;
    }

    .btn.lg {
        width: 150px;
        min-height: 30px;
        height: fit-content;
        padding: 7px;
    }

    .btn.xl {
        width: 175px;
        min-height: 30px;
        height: fit-content;
        padding: 9px;
    }
</style>

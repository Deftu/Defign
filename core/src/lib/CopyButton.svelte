<script lang="ts">
    import { Size } from "./index.js";
    import { ClipboardIcon, CheckIcon } from "./icons/index.js";

    import { writable } from "svelte/store";

    const color = "var(--defign-text-faded)";
    const copied = writable(false);

    export let size: string = Size.Medium;
    export let value: string | null = null;
    export let text: string | null = null;
    export let disabled: boolean = false;

    copied.subscribe((newValue) => {
        if (newValue) {
            const previousText = text;
            if (previousText != null) text = "Copied!";
            setTimeout(() => {
                copied.set(false);
                text = previousText;
            }, 3000);
        }
    });
</script>

<button
    on:click={() => {
        if (value != null) {
            copied.set(true);
            navigator.clipboard.writeText(value);
        }
    }}
    class="btn {size} copy-btn defign-body"
    class:disabled
    {disabled}
>
    {#if text != null}
        <span>{text}</span>
    {/if}

    {#if $copied}
        <CheckIcon width="18px" height="18px" {color} />
    {:else}
        <ClipboardIcon width="18px" height="18px" {color} />
    {/if}
</button>

<style>
    .btn {
        border: none;
        border-radius: 5px;
        padding: 5px;
        color: var(--defign-text);
        background-color: var(--defign-background-2);
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
        outline: solid 2px var(--defign-primary);
        outline-offset: 1px;
    }

    .btn.disabled {
        cursor: not-allowed;
        filter: brightness(0.75);
    }

    .btn.xs {
        min-width: 25px;
        width: fit-content;
        height: 25px;
    }

    .btn.sm {
        min-width: 30px;
        width: fit-content;
        height: 30px;
    }

    .btn.md {
        min-width: 35px;
        width: fit-content;
        height: 35px;
    }

    .btn.lg {
        min-width: 40px;
        width: fit-content;
        height: 40px;
    }

    .btn.xl {
        min-width: 45px;
        width: fit-content;
        height: 45px;
    }

    .copy-btn {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .copy-btn span {
        color: var(--defign-text-faded);
    }
</style>

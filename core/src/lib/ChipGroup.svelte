<script lang="ts">
    import { Size, type SelectionPair } from "./index.js";
    import { CheckIcon } from "./icons/index.js";

    export let value: string | null = null;
    export let disabled: boolean = false;
    export let items: Array<string | SelectionPair> = [];
    export let size: string = Size.Medium;

    $: mappedItems = items.map((item) => {
        if (typeof item === "string") {
            return { label: item, value: item };
        } else {
            return item;
        }
    });
</script>

<div class="chip-group">
    {#each mappedItems as item}
        <button
            on:click={() => {
                if (value === item.value) {
                    value = null;
                } else {
                    value = item.value;
                }
            }}
            {disabled}
            class="chip {size} defign-body"
            class:disabled
            class:selected={value === item.value}
        >
            {#if value === item.value}
                <CheckIcon width="15px" height="15px" />
            {/if}

            {item.label}
        </button>
    {/each}
</div>

<style>
    .chip-group {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .chip {
        display: flex;
        align-items: center;
        gap: 4px;

        border-radius: 4px;
        border: none;
        background-color: var(--defign-background-2);
        color: var(--defign-text);
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
    }

    .chip.disabled {
        cursor: not-allowed;
        filter: brightness(0.75);
        pointer-events: none;
    }

    .chip.selected {
        background-color: var(--defign-primary);
    }

    .chip.xs {
        padding: 2px 4px;
    }

    .chip.sm {
        padding: 4px 8px;
    }

    .chip.md {
        padding: 6px 12px;
    }

    .chip.lg {
        padding: 8px 16px;
    }

    .chip.xl {
        padding: 10px 20px;
    }

    .chip:focus {
        outline: solid 2px var(--defign-primary);
        outline-offset: 1px;
    }
</style>

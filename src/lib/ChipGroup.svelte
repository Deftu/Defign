<script lang="ts">
    import "$lib/global.css";
    import { CheckIcon } from "$lib";

    export let value: string | null = null;
    export let items: string[] = [];
</script>

<div class="chip-group">
    {#each items as item}
        <button
            on:click={() => {
                value = item;
            }}
            class="chip"
            class:selected={value === item}
        >
            {#if value === item}
                <CheckIcon width="18px" height="18px" />
            {/if}

            {item}
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

        padding: 4px 8px;
        border-radius: 4px;
        border: none;
        background-color: var(--deftu-background-2);
        color: var(--deftu-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .chip.selected {
        background-color: var(--deftu-primary);
    }
</style>

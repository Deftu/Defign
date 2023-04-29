<script lang="ts">
    import "$lib/global.css";
    import { ChevronIcon } from "$lib";

    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { writable } from "svelte/store";

    export let value: string | null = null;
    export let items: string[] = [];

    const totalItems = ["Select an item", ...items];

    let dropdown = null;
    let eventListener = null;
    const selected = writable(false);

    onMount(() => {
        if (browser) {
            eventListener = document.addEventListener("click", (event) => {
                if (dropdown && !dropdown.contains(event.target)) {
                    selected.set(false);
                }
            });
        }
    });

    onDestroy(() => {
        if (browser) {
            document.removeEventListener("click", eventListener);
        }
    });
</script>

<div bind:this={dropdown} class="dropdown">
    <button
        on:click={() => {
            selected.update((value) => !value);
        }}
        class="dropdown-button"
        class:selected={$selected}
    >
        <span>{value ?? "Select an item"}</span>
        <ChevronIcon direction={$selected ? "up" : "down"} />
    </button>

    <div class="dropdown-items" class:visible={$selected}>
        {#each totalItems as item}
            <button
                on:click={() => {
                    value = item === "Select an item" ? null : item;
                    selected.set(false);
                }}
                class:selected={value === item}
            >
                {item}
            </button>
        {/each}
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-button {
        display: flex;
        align-items: center;
        gap: 4px;

        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--deftu-background-2);
        color: var(--deftu-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .dropdown-button.selected {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .dropdown-items {
        display: none;
    }

    .dropdown-items.visible {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--deftu-background-2);
        border-radius: 5px;
        border-top-left-radius: 0;
        padding: 5px;
        overflow: hidden;
        z-index: 1;
    }

    .dropdown-items.visible button {
        display: block;
        width: 100%;
        padding: 5px 10px;
        border: none;
        background-color: var(--deftu-background-2);
        color: var(--deftu-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }
</style>

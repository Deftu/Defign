<script lang="ts">
    import "$lib/global.css";
    import { ChevronIcon } from "$lib";

    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { writable } from "svelte/store";

    export let value: string | null = null;
    export let items: string[] = [];

    const totalItems = ["Select an item", ...items];

    let dropdown: HTMLElement | null = null;
    let eventListener: ((this: Document, event: Event) => any) | null = null;
    const selected = writable(false);

    onMount(() => {
        if (browser) {
            document.addEventListener(
                "click",
                (eventListener = (event) => {
                    const target = event.target as HTMLElement;
                    if (
                        dropdown &&
                        target != null &&
                        !dropdown.contains(target)
                    ) {
                        selected.set(false);
                    }
                })
            );
        }
    });

    onDestroy(() => {
        if (browser) {
            if (eventListener) {
                document.removeEventListener("click", eventListener);
            }
        }
    });
</script>

<div bind:this={dropdown} class="dropdown deftu-body">
    <button
        on:click={() => {
            selected.update((value) => !value);
        }}
        class="dropdown-button deftu-body"
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
                class="deftu-body"
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
        width: fit-content;
    }

    .dropdown-button {
        display: flex;
        align-items: center;
        gap: 4px;

        width: auto;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--deftu-background-2);
        color: var(--deftu-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .dropdown-button.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--deftu-background-1);
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
        padding: 5px;
        overflow: hidden;
        z-index: 1;

        max-height: 95px;
        overflow-y: scroll;

        scrollbar-width: thin;
        scrollbar-color: var(--deftu-primary) var(--deftu-background-2);
    }

    .dropdown-items.visible::-webkit-scrollbar {
        width: 5px;
    }

    .dropdown-items.visible::-webkit-scrollbar-track {
        background-color: var(--deftu-background-2);
    }

    .dropdown-items.visible::-webkit-scrollbar-thumb {
        background-color: var(--deftu-primary);
        border-radius: 1px;
    }

    .dropdown-items.visible button {
        display: block;
        width: 100%;
        padding: 7.5px 10px;
        border: none;
        border-radius: 5px;
        background-color: var(--deftu-background-2);
        color: var(--deftu-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .dropdown-items.visible button:hover {
        background-color: var(--deftu-background-1);
    }
</style>

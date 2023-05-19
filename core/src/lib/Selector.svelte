<script lang="ts">
    import { Size, type SelectionPair } from "./index.js";
    import { ChevronIcon } from "./icons/index.js";

    import { onMount, onDestroy } from "svelte";
    import { writable } from "svelte/store";
    import { BROWSER } from "esm-env";

    export let value: string | null = null;
    export let options: Array<string | SelectionPair> = [];
    export let disabled: boolean = false;
    export let size: string = Size.Medium;

    $: totalOptions = [
        {
            label: "Select an option",
            value: null
        },
        ...options.map((item) => {
            if (typeof item === "string") {
                return { label: item, value: item };
            } else {
                return item;
            }
        })
    ];

    let dropdown: HTMLElement | null = null;
    let clickEventListener: ((this: Document, event: Event) => any) | null =
        null;
    let focusEventListener: ((this: Document, event: Event) => any) | null =
        null;
    const selected = writable(false);

    onMount(() => {
        if (BROWSER) {
            document.addEventListener(
                "click",
                (clickEventListener = (event) => {
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

            document.addEventListener(
                "focus",
                (focusEventListener = (event) => {
                    const target = event.target as HTMLElement;
                    if (
                        dropdown &&
                        target != null &&
                        !dropdown.contains(target)
                    ) {
                        selected.set(false);
                    }
                }),
                true
            );
        }
    });

    onDestroy(() => {
        if (BROWSER) {
            if (clickEventListener)
                document.removeEventListener("click", clickEventListener);
            if (focusEventListener)
                document.removeEventListener("focus", focusEventListener);
        }
    });
</script>

<div bind:this={dropdown} class="dropdown {size} defign-body">
    <button
        on:click={() => {
            selected.update((value) => !value);
        }}
        class="dropdown-button defign-body"
        class:selected={$selected}
        class:disabled
    >
        <span>{value ?? "Select an option"}</span>
        <div class="button-icon">
            <ChevronIcon />
        </div>
    </button>

    <!-- TODO -->

    <!-- <div class="dropdown-items" class:visible={$selected}> -->
        <!-- {#each totalOptions as item} -->
            <!-- <button -->
                <!-- on:click={() => { -->
                    // value = item.value;
                    // selected.set(false);
                // }}
                <!-- class="defign-body" -->
                <!-- class:selected={value === item.value} -->
            <!-- > -->
                <!-- {item.label} -->
            <!-- </button> -->
        <!-- {/each} -->
    <!-- </div> -->
</div>

<style>
    .dropdown {
        --dropdown-width: 0px;
        --dropdown-height: 0px;

        --computed-dropdown-width: max(fit-content, var(--dropdown-width));
        --computed-dropdown-height: max(fit-content, var(--dropdown-height));

        position: relative;
        display: inline-block;
        width: fit-content;
    }

    .dropdown-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        width: var(--computed-dropdown-width);
        height: var(--computed-dropdown-height);
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--defign-background-2);
        color: var(--defign-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .dropdown-button:disabled {
        cursor: not-allowed;
        background-color: var(--deftu-background-3);
    }

    .dropdown-button:focus {
        outline: solid 2px var(--defign-primary);
        outline-offset: 1px;
    }

    .dropdown.xs {
        --dropdown-width: 100px;
        --dropdown-height: 25px;
    }

    .dropdown.sm {
        --dropdown-width: 150px;
        --dropdown-height: 30px;
    }

    .dropdown.md {
        --dropdown-width: 200px;
        --dropdown-height: 35px;
    }

    .dropdown.lg {
        --dropdown-width: 250px;
        --dropdown-height: 40px;
    }

    .dropdown.xl {
        --dropdown-width: 300px;
        --dropdown-height: 45px;
    }

    .dropdown-items {
        visibility: hidden;
        display: none;
        position: absolute;
        top: calc(100% + 2px);
        left: 0;
        width: var(--computed-dropdown-width);
        background-color: var(--defign-background-2);
        border-radius: 5px;
        overflow: auto;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
        transition: max-height 0.15s ease-in;
        max-height: 0;
        z-index: 1000;
    }

    .dropdown-items.visible {
        visibility: visible;
        display: block;
        max-height: 150px;
    }

    .dropdown-items button {
        --dropdown-item-margin: 2.5px;

        width: calc(100% - var(--dropdown-item-margin) * 2);
        margin: var(--dropdown-item-margin);
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        color: var(--defign-text);
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .dropdown-items button:hover {
        background-color: var(--defign-background-1);
    }

    .dropdown-items button.selected {
        background-color: var(--defign-primary);
    }

    .dropdown-items button.selected:hover {
        filter: brightness(0.9);
    }

    .dropdown-items button:focus {
        outline: solid 2px var(--defign-primary);
        outline-offset: 1px;
    }
</style>

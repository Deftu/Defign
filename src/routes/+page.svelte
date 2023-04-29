<script lang="ts">
    import "$lib/global.css";
    import { Button, CopyButton, Checkbox, ChipGroup, Dropdown } from "$lib";

    import { writable } from "svelte/store";
    import { onMount } from "svelte";

    const checkboxStore1 = writable(false);
    const checkboxStore2 = writable(true);
    const chipGroupStore = writable(null);
    const dropdownStore1 = writable(null);
    const dropdownStore2 = writable("Item 1");

    onMount(() => {
        checkboxStore1.subscribe((value) => {
            console.log("checkboxStore1", value);
        });

        checkboxStore2.subscribe((value) => {
            console.log("checkboxStore2", value);
        });

        chipGroupStore.subscribe((value) => {
            console.log("chipGroupStore", value);
        });

        dropdownStore1.subscribe((value) => {
            console.log("dropdownStore1", value);
        });

        dropdownStore2.subscribe((value) => {
            console.log("dropdownStore2", value);
        });
    });
</script>

<div class="components">
    <div class="buttons">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>

        <CopyButton value="Copied text 1" />
        <CopyButton text="Copy" value="Copied text 2" />
    </div>

    <div class="checkboxes">
        <Checkbox bind:value={$checkboxStore1}>Checkbox 1</Checkbox>
        <Checkbox bind:value={$checkboxStore2}>Checkbox 2</Checkbox>
    </div>

    <div class="selectors">
        <ChipGroup bind:value={$chipGroupStore} items={["Chip 1", "Chip 2", "Chip 3"]} />
        <Dropdown bind:value={$dropdownStore1} items={["Item 1", "Item 2", "Item 3"]} />
        <Dropdown bind:value={$dropdownStore2} items={["Item 1", "Item 2", "Item 3"]} />
    </div>
</div>

<style>
    :global(body) {
        background-color: var(--deftu-background-1);
        color: var(--deftu-text);
    }

    .components {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 10px;
    }

    .buttons {
        display: flex;
        gap: 8px;
    }

    .checkboxes {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .selectors {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>

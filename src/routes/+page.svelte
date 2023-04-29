<script lang="ts">
    import "$lib/global.css";
    import {
        Button,
        CopyButton,
        Checkbox,
        ChipGroup,
        Dropdown,
        Card,
        Modal
    } from "$lib";

    import { writable } from "svelte/store";
    import { onMount } from "svelte";

    let modal: Modal | null = null;

    const checkboxStore1 = writable(false);
    const checkboxStore2 = writable(true);
    const chipGroupStore = writable(null);
    const dropdownStore1 = writable(null);
    const dropdownStore2 = writable("Item 1");
    const dropdownStore3 = writable("Item 2");

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

        dropdownStore3.subscribe((value) => {
            console.log("dropdownStore3", value);
        });
    });
</script>

<div class="components">
    <Modal bind:this={modal}>
        <h1 class="page-header deftu-header">Modal</h1>
        <p class="deftu-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            cupiditate deleniti. Inventore fugit repellat placeat totam
            accusantium, temporibus expedita sit quis ad molestiae iusto, omnis
            est amet odit possimus laboriosam!
        </p>
        <Button
            on:click={() => {
                modal?.hide();
            }}
            type="primary">Close</Button
        >
    </Modal>

    <h1 class="page-header deftu-header">Components</h1>

    <h2 class="page-header deftu-header">Buttons</h2>
    <div class="buttons">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>

        <Button
            on:click={() => {
                modal?.show();
            }}
            type="primary">Show Modal</Button
        >

        <CopyButton value="Copied text 1" />
        <CopyButton text="Copy" value="Copied text 2" />
    </div>

    <h2 class="page-header deftu-header">Checkboxes</h2>
    <div class="checkboxes">
        <Checkbox bind:value={$checkboxStore1}>Checkbox 1</Checkbox>
        <Checkbox bind:value={$checkboxStore2}>Checkbox 2</Checkbox>
    </div>

    <h2 class="page-header deftu-header">Selectors</h2>
    <div class="selectors">
        <ChipGroup
            bind:value={$chipGroupStore}
            items={["Chip 1", "Chip 2", "Chip 3"]}
        />
        <Dropdown
            bind:value={$dropdownStore1}
            items={["Item 1", "Item 2", "Item 3"]}
        />
        <Dropdown
            bind:value={$dropdownStore2}
            items={["Item 1", "Item 2", "Item 3"]}
        />
        <Dropdown
            bind:value={$dropdownStore3}
            items={[
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
                "Item 7",
                "Item 8",
                "Item 9",
                "Item 10",
                "Item 11",
                "Item 12",
                "Item 13",
                "Item 14",
                "Item 15"
            ]}
        />
    </div>

    <h2 class="page-header deftu-header">Cards</h2>
    <div class="cards">
        <Card>
            <h1 class="page-header deftu-header">Card</h1>
        </Card>
    </div>
</div>

<style>
    :global(body) {
        background-color: var(--deftu-background-1);
        color: var(--deftu-text);
    }

    .page-header {
        padding: 0;
        margin: 0;
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

    .cards {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>

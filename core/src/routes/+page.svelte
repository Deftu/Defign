<script lang="ts">
    import "../lib/styles.css";
    import {
        Button,
        CopyButton,
        Checkbox,
        ChipGroup,
        Card,
        Avatar,
        Toggle
    } from "../lib/index.js";
    import {
        TextInput
    } from "../lib/inputs/index.js";

    import { writable } from "svelte/store";
    import { onMount } from "svelte";
</script>

<svelte:head>
    <title>Defign</title>
</svelte:head>

<section class="button-group">
    <h1 class="defign-header">Buttons</h1>

    <section class="button-group-primary">
        <Button size="xs">Primary</Button>
        <Button size="xs" disabled>Primary</Button>

        <Button size="sm">Primary</Button>
        <Button size="sm" disabled>Primary</Button>

        <Button size="md">Primary</Button>
        <Button size="md" disabled>Primary</Button>

        <Button size="lg">Primary</Button>
        <Button size="lg" disabled>Primary</Button>

        <Button size="xl">Primary</Button>
        <Button size="xl" disabled>Primary</Button>
    </section>

    <section class="button-group-secondary">
        <Button size="xs" type="secondary">Secondary</Button>
        <Button size="xs" type="secondary" disabled>Secondary</Button>

        <Button size="sm" type="secondary">Secondary</Button>
        <Button size="sm" type="secondary" disabled>Secondary</Button>

        <Button size="md" type="secondary">Secondary</Button>
        <Button size="md" type="secondary" disabled>Secondary</Button>

        <Button size="lg" type="secondary">Secondary</Button>
        <Button size="lg" type="secondary" disabled>Secondary</Button>

        <Button size="xl" type="secondary">Secondary</Button>
        <Button size="xl" type="secondary" disabled>Secondary</Button>
    </section>

    <section class="button-group-danger">
        <Button size="xs" type="danger">Danger</Button>
        <Button size="xs" type="danger" disabled>Danger</Button>

        <Button size="sm" type="danger">Danger</Button>
        <Button size="sm" type="danger" disabled>Danger</Button>

        <Button size="md" type="danger">Danger</Button>
        <Button size="md" type="danger" disabled>Danger</Button>

        <Button size="lg" type="danger">Danger</Button>
        <Button size="lg" type="danger" disabled>Danger</Button>

        <Button size="xl" type="danger">Danger</Button>
        <Button size="xl" type="danger" disabled>Danger</Button>
    </section>

    <section class="button-group-warning">
        <Button size="xs" type="warning">Warning</Button>
        <Button size="xs" type="warning" disabled>Warning</Button>

        <Button size="sm" type="warning">Warning</Button>
        <Button size="sm" type="warning" disabled>Warning</Button>

        <Button size="md" type="warning">Warning</Button>
        <Button size="md" type="warning" disabled>Warning</Button>

        <Button size="lg" type="warning">Warning</Button>
        <Button size="lg" type="warning" disabled>Warning</Button>

        <Button size="xl" type="warning">Warning</Button>
        <Button size="xl" type="warning" disabled>Warning</Button>
    </section>

    <section class="button-group-copy">
        <CopyButton value="Copied text (xs)" size="xs" />
        <CopyButton value="Copied text (xs)" size="xs" disabled />

        <CopyButton value="Copied text (xs labeled)" size="xs" text="Copy" />
        <CopyButton value="Copied text (xs labeled)" size="xs" text="Copy" disabled />

        <CopyButton value="Copied text (sm)" size="sm" />
        <CopyButton value="Copied text (sm)" size="sm" disabled />

        <CopyButton value="Copied text (sm labeled)" size="sm" text="Copy" />
        <CopyButton value="Copied text (sm labeled)" size="sm" text="Copy" disabled />

        <CopyButton value="Copied text (md)" size="md" />
        <CopyButton value="Copied text (md)" size="md" disabled />

        <CopyButton value="Copied text (md labeled)" size="md" text="Copy" />
        <CopyButton value="Copied text (md labeled)" size="md" text="Copy" disabled />

        <CopyButton value="Copied text (lg)" size="lg" />
        <CopyButton value="Copied text (lg)" size="lg" disabled />

        <CopyButton value="Copied text (lg labeled)" size="lg" text="Copy" />
        <CopyButton value="Copied text (lg labeled)" size="lg" text="Copy" disabled />

        <CopyButton value="Copied text (xl)" size="xl" />
        <CopyButton value="Copied text (xl)" size="xl" disabled />

        <CopyButton value="Copied text (xl labeled)" size="xl" text="Copy" />
        <CopyButton value="Copied text (xl labeled)" size="xl" text="Copy" disabled />
    </section>
</section>

<h1 class="defign-header">Checkboxes</h1>
<section class="checkbox-group">
    <Checkbox size="xs" />
    <Checkbox size="xs" checked />
    <Checkbox size="xs" disabled />
    <Checkbox size="xs" checked disabled />

    <Checkbox size="sm" />
    <Checkbox size="sm" checked />
    <Checkbox size="sm" disabled />
    <Checkbox size="sm" checked disabled />

    <Checkbox size="md" />
    <Checkbox size="md" checked />
    <Checkbox size="md" disabled />
    <Checkbox size="md" checked disabled />

    <Checkbox size="lg" />
    <Checkbox size="lg" checked />
    <Checkbox size="lg" disabled />
    <Checkbox size="lg" checked disabled />

    <Checkbox size="xl" />
    <Checkbox size="xl" checked />
    <Checkbox size="xl" disabled />
    <Checkbox size="xl" checked disabled />
</section>

<h1 class="defign-header">Toggles</h1>
<section class="toggles-group">
    <Toggle size="xs" />
    <Toggle size="xs" value />
    <Toggle size="xs" disabled />
    <Toggle size="xs" value disabled />

    <Toggle size="sm" />
    <Toggle size="sm" value />
    <Toggle size="sm" disabled />
    <Toggle size="sm" value disabled />

    <Toggle size="md" />
    <Toggle size="md" value />
    <Toggle size="md" disabled />
    <Toggle size="md" value disabled />

    <Toggle size="lg" />
    <Toggle size="lg" value />
    <Toggle size="lg" disabled />
    <Toggle size="lg" value disabled />

    <Toggle size="xl" />
    <Toggle size="xl" value />
    <Toggle size="xl" disabled />
    <Toggle size="xl" value disabled />
</section>

<h1 class="defign-header">Chips</h1>
<section class="chip-group">
    <ChipGroup size="xs" items={["Item 1", "Item 2", "Item 3"]} />
    <ChipGroup size="xs" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} />
    <ChipGroup size="xs" items={["Item 1", "Item 2", "Item 3"]} disabled />
    <ChipGroup size="xs" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} disabled />

    <ChipGroup size="sm" items={["Item 1", "Item 2", "Item 3"]} />
    <ChipGroup size="sm" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} />
    <ChipGroup size="sm" items={["Item 1", "Item 2", "Item 3"]} disabled />
    <ChipGroup size="sm" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} disabled />

    <ChipGroup size="md" items={["Item 1", "Item 2", "Item 3"]} />
    <ChipGroup size="md" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} />
    <ChipGroup size="md" items={["Item 1", "Item 2", "Item 3"]} disabled />
    <ChipGroup size="md" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} disabled />

    <ChipGroup size="lg" items={["Item 1", "Item 2", "Item 3"]} />
    <ChipGroup size="lg" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} />
    <ChipGroup size="lg" items={["Item 1", "Item 2", "Item 3"]} disabled />
    <ChipGroup size="lg" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} disabled />

    <ChipGroup size="xl" items={["Item 1", "Item 2", "Item 3"]} />
    <ChipGroup size="xl" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} />
    <ChipGroup size="xl" items={["Item 1", "Item 2", "Item 3"]} disabled />
    <ChipGroup size="xl" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]} disabled />
</section>

<h1 class="defign-header">Text Inputs</h1>
<section class="text-input-group">
    <TextInput />
    <TextInput disabled />
    <TextInput placeholder="Enter your name..." />
    <TextInput placeholder="Enter your name..." disabled />
    <TextInput placeholder="Enter your name..." value="Deftu" />
    <TextInput placeholder="Enter your name..." value="Deftu" disabled />
    <TextInput placeholder="Enter your name..." value="Deftu" autocomplete="name" />
</section>

<style>
    :global(body) {
        background-color: var(--defign-background-1);
        color: var(--defign-text);
    }

    .button-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
        align-content: center;
        margin: 10px;
    }

    [class^="button-group-"] {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin-bottom: 10px;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .button-group-copy {
        grid-template-columns: repeat(4, 1fr);
    }

    .checkbox-group {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
        margin-bottom: 10px;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .toggles-group {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
        margin-bottom: 10px;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .chip-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin-bottom: 10px;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .text-input-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin-bottom: 10px;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }
</style>

<script lang="ts">
    import "$lib/global.css";
    import { Button, ClipboardIcon, CheckIcon } from "$lib";

    import { writable } from "svelte/store";

    const color = "var(--deftu-text-faded)";
    const copied = writable(false);

    export let value: string | null = null;
    export let text: string | null = null;

    copied.subscribe((value) => {
        if (value) {
            const previousText = text;
            if (previousText != null) text = "Copied!";
            setTimeout(() => {
                copied.set(false);
                text = previousText;
            }, 3000);
        }
    });
</script>

<Button on:click={() => {
    if (value != null) {
        copied.set(true);
        navigator.clipboard.writeText(value);
    }
}}>
    <div class="copy-button">
        {#if text != null}
            <span>{text}</span>
        {/if}

        {#if $copied}
        <CheckIcon {color} />
        {:else}
        <ClipboardIcon {color} />
        {/if}
    </div>
</Button>

<style>
    .copy-button {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .copy-button span {
        color: var(--deftu-text-faded);
    }
</style>

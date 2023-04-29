<script lang="ts">
    import "$lib/global.css";
    import { ImageBrokenIcon } from "$lib";

    import { writable } from "svelte/store";

    const loaded = writable(true);

    export let src = "";
    export let alt = "";
    export let circle = false;

    export let width = "100%";
    export let height = "100%";
</script>

{#if !src || !$loaded}
    <div
        class="avatar-placeholder"
        style="width: {width}; height: {height}"
        class:circle
    >
        <ImageBrokenIcon width="50%" height="50%" />
    </div>
{:else}
    <img
        on:error={() => {
            loaded.set(false);
        }}
        class="avatar"
        {width}
        {height}
        {src}
        {alt}
        class:circle
    />
{/if}

<style>
    .avatar-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--deftu-background-2);
        border-radius: 10px;

        width: 100%;
        height: 100%;
    }

    .avatar-placeholder.circle {
        border-radius: 100%;
    }

    .avatar {
        border-radius: 10px;
    }

    .avatar.circle {
        border-radius: 100%;
    }
</style>

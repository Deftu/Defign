<script lang="ts">
    import { Size } from "./index.js";
    import { ImageBrokenIcon } from "./icons/index.js";

    import { writable } from "svelte/store";

    const loaded = writable(true);

    export let src = "";
    export let alt = "";
    export let circle = false;
    export let size: string = Size.Medium;
</script>

{#if !src || !$loaded}
    <div class="avatar-placeholder {size}" class:circle>
        <ImageBrokenIcon width="50%" height="50%" />
    </div>
{:else}
    <img
        on:error={() => {
            loaded.set(false);
        }}
        on:abort={() => {
            loaded.set(false);
        }}
        on:cancel={() => {
            loaded.set(false);
        }}
        class="avatar {size}"
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
        background-color: var(--defign-background-2);
        border-radius: 10px;
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

    .avatar,
    .avatar-placeholder {
        --avatar-size: 0px;
        min-width: var(--avatar-size);
        width: var(--avatar-size);
        height: var(--avatar-size);
    }

    .avatar.xs,
    .avatar-placeholder.xs {
        --avatar-size: 50px;
    }

    .avatar.sm,
    .avatar-placeholder.sm {
        --avatar-size: 75px;
    }

    .avatar.md,
    .avatar-placeholder.md {
        --avatar-size: 100px;
    }

    .avatar.lg,
    .avatar-placeholder.lg {
        --avatar-size: 125px;
    }

    .avatar.xl,
    .avatar-placeholder.xl {
        --avatar-size: 150px;
    }
</style>

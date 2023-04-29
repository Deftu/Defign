<script lang="ts">
    import "./global.css";
    import { ButtonType } from "$lib";

    export let type: "primary" | "secondary" | "danger" | "warning" = "primary";
</script>

<button
    on:click
    class="btn deftu-body"
    class:primary={type === "primary"}
    class:secondary={type === "secondary"}
    class:danger={type === "danger"}
    class:warning={type === "warning"}
>
    <slot />
</button>

<style>
    .btn {
        --focus-outline-color: var(--deftu-primary);

        border: none;
        border-radius: 5px;
        padding: 5px;
        color: var(--deftu-text);
        cursor: pointer;
        transition: transform 0.1s ease-in-out;
    }

    .btn:active {
        transform: scale(0.95);
    }

    .btn.primary {
        background-color: var(--deftu-background-2);
    }

    .btn.secondary {
        background-color: var(--deftu-background-1);
    }

    .btn.danger {
        --focus-outline-color: var(--deftu-danger);
        background-color: var(--deftu-danger);
    }

    .btn.warning {
        --focus-outline-color: var(--deftu-warning);
        background-color: var(--deftu-warning);
    }

    .btn:focus {
        outline: solid 2px var(--focus-outline-color);
        outline-offset: 1px;
    }
</style>

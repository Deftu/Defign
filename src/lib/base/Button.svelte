<script lang="ts">
    import "$lib/global.css";
    import { ButtonType } from "$lib";

    export let type = ButtonType.Primary;
</script>

<button
    class="btn"
    class:primary={type === ButtonType.Primary}
    class:secondary={type === ButtonType.Secondary}
    class:danger={type === ButtonType.Danger}
    class:warning={type === ButtonType.Warning}
>
    <slot />
</button>

<style>
    .btn {
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
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
        background-color: var(--deftu-danger);
    }

    .btn.warning {
        background-color: var(--deftu-warning);
    }

    .btn:focus {
        outline: solid 2px var(--deftu-primary);
        outline-offset: 1px;
    }
</style>

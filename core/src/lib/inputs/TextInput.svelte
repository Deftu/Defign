<script lang="ts">
    import { Size } from "../index.js";

    export let size: string = Size.Medium;
    export let placeholder: string = "";
    export let value: string = "";
    export let disabled: boolean = false;
    export let readonly: boolean = false;
    export let autocomplete: string = "off";
    export let name: string = "";
</script>

<div class="input-group">
    <input
        class="input defign-body {size}"
        type="text"
        bind:value
        {placeholder}
        {disabled}
        {readonly}
        {autocomplete}
        {name}
    />
</div>

<style>
    .input-group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .input {
        width: 100%;
        margin: 0;
        padding: 10px;
        border-radius: 5px;
        background-color: var(--defign-background-2);
        border: none;
        transition: border-color 0.2s ease-in-out;
    }

    .input::placeholder {
        color: var(--defign-text-faded);
    }

    .input:focus {
        outline: solid 2px var(--defign-primary);
        outline-offset: 1px;
    }

    .input:disabled {
        filter: brightness(0.75);
    }

    .input.xs {
        max-width: 200px;
    }

    .input.sm {
        max-width: 300px;
    }

    .input.md {
        max-width: 400px;
    }

    .input.lg {
        max-width: 500px;
    }

    .input.xl {
        max-width: 600px;
    }
</style>

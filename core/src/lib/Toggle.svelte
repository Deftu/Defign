<script lang="ts">
    import { Size } from "./index.js";

    export let value: boolean = false;
    export let disabled: boolean = false;
    export let size: string = Size.Medium;
</script>

<label class="toggle {size}" class:disabled>
    <input bind:checked={value} type="checkbox" {disabled} />
    <span class="slider" />
</label>

<style>
    .toggle {
        --toggle-width: 0px;
        --toggle-height: 0px;

        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        width: var(--toggle-width);
        height: var(--toggle-height);
    }

    .toggle.disabled {
        filter: brightness(0.75);
        cursor: not-allowed;
    }

    .toggle.xs {
        --toggle-width: 40px;
        --toggle-height: 20px;
    }

    .toggle.sm {
        --toggle-width: 45px;
        --toggle-height: 22.5px;
    }

    .toggle.md {
        --toggle-width: 50px;
        --toggle-height: 25px;
    }

    .toggle.lg {
        --toggle-width: 55px;
        --toggle-height: 27.5px;
    }

    .toggle.xl {
        --toggle-width: 60px;
        --toggle-height: 30px;
    }

    .toggle input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: var(--defign-background-2);
        border-radius: 35px;
        transition: 0.4s;
    }

    .toggle .slider:before {
        position: absolute;
        content: "";
        height: calc(var(--toggle-height) - 10px);
        width: calc(var(--toggle-height) - 10px);
        left: 5px;
        bottom: 5px;

        background-color: var(--defign-text);
        border-radius: 50%;
        transition: 0.4s;
    }

    .toggle input:checked + .slider {
        background-color: var(--defign-primary);
    }

    .toggle input:focus + .slider {
        box-shadow: 0 0 1px var(--defign-primary);
    }

    .toggle input:checked + .slider:before {
        transform: translateX(calc(var(--toggle-width) - var(--toggle-height)));
    }
</style>

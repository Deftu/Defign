<script lang="ts">
    import "$lib/global.css";
    import Button from "$lib/base/Button.svelte";
</script>

<Button type="primary">Click me!</Button>
<Button type="secondary">Click me!</Button>
<Button type="danger">Click me!</Button>
<Button type="warning">Click me!</Button>
<Button>
    <img
        width="100"
        height="50"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
    />
</Button>

<style>
    :global(body) {
        background-color: var(--deftu-background-1);
        color: var(--deftu-text);
    }
</style>

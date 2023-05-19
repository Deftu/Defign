<script lang="ts">
    export let width: string = "100%";
    export let height: string = "100%";
</script>

<div {width} {height} class="card">
    <slot />
</div>

<style>
    .card {
        background-color: var(--defign-background-2);
        border-radius: 10px;
        padding: 15px;
        overflow-y: auto;
    }
</style>

<script lang="ts">
    import { notifications } from "./notifications.js";
</script>

<div class="notifications-container">
    {#each $notifications.map(data => data.component) as component}
    <svelte:component this={component} />
    {/each}
</div>

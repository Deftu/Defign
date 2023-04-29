<script lang="ts">
    import "../global.css";

    export let color: string = "var(--deftu-text)";
    export let width: string = "24px";
    export let height: string = "24px";
</script>

<svg {width} {height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
        fill={color}
        d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
    />
</svg>

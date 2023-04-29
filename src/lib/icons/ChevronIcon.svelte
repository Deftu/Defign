<script lang="ts">
    import "$lib/global.css";

    export let color: string = "var(--deftu-text)";
    export let width: string = "24px";
    export let height: string = "24px";
    export let direction: "up" | "down" | "left" | "right" = "down";
</script>

<svg
    {width}
    {height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style="transform: rotate({direction === 'up'
        ? '180deg'
        : direction === 'left'
        ? '90deg'
        : direction === 'right'
        ? '-90deg'
        : '0deg'})"
>
    <path
        fill={color}
        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
    />
</svg>

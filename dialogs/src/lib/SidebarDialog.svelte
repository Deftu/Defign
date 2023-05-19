<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { BROWSER } from "esm-env";

    export let visible: boolean = false;
    export let rightAligned: boolean = false;

    let sidebarOverlay: HTMLElement | null = null;
    let sidebar: HTMLElement | null = null;

    let appearAnimation: boolean = false;
    let keyEventListener:
        | ((this: Document, event: KeyboardEvent) => any)
        | null = null;

    export function show(animate: boolean = true) {
        visible = true;
        sidebar?.focus();
        appearAnimation = animate;
    }

    export function hide(animate: boolean = true) {
        if (animate) {
            sidebar?.classList.add("sidebar-disappear");
        } else visible = false;
    }

    onMount(() => {
        if (BROWSER) {
            if (visible) {
                sidebar?.focus();
            }

            document.addEventListener(
                "keydown",
                (keyEventListener = (event) => {
                    const target = event.target as HTMLElement;
                    if (event.key === "Escape") {
                        if (visible) {
                            event.preventDefault();
                            hide();
                        }
                    }

                    if (event.key === "Tab") {
                        if (target !== sidebar) return;
                        event.preventDefault();

                        if (!visible) return;

                        const focusableElements = sidebar?.querySelectorAll(
                            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
                        );
                        if (focusableElements == null) return;

                        const firstElement =
                            focusableElements[0] as HTMLElement;
                        const lastElement = focusableElements[
                            focusableElements.length - 1
                        ] as HTMLElement;

                        if (event.shiftKey) {
                            if (document.activeElement === firstElement) {
                                lastElement.focus();
                            } else {
                                const index = Array.from(
                                    focusableElements
                                ).indexOf(
                                    document.activeElement as HTMLElement
                                );
                                (
                                    focusableElements[index - 1] as HTMLElement
                                ).focus();
                            }
                        } else {
                            if (document.activeElement === lastElement) {
                                firstElement.focus();
                            } else {
                                const index = Array.from(
                                    focusableElements
                                ).indexOf(
                                    document.activeElement as HTMLElement
                                );
                                (
                                    focusableElements[index + 1] as HTMLElement
                                ).focus();
                            }
                        }
                    }
                })
            );
        }
    });

    onDestroy(() => {
        if (BROWSER) {
            if (keyEventListener)
                document.removeEventListener("keydown", keyEventListener);
        }
    });
</script>

{#if visible}
    <div bind:this={sidebarOverlay} class="sidebar-overlay">
        <div
            bind:this={sidebar}
            on:animationend={() => {
                console.log("animationend");
                if (sidebar?.classList.contains("sidebar-appear")) {
                    console.log("visible");
                    sidebar?.classList.remove("sidebar-appear");
                } else if (sidebar?.classList.contains("sidebar-disappear")) {
                    visible = false;
                    sidebar?.classList.remove("sidebar-disappear");
                }
            }}
            class="sidebar"
            class:sidebar-appear={appearAnimation}
            class:sidebar-disappear={false}
            class:sidebar-right-aligned={rightAligned}
            role="dialog"
            tabindex="-1"
        >
            <slot />
        </div>
    </div>
{/if}

<style>
    .sidebar-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .sidebar {
        --animation-x-start: -100%;
        --animation-x-end: 0%;

        position: fixed;
        z-index: 1001;
        width: 300px;
        height: 100%;
        padding: 10px;
        background-color: var(--defign-background-1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        outline: none;
    }

    .sidebar-right-aligned {
        --animation-x-start: 100%;
        --animation-x-end: 0%;

        right: 0;
    }

    .sidebar-appear {
        animation: sidebar-appear 0.3s ease-in-out;
    }

    .sidebar-disappear {
        animation: sidebar-disappear 0.3s ease-in-out;
    }

    @keyframes sidebar-appear {
        0% {
            transform: translateX(var(--animation-x-start));
        }

        100% {
            transform: translateX(var(--animation-x-end));
        }
    }

    @keyframes sidebar-disappear {
        0% {
            transform: translateX(var(--animation-x-end));
        }

        100% {
            transform: translateX(var(--animation-x-start));
        }
    }
</style>

<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { BROWSER } from "esm-env";

    export let visible: boolean = false;

    let modalOverlay: HTMLElement | null = null;
    let modal: HTMLElement | null = null;

    let appearAnimation: boolean = false;
    let keyEventListener:
        | ((this: Document, event: KeyboardEvent) => any)
        | null = null;

    export function show(animate: boolean = true) {
        visible = true;
        modal?.focus();
        appearAnimation = animate;
    }

    export function hide(animate: boolean = true) {
        if (animate) {
            modal?.classList.add("modal-disappear");
        } else visible = false;
    }

    onMount(() => {
        if (BROWSER) {
            if (visible) {
                modal?.focus();
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
                        if (target !== modal) return;
                        event.preventDefault();

                        if (!visible) return;

                        const focusableElements = modal?.querySelectorAll(
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
    <div bind:this={modalOverlay} class="modal-overlay">
        <div
            bind:this={modal}
            on:animationend={() => {
                if (modal?.classList.contains("modal-appear")) {
                    modal?.classList.remove("modal-appear");
                } else if (modal?.classList.contains("modal-disappear")) {
                    visible = false;
                    modal?.classList.remove("modal-disappear");
                }
            }}
            class="modal"
            class:modal-appear={appearAnimation}
            class:modal-disappear={false}
            role="dialog"
            tabindex="-1"
        >
            <slot />
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }

    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--defign-background-1);
        border-radius: 0.5rem;
        padding: 1rem;
        width: 50%;
        max-width: 50rem;
        max-height: 50rem;
        overflow-y: auto;
    }

    .modal-appear {
        animation: modal-appear 0.2s ease-out;
    }

    .modal-disappear {
        animation: modal-disappear 0.2s ease-out;
    }

    @keyframes modal-appear {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes modal-disappear {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
    }
</style>

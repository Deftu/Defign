<script lang="ts">
    import "$lib/global.css";
    import { Card } from "$lib";

    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

    export let visible: boolean = false;

    let modal: HTMLElement | null = null;
    let keyEventListener: ((this: Document, event: KeyboardEvent) => any) | null = null;

    export function show() {
        visible = true;
        modal?.focus();
    }

    export function hide() {
        visible = false;
    }

    onMount(() => {
        if (browser) {
            if (visible) {
                modal?.focus();
            }

        document.addEventListener(
            "keydown",
            (keyEventListener = (event) => {
                if (event.key === "Escape") {
                    hide();
                }

                if (event.key === "Tab") {
                    event.preventDefault();

                    if (!visible) return;

                    const focusableElements = modal?.querySelectorAll(
                        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
                    );
                    if (focusableElements == null) return;

                    const firstElement = focusableElements[0] as HTMLElement;
                    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                    if (event.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                        } else {
                            const index = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
                            focusableElements[index - 1].focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                        } else {
                            const index = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
                            focusableElements[index + 1].focus();
                        }
                    }
                }
            })
        );
        }
    });

    onDestroy(() => {
        if (browser) {
            if (keyEventListener) document.removeEventListener("keydown", keyEventListener);
        }
    });
</script>

{#if visible}
    <div class="modal-background">
        <div bind:this={modal} class="modal" role="dialog" tabindex="-1">
            <slot />
        </div>
    </div>
{/if}

<style>
    .modal-background {
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
        background-color: var(--deftu-background-1);
        border-radius: 0.5rem;
        padding: 1rem;
        width: 50%;
        max-width: 50rem;
        max-height: 50rem;
        overflow-y: auto;
    }
</style>

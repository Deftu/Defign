# Defign

**Def**tu's des**ign** system for **defining** beautiful web-based UIs.

## Initial Setup

To install Defign in your project, run the following command:

```bash
npm install @deftu/defign
```

Then, you'll need to import it's styles into your project. To do this, you'll need to have a `+layout.svelte` file set up.

```svelte
<script lang="ts">
    import "@deftu/defign/styles.css";
</script>

<slot />
```

And that's it! You're ready to start using Defign in your project.

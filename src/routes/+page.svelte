<script>
    import UserContatiner from './userContatiner.svelte';
</script>
<style>
    div {
        height: 100%
    }
    :global(body) {
        height: 100%;
        background-color: darkgray;
    }
    :global(html) {
        height: 100%;
        background-color: darkgray;
    }
</style>
<div>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<UserContatiner></UserContatiner>
</div>

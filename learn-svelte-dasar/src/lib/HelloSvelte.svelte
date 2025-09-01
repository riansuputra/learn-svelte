<script>
    import Logo from "./Logo.svelte";

    const name = "Svelte";

    const content = "<p>Hello World</p>";
</script>

<h1>Hello {name.toUpperCase()}</h1>

<Logo />

{@html content}

<style>
    h1 {
        color: blue;
    }
</style>

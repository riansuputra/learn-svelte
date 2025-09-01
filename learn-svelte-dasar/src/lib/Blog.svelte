<script>
    import Layout from "./Layout.svelte";
    import { onMount } from "svelte";

    let blog = $state({
        title: "",
        footer: "",
        content: "",
    });

    onMount(async () => {
        const response = await fetch("/blog.json");
        blog = await response.json();
    });
</script>

<Layout title="Contoh Blog" footer="Copyright 2025">
    {#snippet content()}
        {@html blog.content}
    {/snippet}
</Layout>

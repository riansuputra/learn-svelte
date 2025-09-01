<script>
    async function getArticle() {
        let response = await fetch("/article.json");
        return await response.json();
    }
</script>

{#await getArticle()}
    <p>Loading ...</p>
{:then article}
    <h1>{article.title}</h1>
    <p>{article.content}</p>
{:catch error}
    <p>Error: {error.message}</p>
{/await}

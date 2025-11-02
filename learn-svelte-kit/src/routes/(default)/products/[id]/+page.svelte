<script>
    import { invalidateAll } from "$app/navigation";
    import { onMount } from "svelte";

    const { data } = $props();

    // async function getProduct() {
    //     const response = await fetch(`/api/products/${data.id}.json`);
    //     return response.json();
    // }

    onMount(() => {
        invalidateAll();
    });
</script>

<a href="/products">Back to Products</a>

<!-- {#await getProduct()} -->
<!-- <p>Loading Product</p> -->
<!-- {:then product} -->
<h1>{data.id} - {data.name}</h1>
<p>{data.description}</p>
<p>{data.price}</p>
<!-- {:catch error} -->
<!-- <p>Error: {error.message}</p> -->
<!-- {/await} -->

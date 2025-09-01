<script>
    import { getContext } from "svelte";

    const counter = getContext("counter");

    function increment() {
        counter.count++;
    }
</script>

<button onclick={increment}>Increment : {counter.count}</button>

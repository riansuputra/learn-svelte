<script>
    import { counter } from "../state/counter.js";

    function increment() {
        $counter++;
    }
</script>

<button onclick={increment}>Increment : {$counter}</button>

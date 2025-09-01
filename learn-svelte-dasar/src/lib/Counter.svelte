<script>
    let count = $state([]);
    // let total = $derived(count.reduce((a, b) => a + b, 0));
    let total = $derived.by(() => {
        let total = 0;
        for (let i = 0; i < count.length; i++) {
            total += count[i];
        }
        return total;
    });

    function increment() {
        count.push(1);
    }

    function decrement() {
        count.push(-1);
    }

    $inspect(count).with((type, values) => {
        console.log(type, values);
    });
</script>

<h1 style:color="red">{count.join(" + ")} = {total}</h1>

<button onclick={increment}> Increment </button>
<button onclick={decrement}> Decrement </button>

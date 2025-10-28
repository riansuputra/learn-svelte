<script>
    let count = $state(0);
    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }
</script>

<h1>Counter : {count}</h1>

<button onclick={increment}> increment </button>
<button onclick={decrement}> decrement </button>

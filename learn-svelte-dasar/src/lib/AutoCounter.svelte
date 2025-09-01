<script>
    let counter = $state(0);
    let interval = $state(1000);

    function increment() {
        interval += 1000;
    }

    $effect(() => {
        const id = setInterval(() => {
            counter++;
        }, interval);

        return () => clearInterval(id);
    });
</script>

<h1>Counter : {counter}</h1>

<button onclick={increment}>Increment Interval : {interval} ms</button>

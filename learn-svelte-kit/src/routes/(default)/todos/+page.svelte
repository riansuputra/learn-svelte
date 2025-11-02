<script>
    const { data, form } = $props();
</script>

<form method="POST" action="?/add">
    {#if form?.error}
        <label for="todo" style="color: red;">({form?.message}) </label>
    {:else}
        <label for="todo">Todo</label>
    {/if}
    {form?.message}<input type="text" id="todo" name="todo" />
    <button type="submit">Add</button>
</form>

<ul>
    {#each data.todos as todo}
        <li>
            {todo.id} - {todo.name}
            <form method="post" action="?/delete" style="display: inline-block">
                <input type="hidden" name="id" value={todo.id} />
                <button type="submit">Delete</button>
            </form>
        </li>
    {/each}
</ul>

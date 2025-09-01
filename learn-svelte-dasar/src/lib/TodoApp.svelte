<script>
    import Todo from "./Todo.svelte";
    import EditTodo from "./EditTodo.svelte";
    import { fly } from "svelte/transition";

    let data = $state([]);
    let name = $state("");

    let id = 0;

    function add(e) {
        e.preventDefault();
        data.push({ id: id++, name: name });
        name = "";
    }

    function remove(id) {
        data = data.filter((item) => item.id !== id);
    }

    function edit(id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = { edit: true, ...data[i] };
            }
        }
    }

    function onEdit(id, name) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = { id, name, edit: false };
            }
        }
    }
</script>

{#snippet todoRow(todo)}
    <li
        in:fly={{ y: -200, duration: 2000 }}
        out:fly={{ y: 200, duration: 2000 }}
        onintrostart={() => console.log("intro start")}
        onintroend={() => console.log("intro end")}
        onoutrostart={() => console.log("outro start")}
        onoutroend={() => console.log("outro end")}
    >
        {#if todo.edit}
            <EditTodo id={todo.id} name={todo.name} onedit={onEdit} />
        {:else}
            <Todo {...todo} />
            <button onclick={() => edit(todo.id)}> Edit </button>
            <button onclick={() => remove(todo.id)}> Remove </button>
        {/if}
    </li>
{/snippet}

<form>
    <input type="text" id="todo" bind:value={name} />
    <button onclick={add}>Add</button>
</form>

<ul>
    {#each data as todo (todo.id)}
        {@render todoRow(todo)}
    {/each}
</ul>

<script>
    let { id, name, onedit } = $props();

    function save() {
        onedit(id, name);
    }
</script>

{id} <input type="text" {id} bind:value={name} />
<button class="button" onclick={save}>Save</button>

<style>
    .button {
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        transition: background-color cubic-bezier(0.23, 1, 0.32, 1);
    }

    .button:hover {
        background-color: #45a049;
    }
</style>

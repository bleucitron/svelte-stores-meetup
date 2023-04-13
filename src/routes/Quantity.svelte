<script>
  import { basket } from './stores';
  const MAX = 10;

  export let id;
  export let value = 0;

  function increment() {
    if (value < MAX) {
      value++;
    }
  }
  function decrement() {
    if (value > 0) {
      value--;
    }
  }
  function add() {
    basket.add(id, value);
    value = 0;
  }
</script>

<div>
  <button on:click={decrement}>-</button>
  <input
    type="number"
    min={0}
    max={MAX}
    bind:value
    on:change={() => {
      console.log(`Changed quantity for item ${id}: ${value} using the input`);
    }}
  />
  <button on:click={increment}>+</button>
</div>
<button class="add" disabled={!value} on:click={add}>Ajouter</button>

<style>
  div {
    display: flex;
    width: 100%;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    width: 2rem;
    height: 2rem;
  }

  input,
  button {
    text-align: center;
    font-size: 2rem;
  }

  button.add {
    width: 100%;
  }

  input {
    flex: 1;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
</style>

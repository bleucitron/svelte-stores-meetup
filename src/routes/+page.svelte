<script>
  import data from '../data.json';
  import List from './List.svelte';
  import Basket from './Basket.svelte';
  import Toggler from './Toggler.svelte';

  let open = false;

  let basket = {};

  function addToBasket(id, qty) {
    if (basket[id]) {
      basket[id].qty += qty;
    } else {
      const item = data.find(i => i.id === id);
      basket[id] = {
        ...item,
        qty: 1,
      };
    }
  }
  function removeFromBasket(id) {
    delete basket[id];
    basket = basket;
  }
  function clearBasket() {
    basket = {};
  }

  $: total = Object.values(basket)
    .map(i => i.qty * i.price)
    .reduce((acc, price) => acc + price, 0);
</script>

<h1>Primeur.io</h1>

<Toggler {open} {total} on:click={() => (open = !open)} />

{#if open}
  <Basket {basket} {clearBasket} {removeFromBasket} />
{:else}
  <List items={data} {basket} {addToBasket} />
{/if}

<style>
  h1 {
    margin-bottom: 3rem;
  }
</style>

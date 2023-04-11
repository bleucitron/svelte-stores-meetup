<script>
  export let basket = {};
  export let clearBasket;
  export let removeFromBasket;

  $: items = Object.values(basket);
  $: total = items
    .map(i => i.qty * i.price)
    .reduce((acc, price) => acc + price, 0);
</script>

<div>
  <ul>
    {#each items as { id, name, qty, price } (id)}
      <li>
        {name} :
        {qty}
        x
        {price} €
        <button on:click={() => removeFromBasket(id)}>Supprimer</button>
      </li>
    {:else}
      <p>Vide</p>
    {/each}
  </ul>
  {#if items.length}
    <p>Total: {total} €</p>
    <button on:click={clearBasket}>Vider le panier</button>
  {/if}
</div>

<style>
  div {
    font-size: 2rem;
  }
  button {
    font-size: 1.3rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
</style>

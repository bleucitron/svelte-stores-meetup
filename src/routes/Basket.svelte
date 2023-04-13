<script>
  import { basket } from './stores';

  $: items = Object.values($basket);

  $: formattedTotal = new Intl.NumberFormat('fr', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 2,
  }).format($basket.total);
</script>

<div>
  <ul>
    {#each items as { id, name, qty, price } (id)}
      <li>
        {name} :
        {qty}
        x
        {price} €
        <button on:click={() => basket.remove(id)}>Supprimer</button>
      </li>
    {:else}
      <p>Vide</p>
    {/each}
  </ul>
  {#if items.length}
    <p>Total: {formattedTotal}</p>
    <button on:click={basket.clear}>Vider le panier</button>
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

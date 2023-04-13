<script>
  export let open;
  export let total;

  $: formattedTotal = new Intl.NumberFormat('fr', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 2,
  }).format(total);
</script>

<button on:click>
  Voir {open ? 'produits' : 'panier'} ({formattedTotal ?? 0})
</button>

<style>
  button {
    font-size: 1.3rem;
  }
</style>

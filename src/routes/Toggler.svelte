<script>
  export let open;
  export let total;
</script>

<button on:click>
  Voir {open ? 'produits' : 'panier'} ({total ?? 0} €)
</button>

<style>
  button {
    font-size: 1.3rem;
  }
</style>

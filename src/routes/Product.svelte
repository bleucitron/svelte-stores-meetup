<script>
  export let name;
  export let price;
</script>

<article>
  <div>{name}</div>
  <div>{price} €</div>
</article>

<style>
  article {
    font-size: 2rem;
    padding: 1rem;
    width: 10rem;
    border: 2px solid black;
    text-align: center;
  }
</style>

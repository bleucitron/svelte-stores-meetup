<script>
  import Product from './Product.svelte';
  import Quantity from './Quantity.svelte';

  export let items;
</script>

<ul>
  {#each items as item (item.id)}
    <li>
      <Product {...item} />
      <Quantity id={item.id} />
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
    width: 50%;
    margin-inline: auto;
    gap: 2rem;
  }

  li {
    flex: 1;
  }
</style>

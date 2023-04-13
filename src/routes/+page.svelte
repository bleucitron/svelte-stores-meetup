<script>
  import data from '../data.json';

  import List from './List.svelte';
  import Basket from './Basket.svelte';
  import Toggler from './Toggler.svelte';

  let open = false;
</script>

<h1>Primeur.io</h1>

<Toggler {open} on:click={() => (open = !open)} />

{#if open}
  <Basket />
{:else}
  <List items={data} />
{/if}

<style>
  h1 {
    margin-bottom: 3rem;
  }
</style>

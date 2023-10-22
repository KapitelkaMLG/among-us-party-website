<script>
  import Card from './Card.svelte';
  import Amongus from './Amongus.svelte';
  import BaldursGate from './BaldursGate.svelte';
  import { rand } from '../lib/utils.js';
  
  export let minAmongusCount = 5;
  export let maxAmongusCount = 10;
  let amongusCount = rand(minAmongusCount, maxAmongusCount);
  
  let cards = 5;
</script>

<main>
  {#each {length: amongusCount} as _}
    <Amongus/>
  {/each}
  <section class="cards">
    {#each {length: cards} as _}
      <Card />
    {/each}
  </section>
  <BaldursGate/>
</main>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
</style>


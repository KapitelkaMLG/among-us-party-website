<script>
  export let imageSrc = "images/rickroll.gif";

  let imageDisplayed = false;
</script>

<button on:click={() => imageDisplayed = !imageDisplayed}>
  <p class={imageDisplayed ? 'hidden' : ''}>
    Click me for hidden image!
  </p>
  <img class={imageDisplayed ? '' : 'hidden'}
    alt="deez nuts" src={imageSrc}>
</button>

<style>
  button {
    background-color: #CCCCCC;
    padding: 0rem;
    border: None;
  }

  img {
    width: 10rem;
  }

  .hidden {
    display: None;
  }
</style>


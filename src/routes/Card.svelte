<script>
  import Image from './Image.svelte';

  export let message = "ඞ Placeholder card message ඞ";
  export let author = "ඞ";
</script>

<div class="card">
  <div class="message">{message}</div>
  <Image/>
  <div class="author">- <i>{author}</i></div>
</div>

<style>
  .card {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFB6C1;
    border-radius: 1rem;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
    margin: 1rem;
    padding: 3rem;
    width: calc(33.33% - 2rem);
  }

  .message {
    color: #EEEEEE;
    font-size: 1.5rem;
    text-align: center;
  }

  .author {
    color: #FFFFFF;
    font-size: 2.5rem;
    text-align: right;
  }
</style>


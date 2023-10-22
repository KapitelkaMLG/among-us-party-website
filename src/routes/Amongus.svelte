<script>
  import { rand } from '../lib/utils.js';

  let angle = rand(0, 360);
  let topPos = rand(0, 100);
  let leftPos = rand(0, 100);
  
  let imageChoice = rand(0, 500);
  let image;
  if (imageChoice == 69) {
    console.log("nice");
    image = "images/rare-shrek.png";
  } else {
    image = "images/amongus-" + imageChoice % 5 + ".png";
  }
</script>

<div class="amongus" style="--angle: {angle};
  top: {topPos}%;
  left: {leftPos}%;
  background-image: url('{image}')">
</div>

<style>
  .amongus {
    position: absolute;
    opacity: 0.25;
    transform: rotate(calc(var(--angle) * 1deg));
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 5rem;
    width: 5rem;
  }
</style>


<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  let scroller: HTMLElement;
  onMount(() => {
    scroller.scrollIntoView();
  });
</script>

<main
  in:fly={{
    y: 10,
    duration: 250,
    delay: 500,
  }}
  out:fly={{
    y: 10,
    duration: 250,
  }}
  class="relative"
>
  <div class="fixed top-[-120px] left-0" bind:this={scroller} />
  <slot />
</main>

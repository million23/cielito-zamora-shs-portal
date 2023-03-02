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
    delay: 250,
  }}
  out:fly={{
    opacity: 0,
    duration: 250,
  }}
  class="relative"
>
  <div class="fixed top-[-100px] left-0" bind:this={scroller} />
  <slot />
</main>

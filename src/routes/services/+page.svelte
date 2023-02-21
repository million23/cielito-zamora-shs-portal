<script>
  import PageTransition from "../../components/PageTransition.svelte";
</script>

<PageTransition>
  <main>
    <div
      class="min-h-[300px] lg:min-h-[500px] bg-center bg-cover gap-2 rounded-btn p-10 flex flex-col justify-end lg:justify-center bg-[url('https://lh3.googleusercontent.com/U8dSUmCjiqUZmZoCxzBZ5oGBCqCVipJvghZZDUfRgErjMa_UKYWEAU4TwlArCrW_TLDzfuIE08tirIROhJ8OZDsFZf8DK4p7pam74PGvtqBiE0ES2gI=w2400-rj')]"
    >
      <h1 class="text-5xl md:text-7xl font-medium">What we use</h1>
      <p class="max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi
        nemo placeat eos vel enim laudantium reiciendis accusantium perspiciatis
        similique ducimus eum eius fuga debitis ratione nulla asperiores quia
        voluptatem, ipsum, natus quae. Quaerat vel atque commodi maxime illum?
        Rerum illum fugiat doloremque iure, velit error ipsam aliquid maiores
        eos?
      </p>
    </div>

    <!-- <div class="mt-10 flex flex-col gap-">
    <h3 class="text-3xl md:text-5xl font-semibold">Academic Courses</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      {#each academicList as acad}
        <a
          href={acad.href}
          class="bg-base-300 overflow-hidden rounded-btn flex flex-col max-h-max h-max hover:bg-primary hover:text-primary-content transition-all duration-300 cursor-pointer"
        >
          <img
            src={`https://picsum.photos/seed/${acad.name}/500/200`}
            alt={acad.name}
            class="rounded-btn h-[200px] w-full object-cover object-center"
          />
          <p class="p-5 pt-4 flex flex-col">
            <span class="text-2xl font-bold">{acad.name}</span>
            <span class="text-base mt-3">{acad.description}</span>
          </p>
        </a>
      {/each}
    </div>
  </div>

  <div class="mt-10 flex flex-col gap-">
    <h3 class="text-3xl md:text-5xl font-semibold">Other Resources</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      {#each otherResourcesList as other}
        <a
          href={other.href}
          class="bg-base-300 overflow-hidden rounded-btn flex flex-col  hover:bg-primary hover:text-primary-content transition-all duration-300 cursor-pointer"
        >
          <img
            src={`https://picsum.photos/seed/${other.name}/500/200`}
            alt={other.name}
            class="rounded-btn h-[200px] w-full object-cover object-center"
          />
          <p class="p-5 pt-4 flex flex-col">
            <span class="text-xl font-bold">{other.name}</span>
            <span class="text-base mt-3">{other.description}</span>
          </p>
        </a>
      {/each}
    </div>
  </div> -->
  </main>
</PageTransition>

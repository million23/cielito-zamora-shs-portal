<script lang="ts">
  import { onMount } from "svelte";
  import { register } from "swiper/element/bundle";

  $: y = 0;

  onMount(() => {
    register();
  });

  const landingImages = [
    {
      url: "https://static.wixstatic.com/media/a7a74e_f659acf447da4b4ab97e6d5a8da70cd3~mv2.jpg/v1/fill/w_830,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_f659acf447da4b4ab97e6d5a8da70cd3~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_dae0ac4af2ae49ed9c46c2accdf06f35~mv2.jpg/v1/fill/w_830,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_dae0ac4af2ae49ed9c46c2accdf06f35~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_ba18bebac52c45638cbd8214355b21f4~mv2.jpg/v1/fill/w_830,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_ba18bebac52c45638cbd8214355b21f4~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_b9c573541a82494f9e38dd320b347695~mv2.jpg/v1/fill/w_517,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_b9c573541a82494f9e38dd320b347695~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_5e35e7cf140944848038ee61dce70830~mv2.jpg/v1/fill/w_829,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_5e35e7cf140944848038ee61dce70830~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_95ecfcf70cc147f9b8d806a0b81bf702~mv2.jpg/v1/fill/w_517,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_95ecfcf70cc147f9b8d806a0b81bf702~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_3e74833db5a14fde8d2b7c5f16df16f5~mv2.jpg/v1/fill/w_517,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_3e74833db5a14fde8d2b7c5f16df16f5~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
    {
      url: "https://static.wixstatic.com/media/a7a74e_4ac142f2470448bc9d20aec9a4589cb1~mv2.jpg/v1/fill/w_517,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_4ac142f2470448bc9d20aec9a4589cb1~mv2.jpg",
      alt: "Cielito Zamora Senior High School",
    },
  ];
</script>

<!-- {#if y < 100}
  <img
    class={`fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-50`}
    alt="school"
    src="https://static.wixstatic.com/media/a7a74e_1f9a5f9bdffa42f78c73212f8c4da8bb~mv2.jpg/v1/fill/w_980,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_1f9a5f9bdffa42f78c73212f8c4da8bb~mv2.jpg"
  />
{/if} -->

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold">
        Welcome to <br /> Cielito-Zamora SHS Portal
      </h1>
      <p class="py-6">
        Cielito Zamora Senior High School is a stand-alone and full-transition
        Senior High School in Caloocan City with varied learning resource
        materials and courses and subjects.
      </p>
      <a href="/academics" class="btn btn-primary">
        See our Senior High Courses
      </a>
    </div>
  </div>
</div>

<div class=" py-16">
  <h2 class="text-4xl font-bold mb-5">Gallery</h2>

  <swiper-container
    slides-per-view="1"
    mousewheel-force-to-axis="true"
    pagination="true"
    navigation="true"
    space-between={30}
    effect="coverflow"
  >
    <!-- <swiper-slide>Slide 1</swiper-slide> -->
    {#each landingImages as localImage}
      <swiper-slide lazy="true">
        <img
          src={localImage.url}
          alt={localImage.alt}
          class="w-full h-[400px] object-cover object-center"
          loading="lazy"
        />
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<div class=" py-16">
  <h2 class="text-4xl font-bold mb-5">Mission, Vision, and Core Values</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <img
      alt="mission"
      src="https://static.wixstatic.com/media/a7a74e_5dafcf48e3424ebb904583df725d09b3~mv2_d_1600_1600_s_2.jpg/v1/crop/x_0,y_67,w_1600,h_1467/fill/w_613,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a7a74e_5dafcf48e3424ebb904583df725d09b3~mv2_d_1600_1600_s_2.jpg"
    />
    <img
      alt="mission"
      src="https://static.wixstatic.com/media/a7a74e_9de9bb0b56574d56b88a84ab9985ba52~mv2_d_1600_1600_s_2.jpg/v1/fill/w_614,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_9de9bb0b56574d56b88a84ab9985ba52~mv2_d_1600_1600_s_2.jpg"
    />
  </div>
</div>

<div class=" py-16">
  <h2 class="text-4xl font-bold mb-5">School Hymn</h2>

  <div>
    <h3 class="text-2xl mb-2 font-semibold">Karangalan Ka</h3>
    <p class="">
      <span class="font-bold text-primary">Lyrics</span>
      <span>Sir Louie Lavaro</span>
    </p>
    <p class="">
      <span class="font-bold text-primary">Music</span>
      <span>Sir Ely Paniamogan</span>
    </p>
    <p class="">
      <span class="font-bold text-primary">Interpreted</span>
      <span>Ma&apos;am Gina Alparan and Nikka Lumangya</span>
    </p>
    <p class="">
      <span class="font-bold text-primary">Guitar</span>
      <span>Joel Calumba & Ariel Capulso</span>
    </p>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 bg-base-200 p-5 rounded-btn"
  >
    <div class="flex flex-col gap-5">
      <p class="font-sans text-center">
        Nagsisimula ang lahat sa isang pangarap <br />
        Pasulungin ang iyong sarili, buhay ay iangat <br />
        Gamitin ang talino, kakayahan at pagsisikap <br />
        Makakamit din ang tagumpay na hinahangad.
      </p>
      <p class="font-sans text-center">
        Harapin mo man, kay daming mga hadlang<br />
        Ikay puno naman lahat ng kasanayan<br />
        Pinagyabong ang iyong isip, ng mga aral at kaalaman<br />
        Hinubog ang pagkatao talento&apos;y nalilinang
      </p>
      <p class="font-sans text-center">
        <span class="text-pink-500 font-bold">Chorus</span> <br />
        Lipad, Cielitians lipad<br />
        Abutin ang iyong pangarap<br />
        H&apos;wag kang mapagod, ikampay ang &apos;yong pakpak<br />
        Lipad, Cielitians lipad<br />
        Abutin ang iyong pangarap<br />
        Karangalan ka ng Alma Mater mong nililiyag
      </p>
      <p class="font-sans text-center">
        Harapin mo man, kay daming mga hadlang<br />
        Ika’y puno naman lahat ng kasanayan<br />
        Pinagyabong ang iyong isip ng mga aral at kaalaman<br />
        Hinubog ang pagkatao, talento’y nilinang<br />
      </p>
    </div>
    <div class="flex flex-col gap-5">
      <p class="font-sans text-center">
        <span class="text-pink-500 font-bold">Bridge</span> <br />
        At saan ka man maparoon<br />
        Magbago man ang panahon <br />
        Mag aaral ng Cielito Zamora Senior High ay iyong ibaon…
      </p>
      <p class="font-sans text-center">
        <span class="text-pink-500 font-bold">Chorus</span> <br />
        Lipad, Cielitians lipad<br />
        Abutin ang iyong pangarap<br />
        H&apos;wag kang mapagod, ikampay ang &apos;yong pakpak<br />
        Lipad, Cielitians lipad<br />
        Abutin ang iyong pangarap<br />
        Karangalan ka ng Alma Mater mong nililiyag
      </p>
      <p class="font-sans text-center">
        <span class="text-pink-500 font-bold">Bridge</span> <br />
        At saan ka man maparoon<br />
        Magbago man ang panahon <br />
        Mag aaral ng Cielito Zamora Senior High ay iyong ibaon…
      </p>
      <p class="font-sans text-center">
        <span class="text-pink-500 font-bold">Chorus</span> <br />
        Lipad, Cielitians lipad<br />
        Abutin ang iyong pangarap<br />
        H&apos;wag kang mapagod, ikampay ang &apos;yong pakpak<br />
        Lipad, Cielitians lipad<br />
        Abutin ang iyong pangarap<br />
        Karangalan ka ng Alma Mater mong nililiyag
      </p>
    </div>
  </div>
</div>

<svelte:window bind:scrollY={y} />

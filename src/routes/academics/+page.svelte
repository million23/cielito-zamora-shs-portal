<script lang="ts">
  import PageTransition from "../../components/PageTransition.svelte";

  let academicList = [
    {
      name: "Humanities and Social Sciences",
      href: "/academics/humss",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Home Economics",
      href: "/academics/he",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Science, Technology, Engineering, and Mathematics",
      href: "/academics/stem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Information and Communications Technology",
      href: "/academics/ict",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  let otherResourcesList = [
    {
      name: "Core Subjects",
      href: "/academics/core-subjects",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Applied-Contextualized Subjects",
      href: "/academics/applied-subjects",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "E-Library",
      href: "/academics/e-library",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
</script>

<PageTransition>
  <main>
    <div
      class=" min-h-[300px] text-primary-content lg:min-h-[500px] bg-center bg-cover gap-2 rounded-btn p-10 flex flex-col justify-end lg:justify-center bg-[url('https://lh3.googleusercontent.com/kkr2TmO3u_FfBakRK1ZO-dpxKpxvX84TsZksqJNtfAjqBpCzdUairFKYnAhUj9Xz8tWkTXwYI9QjykmCmswAlsmLfIIXBFjxYabcsnuPizy5OHVYjMW2=w2400-rj')]"
    >
      <h1 class="text-5xl md:text-7xl font-medium">What we offer</h1>
      <p class="max-w-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eius alias
        cum accusamus. Possimus corporis alias id repellat saepe ipsam numquam
        aliquid aliquam cum, esse iste nihil delectus rerum perferendis.
      </p>
    </div>

    <div class="mt-10 flex flex-col gap-2">
      <h3 class="text-3xl md:text-5xl font-semibold">Academic Courses</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 px-7">
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

    <div class="mt-10 flex flex-col gap-2">
      <h3 class="text-3xl md:text-5xl font-semibold">Other Resources</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 px-7">
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
    </div>
  </main>
</PageTransition>

<script lang="ts">
  import PageTransition from "../../components/PageTransition.svelte";

  let academicList = [
    {
      name: "Humanities and Social Sciences",
      href: "/academics/humss",
      description: "It looks at how thoughts, emotions, and behaviours interact and shape individual personalities, as well as how these psychological factors relate to social and cultural contexts.",
      image: 'https://lh3.googleusercontent.com/gK__LLaM4jqISqweP0_fxKpBhJuJgSJPqb7wuwRyqMwSBRnj1RJtgXrw69gdLsy2lyH33idBUO5whDJl1TYaHT50hMZc-tj1L49Iq0ctbynuU-0FbFk=w960'
    },
    {
      name: "Home Economics",
      href: "/academics/he",
      description: "Topics range from responsible food choices and meal preparation to managing resources, health promotion and wellness, parenting, and more.",
      image: 'https://lh3.googleusercontent.com/fhyw5DMHcxoROzow8owQApE7MxUGVdH1lIXisNu9PZqkXYJD19fxLeauvE5OWp_jL-TG0En553TqcNUvPheP9CnsvA-yA0Q8fK7VUlXHfob2jfOLdQyn=w960'
    },
    {
      name: "Science, Technology, Engineering, and Mathematics",
      href: "/academics/stem",
      description: "The course dives into various scientific topics, and encourages students to develop their own ideas and solutions.",
      image: 'https://lh3.googleusercontent.com/az_YEMGKa9mbe21my1SFC2zQkrcku5bnb-j9YSN38BWW3OtXNiSX4HKh7g4N4lyHmxOg-G483Lp3zVxbu9x_hzUGZamobmh1KM_njcXEodH5b_TFfDc=w2400-rj'
    },
    {
      name: "Information and Communications Technology",
      href: "/academics/ict",
      description: "Its future endeavors will involve the development of new and more efficient ways to collect, store, process, and distribute data.",
      image: 'https://lh3.googleusercontent.com/m8am03OY7pwMPiYPLQ4K1PimDBzWIv49tLkS5ilqBfI4GadhofpAikaOP7bfmxeLWQHIL1dan7DU8wW0ob5w1s2NKf9CXJqkkehN--SM8ROC-ZzgKA=w2400-rj'
    },
  ];
  let otherResourcesList = [
    {
      name: "Core Subjects",
      href: "/academics/core-subjects",
      description: "Explore our set of core topics that will shape our students' needs to study their field of study",
    },
    {
      name: "Applied-Contextualized Subjects",
      href: "/academics/applied-subjects",
      description: "See our list of supporting subjects that will help our students' understand the professional world",
    },
    {
      name: "E-Library",
      href: "/academics/e-library",
      description: "Browse our variety of Electronic Books that guides our students in their endeavor.",
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
        We offer a range of workforce ready courses that can help you develop the skills needed to enter or advance in your chosen field.
      </p>
    </div>

    <div class="mt-10 flex flex-col gap-2">
      <h3 class="text-3xl md:text-5xl font-semibold">Academic Courses</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 px-7">
        {#each academicList as acad}
          <a
            href={acad.href}
            class="overflow-hidden rounded-btn flex flex-col shadow max-h-max h-max hover:bg-primary/20 transition-all duration-300 cursor-pointer"
          >
            <img
              src={acad.image}
              alt={acad.name}
              class="rounded-btn h-[200px] w-full object-cover object-center"
            />
            <p class="p-5 pt-4 flex flex-col">
              <span class="text-xl font-semibold">{acad.name}</span>
              <span class="text-base mt-3">{acad.description}</span>
            </p>
          </a>
        {/each}
      </div>
    </div>

    <div class="mt-10 flex flex-col gap-2">
      <h3 class="text-3xl md:text-5xl font-semibold">Other Resources</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 px-7">
        {#each otherResourcesList as other}
          <a
            href={other.href}
            class="overflow-hidden rounded-btn flex flex-col shadow max-h-max h-max hover:bg-primary/20 transition-all duration-300 cursor-pointer"
          >
            <img
              src={`https://picsum.photos/seed/${other.name}/500/200`}
              alt={other.name}
              class="rounded-btn h-[200px] w-full object-cover object-center"
            />
            <p class="p-5 pt-4 flex flex-col">
              <span class="text-xl font-semibold">{other.name}</span>
              <span class="text-base mt-3">{other.description}</span>
            </p>
          </a>
        {/each}
      </div>
    </div>
  </main>
</PageTransition>

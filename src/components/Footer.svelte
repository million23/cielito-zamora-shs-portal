<script lang="ts">
  const bottomLinks = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Academics",
      href: "/",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "Other Links",
      href: "/",
    },
  ];
</script>

<footer aria-label="Site Footer">
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div
          class="flex justify-center text-primary text-2xl font-bold lg:justify-start"
        >
          Cielito-Zamora Senior High School Portal
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-base-content lg:text-left"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
      </div>

      <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
        <ul
          class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
          {#each bottomLinks as link}
            <li>
              <a class="link hover:link-primary transition" href={link.href}>
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2023. All rights reserved.
    </p>
  </div>
</footer>

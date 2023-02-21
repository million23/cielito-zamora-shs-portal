<script lang="ts">
  import Appbar from "../components/Appbar.svelte";
  import Footer from "../components/Footer.svelte";
  import "../global.css";

  let link_academics = [
    {
      name: "HUMSS",
      href: "/academics/humss",
    },
    {
      name: "STEM",
      href: "/academics/stem",
    },
    {
      name: "ICT",
      href: "/academics/ict",
    },
    {
      name: "HE",
      href: "/academics/he",
    },
    {
      name: "Core Subjects",
      href: "/academics/core-subjects",
    },
    {
      name: "Applied/Contextualized Subjects",
      href: "/academics/applied-subjects",
    },
    {
      name: "E-Library",
      href: "/academics/e-library",
    },
  ];
  let link_services = [
    {
      name: "Librarika",
      href: "https://cielitozamorashslibrary.librarika.com/",
    },
    {
      name: "GutenBerg",
      href: "https://www.gutenberg.org/",
    },
    {
      name: "InfoPlease",
      href: "https://www.infoplease.com/",
    },
    {
      name: "LibrarySpot",
      href: "http://libraryspot.com/",
    },
  ];
  let link_others = [
    {
      name: "Admission",
      href: "/services/admission",
    },
    {
      name: "Bulletin",
      href: "/services/bulletin",
    },
    {
      name: "External Links",
      href: "/services/external-links",
    },
    {
      name: "Tests and TOS",
      href: "/services/tests-and-tos",
    },
    {
      name: "DLL",
      href: "/services/dll",
    },
    {
      name: "Curriculum Guide",
      href: "/services/curriculum-guide",
    },
  ];
</script>

<!-- drawer -->
<div class="drawer select-none">
  <input type="checkbox" name="appshell" id="appshell" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="mx-auto max-w-5xl pt-24 relative px-5 lg:px-0">
      <!-- navbar -->
      <Appbar {link_academics} {link_services} {link_others} />
      <!-- content -->
      <slot />
      <!-- footer -->
      <Footer />
    </div>
  </div>
  <div class="drawer-side">
    <label for="appshell" class="drawer-overlay" />
    <div
      class="min-h-screen w-full max-w-md bg-base-100 p-5 flex flex-col gap-2"
    >
      <label for="appshell" class="btn btn-ghost btn-sm self-end">
        <i class="material-symbols-rounded">close</i>
      </label>
      <div
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-btn"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">Academics</div>
        <div class="collapse-content">
          <div class=" flex flex-col gap-2">
            {#each link_academics as link}
              <a
                href={link.href}
                class="btn btn-ghost hover:btn-primary group justify-between"
              >
                <span>{link.name}</span>
                <i
                  class="material-symbols-rounded transition-all -translate-x-1 group-hover:translate-x-1"
                  >arrow_forward</i
                >
              </a>
            {/each}
          </div>
        </div>
      </div>
      <div
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-btn"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">Services</div>
        <div class="collapse-content">
          <div class=" flex flex-col gap-2">
            {#each link_services as link}
              <a
                href={link.href}
                class="btn btn-ghost hover:btn-primary group justify-between"
              >
                <span>{link.name}</span>
                <i
                  class="material-symbols-rounded transition-all -translate-x-1 group-hover:translate-x-1"
                  >arrow_forward</i
                >
              </a>
            {/each}
          </div>
        </div>
      </div>

      <div
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-btn"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">Other</div>
        <div class="collapse-content">
          <div class=" flex flex-col gap-2">
            {#each link_others as link}
              <a
                href={link.href}
                class="btn btn-ghost hover:btn-primary group justify-between"
              >
                <span>{link.name}</span>
                <i
                  class="material-symbols-rounded transition-all -translate-x-1 group-hover:translate-x-1"
                  >arrow_forward</i
                >
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

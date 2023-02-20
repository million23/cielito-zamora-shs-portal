<script lang="ts">
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
      name: "Other Resources",
      href: "/academics/other",
    },
  ];
  let link_services = [
    {
      name: "Library",
      href: "/services/library",
    },
    {
      name: "GutenBerg",
      href: "/services/gutenberg",
    },
    {
      name: "InfoPlease",
      href: "/services/infoplease",
    },
    {
      name: "LibrarySpot",
      href: "/services/libraryspot",
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
    <div class="mx-auto max-w-4xl px-5 lg:px-0 relative">
      <!-- navbar -->
      <div class="navbar px-0 absolute top-0 left-0 w-full z-50">
        <!-- menu button -->
        <div class="flex-none lg:hidden">
          <label for="appshell" class="btn btn-square btn-ghost">
            <i class="material-symbols-rounded">menu</i>
          </label>
        </div>
        <!-- hero name -->
        <div class="flex-1">
          <a href="/" class="btn btn-ghost text-sm gap-2 items-center">
            <i class="material-symbols-rounded">history_edu</i>
            <span>Cielito Zamora SHS Portal</span>
          </a>
        </div>
        <!-- desktop links -->
        <div class="flex-none lg:flex gap-2 hidden">
          <div class="dropdown dropdown-end dropdown-hover">
            <buton tabindex="0" class="btn btn-ghost hover:btn-primary">
              Academics
            </buton>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-max"
            >
              {#each link_academics as link}
                <li class="text-right w-full">
                  <a href={link.href}>{link.name}</a>
                </li>
              {/each}
            </ul>
          </div>
          <div class="dropdown dropdown-end dropdown-hover">
            <buton tabindex="0" class="btn btn-ghost hover:btn-primary">
              Services
            </buton>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-max"
            >
              {#each link_services as link}
                <li class="text-right w-full">
                  <a href={link.href}>{link.name}</a>
                </li>
              {/each}
            </ul>
          </div>
          <div class="dropdown dropdown-end dropdown-hover">
            <buton tabindex="0" class="btn btn-ghost hover:btn-primary">
              Others
            </buton>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-max"
            >
              {#each link_others as link}
                <li class="text-right w-full">
                  <a href={link.href}>{link.name}</a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>

      <!-- content -->
      <main>
        <slot />
      </main>
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

<script lang="ts">
  interface Link {
    name: string;
    href: string;
  }
  export let link_academics: Link[];
  export let link_services: Link[];
  export let link_others: Link[];
</script>

<div
  class="navbar px-5 lg:px-0 fixed justify-center bg-base-100 top-0 left-0 z-50"
>
  <div class="w-full max-w-5xl">
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
        <a
          href="/academics"
          tabindex="0"
          class="btn btn-ghost hover:btn-primary"
        >
          Academics
        </a>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-max"
        >
          {#each link_academics as link}
            <li class="text-right w-full">
              <a href={link.href}>{link.name}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="dropdown dropdown-end dropdown-hover">
        <a
          href="/services"
          tabindex="0"
          class="btn btn-ghost hover:btn-primary"
        >
          Services
        </a>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-max"
        >
          {#each link_services as link}
            <li class="text-right w-full">
              <a href={link.href}>{link.name}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="dropdown dropdown-end dropdown-hover">
        <a href="/others" tabindex="0" class="btn btn-ghost hover:btn-primary">
          Others
        </a>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-max"
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
</div>

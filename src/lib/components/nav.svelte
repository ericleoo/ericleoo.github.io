<script>
  import { pages, siteName } from '@lib/site-config'
  let duration = "250ms";
  let offset = 50;
  let tolerance = 5;

  let headerClass = "show";
  let y = 0;
  let lastY = 0;

  function deriveClass(y, dy) {
    if (y < offset) {
      return "show";
    }

    if (Math.abs(dy) <= tolerance) {
      return headerClass;
    }

    if (dy < 0) {
      return "hide";
    }

    return "show";
  }

  function updateClass(y) {
    const dy = lastY - y;
    lastY = y;
    return deriveClass(y, dy);
  }

  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  $: headerClass = updateClass(y);
</script>

<div use:setTransitionDuration class="bg-neutral shadow text-neutral-content mb-16 top-0 z-10 navbar sticky {headerClass}">
  <!-- 
  <div class="mx-2 px-2 navbar-start left">
    <span class="font-bold text-lg">{siteName}</span>
  </div>
  -->
  <!-- 
  <div class="dropdown dropdown-right lg:hidden">
    <div tabindex="0" class="m-1 btn">Links</div>
    <ul
      tabindex="0"
      class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content ">
      {#each pages as { title, path }}
        <li>
          <a sveltekit:prefetch href={path}>{title}</a>
        </li>
      {/each}
    </ul>
  </div>
  -->
  <div class="mx-2 px-2 navbar-center lg:flex right">
    <div class="flex items-stretch">
      {#each pages as { title, path }}
        <a
          sveltekit:prefetch
          href={path}
          class="rounded-btn btn btn-ghost btn-sm">{title}</a
        >
        <div class="px-2"> </div>
      {/each}
    </div>
  </div>
</div>

<svelte:window bind:scrollY={y} />

<style>
  .show {
    transform: translateY(0%);
  }
  .hide {
    transform: translateY(-150%);
  }
</style>

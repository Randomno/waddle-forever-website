<script lang="ts">
  import './layout.css';
  // import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();

  interface NavLink {
    href: string;
    label: string;
  }

  const navLinks: NavLink[] = [
    { href: '/faq', label: 'FAQ' },
    { href: '/mods', label: 'Mods' },
    { href: 'https://github.com/nhaar/Waddle-Forever', label: 'GitHub' },
    { href: 'https://discord.gg/URHXm3cFv5', label: 'Discord' },
  ];

  const linkClass =
    'text-3xl font-bold hover:underline hover:text-blue-200 transition-colors duration-200';

  let isMenuOpen = $state(false);
</script>

<svelte:head>
  <title>Waddle Forever</title>
  <meta name="description" content="Play all eras of Club Penguin, hosted locally on your computer." />
  <!--<link rel="icon" href={favicon} />-->
</svelte:head>

<header class="bg-[#0280CD] border-b-2 border-[#003366] shadow-[0_0_0_2px_#fff,0_0_0_4px_#ffffff80,inset_0_-2px_0_0_#00529B] text-white p-3">
  <nav class="max-w-6xl mx-auto">
    <div class="flex items-center justify-between">
      <a href="/">
        <span class="text-5xl font-bold hover:text-blue-200">
          <!-- Logo Placeholder -->
          Waddle<br />Forever
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex md:space-x-16">
        {#each navLinks as { href, label }, index (index)}
          <a {href} class={linkClass}>{label}</a>
        {/each}
      </div>

      <button
        class="text-white text-3xl md:hidden focus:outline-none cursor-pointer"
        onclick={() => (isMenuOpen = !isMenuOpen)}
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="flex flex-col md:hidden space-y-4 p-5">
        {#each navLinks as { href, label }, index (index)}
          <a {href} class={linkClass}>{label}</a>
        {/each}
      </div>
    {/if}
  </nav>
</header>

<div class="flex-1 flex justify-center">
  {@render children()}
</div>

<footer class="max-w-6xl w-full mx-auto py-5">
  <hr />
  <div class="text-sm text-blue-200 p-2">
    Not affiliated with Disney. Waddle Forever is free and not-for-profit.
  </div>
</footer>

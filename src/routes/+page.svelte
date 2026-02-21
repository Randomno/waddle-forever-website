<script>
  export let data;
  const CURRENT_VERSION = data.version;
</script>

<main class="max-w-6xl mx-auto p-6">
  <div class="grid lg:grid-cols-2 lg:gap-16 text-lg">
    <div>
      <p class="mb-6 text-3xl">
        Waddle Forever is a singleplayer, downloadable Club Penguin client.
      </p>
      <p class="mb-6">
        Play versions from 2005 to 2017, create and load mods, explore parties
        and minigames, all offline without any worry of servers shutting down
        or data being leaked.
      </p>
      <div>
        <p>Download version {CURRENT_VERSION}:</p>
        <div class="flex gap-x-2 mt-2">
          <a href="https://github.com/nhaar/Waddle-Forever/releases/download/v{CURRENT_VERSION}/WaddleForever-Setup-{CURRENT_VERSION}.exe" class="button">
            Windows
          </a>
          <a href="/linux" class="button">
            Linux
          </a>
          <a href="https://github.com/nhaar/Waddle-Forever/releases/download/v{CURRENT_VERSION}/WaddleForever-{CURRENT_VERSION}.dmg" class="button">
            macOS
          </a>
        </div>
      </div>
    </div>
    <div class="relative max-w-2xl">
      <img src="/20172005.png" alt="Club Penguin from 2005-2017" width="752" height="472" />
    </div>
    <div>
      Waddle Forever is still in development, so please beware of bugs! You
      can talk with us on the Discord server above.
    </div>
  </div>
</main>

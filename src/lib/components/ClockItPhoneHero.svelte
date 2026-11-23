<script lang="ts">
  let theme = $state<'light' | 'dark'>('light');
</script>

<div class="relative mx-auto flex flex-col items-center">
  <!-- Subtle ambient periwinkle studio halo -->
  <div
    class="pointer-events-none absolute -inset-4 -z-10 rounded-[56px] bg-gradient-to-b from-[#c2d2ff]/40 via-[#dfc4f7]/15 to-transparent blur-2xl"
    aria-hidden="true"
  ></div>

  <!-- Real Pixel hardware-framed app screenshots (exact 760:1606 aspect ratio, zero distortion) -->
  <div class="relative w-[268px] sm:w-[296px] lg:w-[310px] aspect-[760/1606]">
    <img
      src="/screenshots/home-light.webp"
      alt="Repeat Alarm: Clock-It home screen in light mode showing interval alarms"
      width="760"
      height="1606"
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-contain drop-shadow-[0_28px_46px_rgba(17,17,20,0.18)] transition-opacity duration-300 {theme ===
      'light'
        ? 'opacity-100'
        : 'pointer-events-none opacity-0'}"
    />
    <img
      src="/screenshots/home-dark.webp"
      alt="Repeat Alarm: Clock-It home screen in dark mode showing interval alarms"
      width="760"
      height="1606"
      class="absolute inset-0 h-full w-full object-contain drop-shadow-[0_28px_46px_rgba(17,17,20,0.22)] transition-opacity duration-300 {theme ===
      'dark'
        ? 'opacity-100'
        : 'pointer-events-none opacity-0'}"
    />
  </div>

  <!-- Minimal Apple-style Light / Dark theme switcher -->
  <div
    class="mt-5 inline-flex items-center gap-1 rounded-full bg-surface p-1 ring-1 ring-black/[0.06]"
    role="group"
    aria-label="Preview app theme"
  >
    <button
      type="button"
      onclick={() => (theme = 'light')}
      aria-pressed={theme === 'light'}
      class="inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all {theme ===
      'light'
        ? 'bg-white text-foreground shadow-sm'
        : 'text-muted-foreground hover:text-foreground'}"
    >
      <span class="h-2 w-2 rounded-full bg-[#c2d2ff] ring-1 ring-black/15"></span>
      Light
    </button>
    <button
      type="button"
      onclick={() => (theme = 'dark')}
      aria-pressed={theme === 'dark'}
      class="inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all {theme ===
      'dark'
        ? 'bg-[#161619] text-white shadow-sm'
        : 'text-muted-foreground hover:text-foreground'}"
    >
      <span class="h-2 w-2 rounded-full bg-[#3a4569] ring-1 ring-white/25"></span>
      Dark
    </button>
  </div>
</div>

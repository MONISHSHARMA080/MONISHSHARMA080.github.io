<script lang="ts">
  import { onMount } from 'svelte';

  const STEP_DURATION_MS = 3800;

  let activeStep = $state(0);
  let isPaused = $state(false);
  let isInView = $state(true);
  let prefersReducedMotion = $state(false);
  let progressKey = $state(0);
  let sectionEl: HTMLDivElement | undefined = $state();

  let touchStartX = 0;

  const steps = [
    {
      num: '01',
      short: 'Configure',
      title: 'Choose how often it rings',
      description:
        'Set your start and end time, pick the repeat interval, choose a random or specific alarm sound, and add an optional message.',
      image: '/screenshots/step2-configure.webp',
      alt: 'Clock-It Set alarm screen showing start to end time, repeat interval, date, sound, and message'
    },
    {
      num: '02',
      short: 'Scheduled',
      title: 'Every alarm, ready in seconds',
      description:
        'Clock-It generates the entire sequence automatically and shows every single ring time in one tidy list.',
      image: '/screenshots/step3-scheduled.webp',
      alt: "Clock-It You're all set confirmation screen listing every scheduled alarm time"
    }
  ];

  function selectStep(index: number) {
    activeStep = index;
    progressKey += 1;
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        selectStep((activeStep + 1) % steps.length);
      } else {
        selectStep((activeStep - 1 + steps.length) % steps.length);
      }
    }
  }

  onMount(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = media.matches;
    const onMediaChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    media.addEventListener('change', onMediaChange);

    let observer: IntersectionObserver | undefined;
    if (sectionEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          isInView = entries[0]?.isIntersecting ?? true;
        },
        { threshold: 0.25 }
      );
      observer.observe(sectionEl);
    }

    return () => {
      media.removeEventListener('change', onMediaChange);
      observer?.disconnect();
    };
  });

  $effect(() => {
    // Track progressKey so manual step changes restart the timer cleanly
    void progressKey;
    if (isPaused || !isInView || prefersReducedMotion) return;

    const timer = window.setTimeout(() => {
      activeStep = (activeStep + 1) % steps.length;
      progressKey += 1;
    }, STEP_DURATION_MS);

    return () => window.clearTimeout(timer);
  });
</script>

<div
  bind:this={sectionEl}
  role="region"
  aria-label="How Clock-It works walkthrough"
  onmouseenter={() => (isPaused = true)}
  onmouseleave={() => (isPaused = false)}
  class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
>
  <!-- Mobile-first header + segmented switcher so two phones never stack back-to-back -->
  <div class="text-center lg:hidden">
    <p class="mb-2.5 text-sm font-semibold tracking-tight text-primary">How it works</p>
    <h2 class="text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl leading-[1.12]">
      Repeat alarms, without setting them one by one.
    </h2>

    <div
      class="mt-6 inline-flex items-center gap-1 rounded-full bg-surface p-1 ring-1 ring-black/[0.06]"
      role="tablist"
      aria-label="How Clock-It works steps"
    >
      {#each steps as step, index}
        <button
          type="button"
          role="tab"
          aria-selected={activeStep === index}
          onclick={() => selectStep(index)}
          class="cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all {activeStep ===
          index
            ? 'bg-white text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'}"
        >
          <span class="mr-1 tabular-nums opacity-60">{step.num}</span> {step.short}
        </button>
      {/each}
    </div>
  </div>

  <!-- Left: Real Hardware-Framed Pixel Screenshots with smooth auto-advancing Apple transition -->
  <div class="flex flex-col items-center lg:col-span-5">
    <div
      ontouchstart={handleTouchStart}
      ontouchend={handleTouchEnd}
      class="relative w-[262px] sm:w-[290px] lg:w-[304px] aspect-[760/1606]"
    >
      {#each steps as step, index}
        <img
          src={step.image}
          alt={step.alt}
          width="760"
          height="1606"
          loading={index === 0 ? 'eager' : 'lazy'}
          class="absolute inset-0 h-full w-full object-contain drop-shadow-[0_26px_44px_rgba(17,17,20,0.16)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] {activeStep ===
          index
            ? 'translate-y-0 scale-100 opacity-100'
            : index < activeStep
              ? '-translate-y-2 scale-[0.97] pointer-events-none opacity-0'
              : 'translate-y-3 scale-[0.97] pointer-events-none opacity-0'}"
        />
      {/each}
    </div>

    <!-- Subtle Apple-style animated progress dots below phone -->
    <div class="mt-5 flex items-center gap-2" aria-hidden="true">
      {#each steps as _, index}
        <button
          type="button"
          tabindex="-1"
          onclick={() => selectStep(index)}
          class="relative h-1.5 cursor-pointer overflow-hidden rounded-full transition-all duration-300 {activeStep ===
          index
            ? 'w-8 bg-black/10'
            : 'w-1.5 bg-black/15 hover:bg-black/30'}"
        >
          {#if activeStep === index}
            {#key progressKey}
              <span
                class="step-progress-fill absolute inset-y-0 left-0 rounded-full bg-primary"
                class:paused={isPaused || !isInView || prefersReducedMotion}
                style="--step-duration: {STEP_DURATION_MS}ms;"
              ></span>
            {/key}
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <!-- Right: Vertically Stacked Numbered Steps (Amy Food Journal layout + live progress hairline) -->
  <div class="lg:col-span-7">
    <div class="hidden lg:block">
      <p class="mb-3 text-sm font-semibold tracking-tight text-primary">How it works</p>
      <h2 class="mb-10 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
        Repeat alarms, without<br class="hidden sm:inline" /> setting them one by one.
      </h2>
    </div>

    <div class="divide-y divide-border">
      {#each steps as step, index}
        <button
          type="button"
          onclick={() => selectStep(index)}
          onmouseenter={() => selectStep(index)}
          class="group relative block w-full cursor-pointer py-6 text-left transition-opacity first:pt-2 last:pb-2 sm:py-7"
        >
          <span
            class="pointer-events-none absolute right-0 top-5 text-4xl font-bold tracking-tight tabular-nums transition-colors duration-300 sm:top-6 sm:text-6xl {activeStep ===
            index
              ? 'text-[#c2d2ff]'
              : 'text-foreground/10 group-hover:text-foreground/20'}"
          >
            {step.num}
          </span>
          <div class="relative z-10 pr-16 sm:pr-24">
            <h3
              class="mb-1.5 text-lg font-semibold tracking-tight transition-colors duration-300 sm:mb-2 sm:text-2xl {activeStep ===
              index
                ? 'text-foreground'
                : 'text-foreground/60 group-hover:text-foreground'}"
            >
              {step.title}
            </h3>
            <p
              class="text-[15px] leading-relaxed transition-colors duration-300 sm:text-lg {activeStep ===
              index
                ? 'text-muted-foreground'
                : 'text-muted-foreground/75'}"
            >
              {step.description}
            </p>
          </div>

          <!-- Animated bottom progress bar on active step -->
          {#if activeStep === index}
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-transparent">
              {#key progressKey}
                <div
                  class="step-progress-fill h-full bg-primary"
                  class:paused={isPaused || !isInView || prefersReducedMotion}
                  style="--step-duration: {STEP_DURATION_MS}ms;"
                ></div>
              {/key}
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes stepFill {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .step-progress-fill {
    width: 100%;
    animation: stepFill var(--step-duration, 3800ms) linear forwards;
  }

  .step-progress-fill.paused {
    animation-play-state: paused;
  }
</style>

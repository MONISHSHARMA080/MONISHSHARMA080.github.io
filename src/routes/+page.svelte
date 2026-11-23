<script lang="ts">
  import ClockItPhoneHero from '$lib/components/ClockItPhoneHero.svelte';
  import HowItWorksShowcase from '$lib/components/HowItWorksShowcase.svelte';

  const SITE_URL = 'https://monishsharma080.github.io';
  const PLAY_STORE_BASE_URL =
    'https://play.google.com/store/apps/details?id=com.coolApps.MultipleAlarmClock';
  const GITHUB_PROFILE_URL = 'https://github.com/MONISHSHARMA080';
  const ZIG_REPO_URL = 'https://github.com/monishsharma080/zig-concurrency';

  /**
   * Builds a Google Play Store campaign URL using the official `referrer` parameter
   * so installs show up under Google Play Console -> Store performance / UTM campaigns.
   */
  function playStoreUrl(content: string): string {
    const utmParams = new URLSearchParams({
      utm_source: 'personal_website',
      utm_medium: 'website',
      utm_campaign: 'clock_it_landing',
      utm_content: content
    }).toString();
    return `${PLAY_STORE_BASE_URL}&referrer=${encodeURIComponent(utmParams)}`;
  }

  let mobileMenuOpen = $state(false);
  let openFaq = $state<number | null>(0);

  const routines = [
    {
      title: 'Heavy sleepers & ADHD',
      desc: 'Alarms every 1–5 min leave zero quiet gap to drift back to sleep.'
    },
    {
      title: 'Pomodoro & study blocks',
      desc: 'Timed 20 or 25 minute study sprints and breaks across a 3-hour block.'
    },
    {
      title: 'Medicine & hydration',
      desc: 'Reliable repeating reminders every hour or every 4 hours, never missed.'
    },
    {
      title: 'Flights & early shifts',
      desc: 'Ring every 10 minutes in the final hour before you walk out the door.'
    }
  ];

  const faqs = [
    {
      q: 'How do I set multiple repeating alarms on Android without creating them one by one?',
      a: 'Open Repeat Alarm: Clock-It, choose a start time and end time (for example, 6:00 AM to 7:00 AM), and pick your interval—every 1, 2, 5, 10, 15, or 30 minutes. Clock-It schedules every alarm in that window automatically.'
    },
    {
      q: 'Is Repeat Alarm: Clock-It good for heavy sleepers and people with ADHD?',
      a: 'Yes. A single alarm is easy to dismiss and fall back asleep to. Repeating interval alarms keep ringing every few minutes—with optional force-loud volume and random ringtones—leaving no quiet gap until you are out of bed.'
    },
    {
      q: 'Does Repeat Alarm: Clock-It have ads?',
      a: 'No. Clock-It is ad-free and designed with clean Material 3 styling so setting up your morning or daily routine takes seconds with zero distractions.'
    },
    {
      q: 'Can I use it for Pomodoro study sessions, medication, or hourly water reminders?',
      a: 'Yes. You can set a 20- or 25-minute interval for study sprints, hourly intervals from 8 AM to 8 PM for water or posture breaks, or multi-hour intervals for medication doses, with custom messages for each sequence.'
    }
  ];

  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Repeat Alarm: Clock-It',
        alternateName: 'Multiple Alarm Clock',
        operatingSystem: 'Android',
        applicationCategory: 'UtilitiesApplication',
        description:
          'Create a full sequence of repeating interval alarms from one setup. Pick a start time, end time, and repeat interval (1, 2, 5, 10, 15, or 30 minutes) for heavy sleepers, ADHD routines, study sprints, and medication reminders.',
        url: SITE_URL,
        downloadUrl: PLAY_STORE_BASE_URL,
        installUrl: PLAY_STORE_BASE_URL,
        image: `${SITE_URL}/clock-it-icon.png`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        author: {
          '@type': 'Person',
          name: 'Monish Sharma',
          url: SITE_URL
        }
      },
      {
        '@type': 'Person',
        name: 'Monish Sharma',
        url: SITE_URL,
        description:
          'Software developer building minimal Android utilities like Repeat Alarm: Clock-It and low-level systems software in Zig.',
        sameAs: [GITHUB_PROFILE_URL, PLAY_STORE_BASE_URL]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  });

  const jsonLdScript = `<script type="application/ld+json">${structuredData}<\/script>`;
</script>

<svelte:head>
  <title>Repeat Alarm: Clock-It for Android — Built by Monish Sharma</title>
  <meta
    name="description"
    content="Set a start time, end time, and interval to create multiple repeating alarms in seconds. Repeat Alarm: Clock-It is an ad-free Material 3 Android alarm clock for heavy sleepers, ADHD, study timers, and routines—built by Monish Sharma."
  />
  <meta
    name="keywords"
    content="repeat alarm android, multiple alarm clock, interval alarm app, alarm for heavy sleepers, ADHD alarm clock, Clock-It, Monish Sharma, Zig M:N scheduler"
  />
  <link rel="canonical" href={`${SITE_URL}/`} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${SITE_URL}/`} />
  <meta property="og:site_name" content="Monish Sharma" />
  <meta property="og:title" content="Repeat Alarm: Clock-It — One setup, every alarm in between" />
  <meta
    property="og:description"
    content="Ad-free Android interval alarm clock for heavy sleepers, ADHD, and daily routines—plus systems programming in Zig by Monish Sharma."
  />
  <meta property="og:image" content={`${SITE_URL}/og-card.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Repeat Alarm: Clock-It — Built by Monish Sharma" />
  <meta
    name="twitter:description"
    content="Pick a start time, end time, and interval. Clock-It generates every repeating alarm in seconds."
  />
  <meta name="twitter:image" content={`${SITE_URL}/og-card.png`} />
  {@html jsonLdScript}
</svelte:head>

<div class="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-[#c2d2ff] selection:text-[#182246]">
  <!-- Minimal Sticky Nav (Apple + Amy Food Journal) -->
  <header class="sticky top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
    <nav
      class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8"
      aria-label="Primary"
    >
      <a
        href="#top"
        class="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-foreground"
      >
        <img
          src="/clock-it-icon.png"
          alt="Clock-It"
          class="h-7 w-7 rounded-[7px] ring-1 ring-black/10"
          width="28"
          height="28"
        />
        <span>Monish Sharma</span>
      </a>

      <div class="hidden items-center gap-7 text-[14px] font-medium text-muted-foreground md:flex">
        <a href="#clock-it" class="transition-colors hover:text-foreground">Clock-It</a>
        <a href="#how-it-works" class="transition-colors hover:text-foreground">How it works</a>
        <a href="#features" class="transition-colors hover:text-foreground">Features</a>
        <a href="#projects" class="transition-colors hover:text-foreground">Projects</a>
        <a href="#about" class="transition-colors hover:text-foreground">About</a>
      </div>

      <div class="flex items-center gap-2">
        <a
          href={playStoreUrl('nav_cta')}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-8 items-center justify-center rounded-full bg-primary px-3.5 text-[12px] font-semibold text-primary-foreground transition hover:bg-primary-hover md:h-9 md:px-4 md:text-[13px]"
        >
          Get Clock-It
        </a>

        <button
          type="button"
          onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-foreground transition hover:bg-surface md:hidden"
        >
          {#if mobileMenuOpen}
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          {:else}
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M4 8h16M4 16h16" />
            </svg>
          {/if}
        </button>
      </div>
    </nav>

    {#if mobileMenuOpen}
      <div class="border-t border-black/[0.06] bg-white px-5 pb-5 pt-3 md:hidden">
        <div class="flex flex-col space-y-1 text-[15px] font-medium">
          <a
            href="#clock-it"
            onclick={() => (mobileMenuOpen = false)}
            class="rounded-xl px-3 py-2.5 text-foreground hover:bg-surface"
          >
            Clock-It
          </a>
          <a
            href="#how-it-works"
            onclick={() => (mobileMenuOpen = false)}
            class="rounded-xl px-3 py-2.5 text-foreground hover:bg-surface"
          >
            How it works
          </a>
          <a
            href="#features"
            onclick={() => (mobileMenuOpen = false)}
            class="rounded-xl px-3 py-2.5 text-foreground hover:bg-surface"
          >
            Features
          </a>
          <a
            href="#projects"
            onclick={() => (mobileMenuOpen = false)}
            class="rounded-xl px-3 py-2.5 text-foreground hover:bg-surface"
          >
            Projects
          </a>
          <a
            href="#about"
            onclick={() => (mobileMenuOpen = false)}
            class="rounded-xl px-3 py-2.5 text-foreground hover:bg-surface"
          >
            About
          </a>
          <a
            href={playStoreUrl('mobile_menu_cta')}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            Download on Google Play
          </a>
        </div>
      </div>
    {/if}
  </header>

  <main id="top">
    <!-- Hero: Apple Mac mini minimalism + Amy Food Journal focus & clear action button -->
    <section
      id="clock-it"
      class="relative scroll-mt-20 overflow-hidden pb-16 pt-10 sm:pb-28 sm:pt-16 lg:pt-20"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <!-- Left: Crisp Typography & Single Clear Action Button -->
          <div class="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <div
              class="mb-5 inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-surface/80 py-1.5 pl-2 pr-3.5 text-xs font-medium text-foreground/80 sm:mb-6"
            >
              <img
                src="/clock-it-icon.png"
                alt="Repeat Alarm: Clock-It icon"
                class="h-5 w-5 rounded-[5px] ring-1 ring-black/10"
                width="20"
                height="20"
              />
              <span>Repeat Alarm: Clock-It</span>
              <span class="text-black/20">·</span>
              <span class="text-muted-foreground">Android</span>
            </div>

            <h1
              class="max-w-xl text-[38px] font-bold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.06] text-balance"
            >
              One setup.<br />Every alarm in between.
            </h1>

            <p
              class="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl text-pretty"
            >
              Pick a start time, an end time, and an interval. Clock-It schedules the entire
              repeating alarm sequence in seconds—so heavy sleepers wake up on time without setting
              30 alarms by hand.
            </p>

            <!-- Clear Primary Action Button + Apple-style secondary text link -->
            <div class="mt-8 flex w-full flex-col items-center gap-4 sm:mt-9 sm:w-auto sm:flex-row sm:gap-6">
              <a
                href={playStoreUrl('hero_cta')}
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex h-[52px] w-full max-w-[280px] items-center justify-center gap-3 whitespace-nowrap rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_rgba(37,83,232,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_32px_-10px_rgba(37,83,232,0.75)] active:translate-y-0 sm:h-[54px] sm:w-auto"
              >
                <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M3.61 1.814L13.793 12 3.61 22.186a1.83 1.83 0 0 1-.41-1.158V2.972c0-.436.153-.84.41-1.158zm11.27 11.271l2.803 2.803-11.2 6.38c-.44.25-.945.323-1.404.222l9.801-9.405zm3.947-2.25l2.313 1.318c.84.478.84 1.69 0 2.168l-2.313 1.318-2.99-2.402 2.99-2.402zM5.079 1.51c.46-.101.964-.028 1.404.222l11.2 6.38-2.803 2.803-9.801-9.405z"
                  />
                </svg>
                <span>Download on Google Play</span>
              </a>

              <a
                href="#how-it-works"
                class="group inline-flex items-center gap-1 text-[15px] font-medium text-primary transition hover:text-primary-hover"
              >
                <span>See how it works</span>
                <span class="inline-block transition-transform group-hover:translate-x-0.5" aria-hidden="true">›</span>
              </a>
            </div>

            <!-- Quiet trust specs -->
            <div class="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground lg:justify-start">
              <span class="inline-flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-[#2553e8]"></span>
                Ad-free
              </span>
              <span class="inline-flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-[#2553e8]"></span>
                Material 3 Expressive
              </span>
              <span class="inline-flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-[#2553e8]"></span>
                Built by Monish Sharma
              </span>
            </div>
          </div>

          <!-- Right: Interactive Clock-It Android Phone -->
          <div class="lg:col-span-5">
            <ClockItPhoneHero />
          </div>
        </div>
      </div>
    </section>

    <!-- Subtle hairline divider -->
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <div class="h-px bg-border/80"></div>
    </div>

    <!-- Section 2: Amy Food Journal–inspired 3-step visual walkthrough -->
    <section id="how-it-works" class="scroll-mt-20 py-16 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <HowItWorksShowcase />
      </div>
    </section>

    <!-- Section 3: Apple Mac mini–style Minimal Bento Grid -->
    <section id="features" class="scroll-mt-20 bg-surface/65 py-16 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <div class="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p class="mb-3 text-sm font-semibold tracking-tight text-primary">
            Designed with restraint
          </p>
          <h2 class="text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
            Simple, loud, and zero clutter.
          </h2>
          <p class="mt-4 text-base text-muted-foreground sm:text-lg">
            Everything you need to actually get up and stay on schedule—nothing you don't.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-12">
          <!-- Card 1: Real full-screen loud ringing screenshots (Light & Dark) -->
          <div class="apple-card flex flex-col justify-between overflow-hidden rounded-[28px] bg-white px-6 pt-6 sm:px-9 sm:pt-9 md:col-span-7">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-primary">
                Never snooze again
              </p>
              <h3 class="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                A real alarm you can't swipe away and forget.
              </h3>
              <p class="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Full-screen ringing with optional force-loud volume and random ringtones—in both
                light and dark themes—until you are actually awake.
              </p>
            </div>

            <!-- Real Pixel-framed ringing screenshots emerging cleanly from card bottom -->
            <div class="mt-8 flex items-end justify-center gap-4 overflow-hidden pt-2 sm:gap-6">
              <div class="w-[148px] shrink-0 sm:w-[176px]">
                <img
                  src="/screenshots/ringing-light.webp"
                  alt="Repeat Alarm: Clock-It loud ringing screen in light mode"
                  width="760"
                  height="1606"
                  loading="lazy"
                  class="-mb-24 w-full object-contain drop-shadow-[0_16px_30px_rgba(17,17,20,0.14)] sm:-mb-28"
                />
              </div>
              <div class="w-[148px] shrink-0 sm:w-[176px]">
                <img
                  src="/screenshots/ringing-dark.webp"
                  alt="Repeat Alarm: Clock-It loud ringing screen in dark mode"
                  width="760"
                  height="1606"
                  loading="lazy"
                  class="-mb-16 w-full object-contain drop-shadow-[0_18px_34px_rgba(17,17,20,0.22)] sm:-mb-20"
                />
              </div>
            </div>
          </div>

          <!-- Card 2: Real "Better way" screenshot -->
          <div class="apple-card flex flex-col justify-between overflow-hidden rounded-[28px] bg-white px-6 pt-6 sm:px-9 sm:pt-9 md:col-span-5">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-primary">
                One clean toggle
              </p>
              <h3 class="mt-2 text-2xl font-bold tracking-tight text-foreground">
                Replace 20 cluttered alarms with one interval.
              </h3>
              <p class="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                Toggle an entire morning sequence on or off with a single tap instead of managing a
                wall of individual alarms.
              </p>
            </div>

            <div class="mt-7 flex justify-center overflow-hidden pt-2">
              <div class="w-[176px] sm:w-[196px]">
                <img
                  src="/screenshots/onboarding-better.webp"
                  alt="Repeat Alarm: Clock-It Better way screen showing a single interval alarm toggle"
                  width="760"
                  height="1606"
                  loading="lazy"
                  class="-mb-20 w-full object-contain drop-shadow-[0_16px_30px_rgba(17,17,20,0.14)] sm:-mb-24"
                />
              </div>
            </div>
          </div>

          <!-- Card 3: Built for real routines -->
          <div class="apple-card rounded-[28px] bg-white p-6 sm:p-9 md:col-span-8">
            <p class="text-xs font-semibold uppercase tracking-wider text-primary">
              Beyond wake-up calls
            </p>
            <h3 class="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Built for mornings, study sprints, and daily habits.
            </h3>

            <div class="mt-6 grid gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
              {#each routines as item}
                <div class="rounded-2xl bg-surface/80 p-4">
                  <p class="text-[15px] font-semibold text-foreground">{item.title}</p>
                  <p class="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Card 4: Speed & zero ads (Mac mini matte-black hardware card) -->
          <div class="apple-card flex flex-col justify-between rounded-[28px] bg-[#161619] p-6 text-white sm:p-9 md:col-span-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wider text-[#c2d2ff]">
                Zero clutter
              </span>
              <img
                src="/clock-it-icon.png"
                alt=""
                class="h-9 w-9 rounded-[9px]"
                width="36"
                height="36"
              />
            </div>

            <div class="my-8">
              <p class="text-5xl font-bold tracking-tight tabular-nums sm:text-6xl">
                0 <span class="text-[#c2d2ff]">ads</span>
              </p>
              <p class="mt-3 text-[15px] leading-relaxed text-white/70">
                Setting 20 alarms manually takes 10–15 minutes and clutters your phone. Clock-It does
                it in seconds with clean Material 3 design.
              </p>
            </div>

            <a
              href={playStoreUrl('bento_zero_ads_cta')}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-[#c2d2ff] transition hover:text-white"
            >
              <span>Try Clock-It free</span>
              <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Personal Engineering / Other Projects -->
    <section id="projects" class="scroll-mt-20 py-16 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <div class="mb-10 flex flex-col justify-between gap-3 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p class="mb-2.5 text-sm font-semibold tracking-tight text-primary">
              Also building
            </p>
            <h2 class="text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
              Systems engineering &amp; experiments.
            </h2>
          </div>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <span>All repositories on GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <!-- M:N Scheduler in Zig Card (minimal Apple/editorial finish) -->
        <div class="apple-card rounded-[28px] bg-surface p-6 sm:p-10">
          <div class="grid items-center gap-8 lg:grid-cols-12">
            <div class="lg:col-span-8">
              <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-foreground ring-1 ring-black/[0.06]">
                <span class="h-1.5 w-1.5 rounded-full bg-foreground"></span>
                Systems Programming
              </div>

              <h3 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                M:N Scheduler in Zig
              </h3>
              <p class="mt-1.5 text-base font-medium text-primary sm:text-lg">
                Go-style concurrency, built from scratch.
              </p>
              <p class="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                An M:N threading runtime where M green threads are multiplexed across N OS threads.
                Explores cooperative scheduling, work-stealing queues, and channel-based
                communication—bringing ergonomic concurrency primitives to Zig.
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                {#each ['Zig', 'Concurrency', 'Work Stealing', 'Green Threads', 'Channels'] as tag}
                  <span class="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-black/[0.07]">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>

            <div class="flex flex-col items-start lg:col-span-4 lg:items-end">
              <a
                href={ZIG_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-12 items-center gap-2.5 rounded-full bg-foreground px-6 text-sm font-semibold text-white transition hover:bg-black/85"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Minimal FAQ (great for visitors + Google search rich snippets) -->
    <section id="faq" class="scroll-mt-20 border-t border-border/80 py-16 sm:py-24">
      <div class="mx-auto max-w-3xl px-5 sm:px-8">
        <div class="mb-10 text-center">
          <p class="mb-2.5 text-sm font-semibold tracking-tight text-primary">FAQ</p>
          <h2 class="text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
            Common questions.
          </h2>
        </div>

        <div class="divide-y divide-border">
          {#each faqs as item, idx}
            <div class="py-5">
              <button
                type="button"
                onclick={() => (openFaq = openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                class="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span class="text-[15px] font-semibold text-foreground sm:text-base">
                  {item.q}
                </span>
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-base font-medium text-muted-foreground transition-transform duration-200 {openFaq ===
                  idx
                    ? 'rotate-45 text-foreground'
                    : ''}"
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {#if openFaq === idx}
                <p class="mt-3 pr-8 text-[15px] leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Section 6: Founder / Personal Note (inspired by Amy's "Hi, I'm Chris") -->
    <section id="about" class="scroll-mt-20 border-t border-border/80 py-16 sm:py-24">
      <div class="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p class="mb-3 text-sm font-semibold tracking-tight text-primary">About</p>
        <h2 class="text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
          Hi, I'm Monish.
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted-foreground sm:text-xl">
          Interested in building cool, useful software—from low-level concurrency runtimes in Zig to
          minimal Android apps that solve real everyday annoyances. I built Clock-It because setting
          30 morning alarms manually is ridiculous.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground transition hover:bg-surface"
          >
            GitHub
            <span class="text-muted-foreground" aria-hidden="true">↗</span>
          </a>
          <a
            href={playStoreUrl('about_cta')}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground transition hover:bg-surface"
          >
            Google Play
            <span class="text-muted-foreground" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Section 7: Final Minimal Apple-style Closing CTA -->
    <section class="pb-20 pt-4 sm:pb-24 sm:pt-6">
      <div class="mx-auto max-w-5xl px-5 sm:px-8">
        <div
          class="flex flex-col items-center rounded-[32px] bg-surface px-6 py-14 text-center sm:rounded-[36px] sm:px-12 sm:py-20"
        >
          <img
            src="/clock-it-icon.png"
            alt="Repeat Alarm: Clock-It"
            class="mb-6 h-16 w-16 rounded-[16px] shadow-[0_16px_36px_-12px_rgba(17,17,20,0.3)] ring-1 ring-black/10 sm:h-20 sm:w-20 sm:rounded-[20px]"
            width="80"
            height="80"
          />
          <h2 class="text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
            Set once. Wake up on time.
          </h2>
          <p class="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
            Download Repeat Alarm: Clock-It on Android and turn 30 alarms into a 5-second setup.
          </p>
          <a
            href={playStoreUrl('closing_cta')}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex h-[52px] items-center justify-center gap-3 whitespace-nowrap rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_rgba(37,83,232,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover sm:h-[54px] sm:px-8"
          >
            <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M3.61 1.814L13.793 12 3.61 22.186a1.83 1.83 0 0 1-.41-1.158V2.972c0-.436.153-.84.41-1.158zm11.27 11.271l2.803 2.803-11.2 6.38c-.44.25-.945.323-1.404.222l9.801-9.405zm3.947-2.25l2.313 1.318c.84.478.84 1.69 0 2.168l-2.313 1.318-2.99-2.402 2.99-2.402zM5.079 1.51c.46-.101.964-.028 1.404.222l11.2 6.38-2.803 2.803-9.801-9.405z"
              />
            </svg>
            <span>Download on Google Play</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Minimal Footer -->
  <footer class="border-t border-border/80 bg-white">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
      <p>© {new Date().getFullYear()} Monish Sharma</p>
      <div class="flex flex-wrap items-center justify-center gap-6">
        <a
          href={playStoreUrl('footer_link')}
          target="_blank"
          rel="noopener noreferrer"
          class="transition hover:text-foreground"
        >
          Clock-It on Google Play
        </a>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="transition hover:text-foreground"
        >
          GitHub
        </a>
        <a href="/multipleAlarmPrivacyPolicy" class="transition hover:text-foreground">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
</div>

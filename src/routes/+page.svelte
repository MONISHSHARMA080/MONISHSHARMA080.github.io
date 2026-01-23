<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
</script>

<main class="min-h-screen bg-background">
  <!-- Hero Section with Colorful Background -->
  <div class="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
    <div class="mx-auto max-w-5xl px-6 py-20 md:py-32">
      <h1
        class="mb-6 max-w-3xl text-6xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance"
      >
        Monish Sharma
      </h1>
      <p
        class="mb-8 max-w-2xl text-2xl font-medium leading-relaxed text-foreground/80 md:text-3xl text-pretty"
      >
        Intrested in building cool stuff :)
      </p>
    </div>
  </div>

  <!-- Main Content -->
  <div class="mx-auto max-w-5xl px-6 py-16 md:py-20">
    <!-- About Card with Vibrant Background -->
    <section class="mb-16">
      <div class="rounded-3xl bg-muted p-8 shadow-lg md:p-12">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5"
        >
          <div class="h-2 w-2 rounded-full bg-primary-foreground"></div>
          <span class="text-sm font-bold text-primary-foreground"
            >Currently Building</span
          >
        </div>
        <p class="text-xl leading-relaxed text-foreground md:text-2xl">
          * Bringing Go style concurrency to Zig
          <br />
          * Alarm app that reduces clutter and helps in my productivity
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section>
      <h2 class="mb-10 text-4xl font-black text-foreground md:text-5xl">
        What I'm Working On
      </h2>

      <div class="space-y-8">
        <!-- Project 1: M:N Scheduler -->
        <div
          class="group relative overflow-hidden rounded-3xl border-4 border-foreground bg-card p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:p-10"
        >
          <div
            class="absolute right-8 top-8 h-16 w-16 rounded-full bg-primary/20"
          ></div>
          <div
            class="absolute right-12 top-12 h-12 w-12 rounded-full bg-secondary/20"
          ></div>

          <div class="relative">
            <div class="mb-4">
              <Badge
                class="mb-3 bg-primary px-3 py-1 text-base font-bold text-primary-foreground hover:bg-primary"
              >
                Systems Programming
              </Badge>
            </div>

            <h3 class="mb-3 text-3xl font-black text-foreground md:text-4xl">
              M:N Scheduler in Zig
            </h3>

            <p class="mb-2 text-xl font-semibold text-primary">
              Go-like concurrency, but built from scratch
            </p>

            <p
              class="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              Ever wondered how Go manages thousands of goroutines so
              efficiently? I'm building that! An M:N threading model where M
              green threads get multiplexed across N OS threads. Features
              cooperative scheduling, work stealing algorithms, and a
              channel-based communication system. It's low-level systems
              programming at its finest.
            </p>

            <div class="mb-6 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-accent px-3 py-1 text-sm font-bold text-accent-foreground"
              >
                Zig
              </Badge>
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-background px-3 py-1 text-sm font-bold text-foreground"
              >
                Concurrency
              </Badge>
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-background px-3 py-1 text-sm font-bold text-foreground"
              >
                Work Stealing
              </Badge>
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-background px-3 py-1 text-sm font-bold text-foreground"
              >
                Green Threads
              </Badge>
            </div>

            <a
              href="https://github.com/monishsharma080/zig-concurrency"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-2xl border-3 border-foreground bg-primary px-6 py-3 font-bold text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        <!-- Project 2: Repeating Alarm App -->
        <div
          class="group relative overflow-hidden rounded-3xl border-4 border-foreground bg-card p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:p-10"
        >
          <div
            class="absolute right-8 top-8 h-16 w-16 rounded-full bg-secondary/20"
          ></div>
          <div
            class="absolute right-12 top-12 h-12 w-12 rounded-full bg-accent/20"
          ></div>

          <div class="relative">
            <div class="mb-4">
              <Badge
                class="mb-3 bg-secondary px-3 py-1 text-base font-bold text-secondary-foreground hover:bg-secondary"
              >
                Mobile Development
              </Badge>
            </div>

            <h3 class="mb-3 text-3xl font-black text-foreground md:text-4xl">
              Repeating Alarm App
            </h3>

            <p class="mb-2 text-xl font-semibold text-secondary">
              Because setting 30 alarms manually is ridiculous
            </p>

            <p
              class="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              An Android app that solves a real annoyance. Instead of creating
              individual alarms for every minute from 7:00 to 7:30 AM, just set
              a range and interval. The app handles all the scheduling
              automatically. Perfect for interval training, medication
              reminders, or any situation where you need multiple alarms at
              regular intervals. Simple idea, actually useful.
            </p>

            <div class="mb-6 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-accent px-3 py-1 text-sm font-bold text-accent-foreground"
              >
                Android
              </Badge>
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-background px-3 py-1 text-sm font-bold text-foreground"
              >
                Kotlin
              </Badge>
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-background px-3 py-1 text-sm font-bold text-foreground"
              >
                AlarmManager
              </Badge>
              <Badge
                variant="outline"
                class="border-2 border-foreground bg-background px-3 py-1 text-sm font-bold text-foreground"
              >
                Scheduling
              </Badge>
            </div>

            <a
              href="https://github.com/MONISHSHARMA080/MultipleAlarm_Native/releases"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-2xl border-3 border-foreground bg-secondary px-6 py-3 font-bold text-secondary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

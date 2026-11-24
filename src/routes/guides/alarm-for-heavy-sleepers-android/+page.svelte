<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
	import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
	import { LAST_UPDATED, SITE_URL, jsonLdScript } from '$lib/seo';

	const PATH = '/guides/alarm-for-heavy-sleepers-android';
	const CANONICAL = `${SITE_URL}${PATH}`;
	const UTM_CAMPAIGN = 'seo_heavy_sleeper_guide';
	const TITLE = 'Alarm Setup for Heavy Sleepers & ADHD on Android — Interval Alarms';
	const DESCRIPTION =
		'Why a single alarm fails heavy sleepers and ADHD mornings—and how to configure tight interval alarms, random ringtones, and force-loud volume on Android.';

	let openFaq = $state<number | null>(0);

	const faqs = [
		{
			q: 'Why do I sleep through or dismiss a single alarm without remembering?',
			a: 'When you wake from deep sleep, your brain can hit Snooze or Dismiss on autopilot. With only one alarm, dismissing it once creates total silence so you drift straight back into deep sleep.'
		},
		{
			q: 'What interval spacing works best for heavy sleepers?',
			a: 'A tight 1- to 5-minute interval across a 30- to 45-minute wake-up window works well because it leaves no quiet gap long enough to fall deeply back asleep, while keeping the whole sequence behind one toggle.'
		},
		{
			q: 'Does changing the ringtone really help?',
			a: 'Yes. Hearing the exact same melody every morning makes it easier for your brain to tune it out or dismiss it mechanically. Using Random alarm sounds forces a fresh cue each time.'
		},
		{
			q: 'Should I use interval alarms or puzzle-mission alarms?',
			a: 'If you want simple, ad-free setup without solving math or scanning barcodes, interval alarms are fast and low-friction. If you consistently turn off alarms even when they ring every 2 minutes, a mission-based app like Alarmy or Sleep as Android adds an extra physical barrier.'
		}
	];

	const schema = jsonLdScript({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Article',
				headline: TITLE,
				description: DESCRIPTION,
				datePublished: LAST_UPDATED,
				dateModified: LAST_UPDATED,
				mainEntityOfPage: CANONICAL,
				image: `${SITE_URL}/og-card.png`,
				author: {
					'@type': 'Person',
					name: 'Monish Sharma',
					url: SITE_URL
				},
				publisher: {
					'@type': 'Person',
					name: 'Monish Sharma',
					url: SITE_URL
				}
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
					{ '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
					{
						'@type': 'ListItem',
						position: 3,
						name: 'Heavy Sleepers & ADHD Setup',
						item: CANONICAL
					}
				]
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
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
	<link rel="canonical" href={CANONICAL} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={CANONICAL} />
	<meta property="og:site_name" content="Monish Sharma" />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:image" content={`${SITE_URL}/og-card.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={TITLE} />
	<meta name="twitter:description" content={DESCRIPTION} />
	<meta name="twitter:image" content={`${SITE_URL}/og-card.png`} />
	{@html schema}
</svelte:head>

<ArticleLayout
	currentPath={PATH}
	category="Guide · Heavy Sleepers & ADHD"
	title="A reliable Android alarm setup for heavy sleepers & ADHD mornings"
	subtitle="Why one alarm fails when you are groggy—and how a tight repeating interval window, random sounds, and force-loud volume close the gap."
	utmCampaign={UTM_CAMPAIGN}
>
	<!-- Why one alarm fails -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Why a single alarm fails
		</h2>
		<div class="grid gap-4 sm:grid-cols-3">
			<div class="rounded-2xl bg-surface/80 p-5">
				<h3 class="text-base font-bold text-foreground">Autopilot dismiss</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Groggy muscle memory makes it easy to swipe away a single alarm before you are truly
					conscious.
				</p>
			</div>
			<div class="rounded-2xl bg-surface/80 p-5">
				<h3 class="text-base font-bold text-foreground">Habituation to one sound</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Hearing the same familiar ringtone every day makes it easier for your brain to blend it
					into sleep.
				</p>
			</div>
			<div class="rounded-2xl bg-surface/80 p-5">
				<h3 class="text-base font-bold text-foreground">Long snooze gaps</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					A 9- or 15-minute snooze gives your brain plenty of time to sink back into deep sleep
					inertia.
				</p>
			</div>
		</div>
	</section>

	<!-- Concrete Setup -->
	<section class="grid items-center gap-8 rounded-[28px] bg-surface/70 p-6 sm:p-9 lg:grid-cols-12">
		<div class="space-y-5 lg:col-span-7">
			<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
				The 5-second interval setup in Clock-It
			</h2>
			<p class="text-[15px] leading-relaxed text-muted-foreground">
				Instead of setting 20 individual alarms before bed, configure one repeating window in{' '}
				<strong>Repeat Alarm: Clock-It</strong>:
			</p>
			<ul class="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
				<li>
					<strong class="text-foreground">1. Tight wake-up window:</strong> Pick your target time
					and backup buffer (for example, 6:00 AM → 6:45 AM) every <strong>2 or 5 minutes</strong>.
				</li>
				<li>
					<strong class="text-foreground">2. Random alarm sound:</strong> Set sound to{' '}
					<strong>Random</strong> so each alarm breaks through autopilot instead of repeating one
					predictable melody.
				</li>
				<li>
					<strong class="text-foreground">3. Force-loud volume:</strong> Enable optional force-loud
					volume so an accidentally lowered slider does not mute your morning.
				</li>
				<li>
					<strong class="text-foreground">4. Short action message:</strong> Add a message like{' '}
					<em>“Feet on the floor”</em> or <em>“Take medication &amp; water”</em> to anchor your
					first action.
				</li>
				<li>
					<strong class="text-foreground">5. One clean toggle:</strong> Once you are out of bed,
					flip the single home-screen toggle off—no wall of leftover alarms.
				</li>
			</ul>
			<div class="pt-2">
				<PlayStoreButton
					campaign={UTM_CAMPAIGN}
					content="setup_section_cta"
					size="md"
					fullWidthMobile={true}
				/>
			</div>
		</div>

		<div class="flex items-end justify-center gap-3 overflow-hidden sm:gap-4 lg:col-span-5">
			<img
				src="/screenshots/ringing-light.webp"
				alt="Clock-It full-screen ringing display in light mode with prominent Stop button"
				width="760"
				height="1606"
				loading="lazy"
				class="w-[45%] max-w-[156px] object-contain drop-shadow-[0_18px_32px_rgba(17,17,20,0.16)] sm:w-[168px] sm:max-w-none"
			/>
			<img
				src="/screenshots/home-light.webp"
				alt="Clock-It home screen showing clean interval alarm window cards with single toggles"
				width="760"
				height="1606"
				loading="lazy"
				class="w-[45%] max-w-[156px] object-contain drop-shadow-[0_18px_32px_rgba(17,17,20,0.16)] sm:w-[168px] sm:max-w-none"
			/>
		</div>
	</section>

	<!-- Honest Comparison: Interval vs Mission -->
	<section class="rounded-[28px] border border-black/[0.06] bg-white p-6 sm:p-8">
		<h2 class="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
			Interval alarms vs. mission-based alarms: which should you pick?
		</h2>
		<div class="mt-4 grid gap-4 sm:grid-cols-2">
			<div class="apple-card rounded-[24px] bg-[#f8f8fe] p-5 ring-1 ring-[#c2d2ff]">
				<h3 class="text-base font-bold text-foreground">Choose interval alarms (Clock-It) if…</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					You hate ads and complex setup, you want an entire 30–45 minute safety net in 5 seconds,
					or you also want clean recurring reminders for ADHD time-blindness, study blocks, and
					medication.
				</p>
			</div>
			<div class="apple-card rounded-[24px] bg-surface/70 p-5">
				<h3 class="text-base font-bold text-foreground">
					Choose mission alarms (Alarmy / Sleep as Android) if…
				</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Repeated ringing still is not enough and you need a forced physical task—like walking to
					the bathroom to scan a barcode or solving math equations—before the alarm allows
					dismissal.
				</p>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Frequently asked questions
		</h2>
		<div class="divide-y divide-border rounded-[24px] border border-border bg-white px-6">
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
	</section>
</ArticleLayout>

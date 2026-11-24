<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
	import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
	import {
		LAST_UPDATED,
		SITE_URL,
		clockItSoftwareSchema,
		jsonLdScript
	} from '$lib/seo';

	const PATH = '/alternatives/alarmy';
	const CANONICAL = `${SITE_URL}${PATH}`;
	const UTM_CAMPAIGN = 'seo_alarmy_alternative';
	const TITLE = 'Alarmy Alternative for Android (Ad-Free) — Repeat Alarm: Clock-It';
	const DESCRIPTION =
		'Looking for a clean, ad-free Alarmy alternative on Android? Compare Repeat Alarm: Clock-It vs Alarmy—interval alarm sequences, random sounds, and force-loud volume without missions or paywalls.';

	let openFaq = $state<number | null>(0);

	const comparisonRows = [
		{
			feature: 'Platform',
			clockIt: 'Android',
			alarmy: 'Android & iOS'
		},
		{
			feature: 'Core wake-up approach',
			clockIt: 'Repeating interval window (every 1–30+ min) from one setup',
			alarmy: 'Single alarm + wake-up missions (math, barcode, photo, squats)'
		},
		{
			feature: 'Ads',
			clockIt: 'Ad-free',
			alarmy: 'Ads on the free tier; paid subscription removes ads'
		},
		{
			feature: 'Pricing model',
			clockIt: 'Free to download on Google Play',
			alarmy: 'Freemium with paid subscription tiers for Pro features'
		},
		{
			feature: 'Setting multiple alarms',
			clockIt: 'Pick start time, end time & interval once—auto-generates every ring time',
			alarmy: 'Create alarms individually'
		},
		{
			feature: 'Alarm list organization',
			clockIt: 'One card & single toggle per time-window sequence',
			alarmy: 'Separate entry for each alarm'
		},
		{
			feature: 'Sound & volume options',
			clockIt: 'Random or specific ringtone, optional force-loud volume, custom message',
			alarmy: 'Loud ringtones, mission sound options, wake-up check (Pro/tier dependent)'
		},
		{
			feature: 'UI & themes',
			clockIt: 'Minimal Material 3 Expressive in light & dark modes',
			alarmy: 'Feature-dense alarm, sleep, and morning routine hub'
		},
		{
			feature: 'Best for',
			clockIt: 'Heavy sleepers, ADHD routines, study blocks & people tired of ads/clutter',
			alarmy: 'People who specifically want barcode, photo, or math puzzle tasks'
		}
	];

	const faqs = [
		{
			q: 'What makes Repeat Alarm: Clock-It a good Alarmy alternative on Android?',
			a: 'Clock-It is ad-free, free to download on Google Play, and uses a single start-to-end interval setup instead of ads, subscription prompts, or complex setup menus. It keeps you from falling back asleep by ringing repeatedly every few minutes with zero quiet gap.'
		},
		{
			q: 'Does Clock-It have math problems, barcode scans, or photo missions like Alarmy?',
			a: 'No. Clock-It does not use puzzle or camera missions. Instead, it relies on repeating interval alarms (for example, every 1, 2, or 5 minutes across a morning window), optional random ringtones so you do not tune out a single sound, and optional force-loud volume.'
		},
		{
			q: 'Can I turn off all my morning alarms at once if I wake up early?',
			a: 'Yes. Each repeating sequence appears as one card on the home screen with a single toggle, so you can disable the whole morning window in one tap instead of switching off 15 or 20 individual alarms.'
		},
		{
			q: 'Is Repeat Alarm: Clock-It available on iPhone (iOS)?',
			a: 'No. Repeat Alarm: Clock-It is currently built for Android only. If you use an iPhone or need cross-platform syncing, Alarmy or an iOS-native alarm app is a better fit.'
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
					{ '@type': 'ListItem', position: 3, name: 'Alarmy Alternative', item: CANONICAL }
				]
			},
			clockItSoftwareSchema(),
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
	category="Comparison · Android"
	title="An ad-free Alarmy alternative for Android"
	subtitle="If you want an alarm clock that actually wakes heavy sleepers—without ads, subscription prompts, or clutter—here is how Repeat Alarm: Clock-It compares with Alarmy."
	utmCampaign={UTM_CAMPAIGN}
>
	<!-- TL;DR Box -->
	<section class="rounded-[24px] border border-[#c2d2ff] bg-[#f8f8fe] p-6 sm:p-8">
		<p class="text-xs font-semibold uppercase tracking-wider text-primary">TL;DR</p>
		<p class="mt-2 text-base leading-relaxed text-foreground sm:text-lg">
			<strong>Alarmy</strong> is built around wake-up missions (math, barcode scans, photos) with a
			freemium ad and subscription model. <strong>Repeat Alarm: Clock-It</strong> takes a simpler
			route on Android: it is <strong>ad-free</strong> and schedules an entire sequence of
			repeating interval alarms from one setup (for example, 6:00 AM to 6:45 AM every 2 minutes)
			with optional random ringtones and force-loud volume.
		</p>
		<div class="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
			<PlayStoreButton
				campaign={UTM_CAMPAIGN}
				content="tldr_cta"
				size="md"
				fullWidthMobile={true}
			/>
			<a
				href="#comparison"
				class="text-sm font-medium text-primary transition hover:text-primary-hover"
			>
				Jump to comparison table ›
			</a>
		</div>
	</section>

	<!-- Why people look for an Alarmy alternative -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Why Android users look for an Alarmy alternative
		</h2>
		<p class="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
			Alarmy popularized mission-based wake-up alarms, and for people who specifically need to
			walk across the room to scan a barcode, that mechanic works well. Still, many Android users
			eventually look for a lighter replacement for three practical reasons:
		</p>
		<div class="grid gap-4 sm:grid-cols-3">
			<div class="rounded-2xl bg-surface/80 p-5">
				<h3 class="text-base font-bold text-foreground">Ads on the free tier</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Seeing ads or upgrade prompts when you are half-asleep and just trying to set or stop an
					alarm breaks trust in a morning utility.
				</p>
			</div>
			<div class="rounded-2xl bg-surface/80 p-5">
				<h3 class="text-base font-bold text-foreground">Subscription paywalls</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Removing ads and unlocking Pro features requires a recurring subscription, which feels
					heavy when all you need is a reliable wake-up alarm.
				</p>
			</div>
			<div class="rounded-2xl bg-surface/80 p-5">
				<h3 class="text-base font-bold text-foreground">App bloat &amp; setup friction</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Not everyone wants sleep tracking, morning horoscopes, or puzzles—sometimes you just want
					multiple loud alarms scheduled fast.
				</p>
			</div>
		</div>
	</section>

	<!-- Comparison Table -->
	<section id="comparison" class="scroll-mt-24 space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Repeat Alarm: Clock-It vs. Alarmy
		</h2>
		<p class="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
			Here is a straightforward breakdown of how the two apps differ in setup, pricing model, and
			wake-up mechanics.
		</p>

		<!-- Mobile stacked comparison cards (zero horizontal scroll) -->
		<div class="space-y-3 md:hidden">
			{#each comparisonRows as row}
				<div class="apple-card rounded-[24px] bg-white p-4">
					<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
						{row.feature}
					</p>
					<div class="mt-3 space-y-2.5">
						<div class="rounded-2xl bg-[#f8f8fe] p-3.5 ring-1 ring-[#c2d2ff]/70">
							<p class="text-[11px] font-bold uppercase tracking-wider text-primary">
								Repeat Alarm: Clock-It
							</p>
							<p class="mt-1 text-sm leading-relaxed text-foreground">{row.clockIt}</p>
						</div>
						<div class="rounded-2xl bg-surface/70 p-3.5">
							<p class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
								Alarmy
							</p>
							<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{row.alarmy}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Tablet & Desktop comparison table -->
		<div class="hidden overflow-hidden rounded-[28px] border border-black/[0.06] bg-white md:block">
			<table class="w-full border-collapse text-left text-sm">
				<thead>
					<tr class="border-b border-border bg-surface/70">
						<th class="w-1/4 px-5 py-4 font-semibold text-muted-foreground">Feature</th>
						<th class="w-[37.5%] px-5 py-4 font-bold text-primary">Repeat Alarm: Clock-It</th>
						<th class="w-[37.5%] px-5 py-4 font-semibold text-foreground">Alarmy</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border/80">
					{#each comparisonRows as row}
						<tr class="align-top">
							<td class="px-5 py-4 font-semibold text-foreground">{row.feature}</td>
							<td class="bg-[#f8f8fe]/60 px-5 py-4 text-foreground">{row.clockIt}</td>
							<td class="px-5 py-4 text-muted-foreground">{row.alarmy}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- How Clock-It works for heavy sleepers -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
				How Clock-It wakes heavy sleepers without missions
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
				Most people oversleep because a single alarm leaves a quiet gap after they hit Dismiss.
				Clock-It solves that by letting you define a <strong>time window</strong> and a{' '}
				<strong>repeat interval</strong> in one screen—then ringing persistently across the entire
				window.
			</p>
		</div>

		<div class="grid gap-5 rounded-[28px] bg-surface/65 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:px-6 sm:pt-7">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Step 1</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Set window &amp; interval</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Pick a start time, end time, interval (like 1, 2, or 5 min), date, random or specific
						sound, and an optional message.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/step2-configure.webp"
						alt="Clock-It setup screen showing start and end time, repeat every 1 min, random sound, and message"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>

			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:px-6 sm:pt-7">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Step 2</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Every ring time scheduled</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Clock-It generates the full sequence automatically and displays every exact ring time
						in one tidy confirmation list.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/step3-scheduled.webp"
						alt="Clock-It confirmation screen listing every scheduled alarm time in sequence"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>

			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:col-span-2 sm:px-6 sm:pt-7 lg:col-span-1">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Step 3</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Loud full-screen ringing</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Full-screen light or dark ringing with optional force-loud volume and random tones so
						your brain does not tune out one sound.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/ringing-dark.webp"
						alt="Clock-It full-screen dark mode alarm ringing screen with prominent Stop button"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.2)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Honest Trade-offs -->
	<section class="rounded-[24px] border border-border bg-white p-6 sm:p-8">
		<h2 class="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
			When Alarmy (or another app) is still the better choice
		</h2>
		<p class="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
			Clock-It is intentionally minimal, which means it does not try to cover every feature
			Alarmy offers. You should stick with Alarmy or another specialized tool if you need:
		</p>
		<ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
			<li class="flex gap-2.5">
				<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"></span>
				<span>
					<strong class="text-foreground">Physical or cognitive missions:</strong> Clock-It has no
					barcode scanning, photo matching, squat counters, or math problems.
				</span>
			</li>
			<li class="flex gap-2.5">
				<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"></span>
				<span>
					<strong class="text-foreground">Sleep tracking or smartwatches:</strong> Clock-It focuses
					solely on reliable interval alarm scheduling, not overnight sleep analysis.
				</span>
			</li>
			<li class="flex gap-2.5">
				<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"></span>
				<span>
					<strong class="text-foreground">iPhone / iOS support:</strong> Clock-It is currently
					Android-only.
				</span>
			</li>
		</ul>
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

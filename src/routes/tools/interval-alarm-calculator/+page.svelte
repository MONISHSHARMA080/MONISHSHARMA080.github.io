<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
	import IntervalCalculator from '$lib/components/IntervalCalculator.svelte';
	import { LAST_UPDATED, SITE_URL, jsonLdScript } from '$lib/seo';

	const PATH = '/tools/interval-alarm-calculator';
	const CANONICAL = `${SITE_URL}${PATH}`;
	const UTM_CAMPAIGN = 'seo_interval_calculator';
	const TITLE = 'Repeat Alarm Interval Calculator — Preview Your Alarm Schedule';
	const DESCRIPTION =
		'Pick a start time, end time, and repeat interval (1, 2, 5, 10, 15, 25, 30, or 60 minutes) to see every exact ring time and total alarm count instantly.';

	let openFaq = $state<number | null>(0);

	const examples = [
		{
			name: 'Heavy sleeper wake-up',
			window: '6:00 AM → 7:00 AM · every 5 min',
			count: '13 alarms',
			why: 'No quiet gap long enough to fall back into deep sleep.'
		},
		{
			name: 'Pomodoro study block',
			window: '9:00 AM → 12:00 PM · every 25 min',
			count: '8 alarms',
			why: 'Structured focus checkpoints across a 3-hour study session.'
		},
		{
			name: 'Hydration & posture breaks',
			window: '8:00 AM → 8:00 PM · every 60 min',
			count: '13 alarms',
			why: 'Consistent hourly cues throughout the workday.'
		},
		{
			name: 'Medication window',
			window: '8:00 AM → 8:00 PM · every 240 min',
			count: '4 alarms',
			why: 'Exact 4-hour spacing without creating separate reminders.'
		}
	];

	const faqs = [
		{
			q: 'How does the Repeat Alarm Interval Calculator work?',
			a: 'Enter a start time, an end time, and how many minutes between rings. The calculator lists every exact alarm timestamp in that window and counts how many alarms you would have to create manually.'
		},
		{
			q: 'Does it support overnight windows like 11:30 PM to 1:00 AM?',
			a: 'Yes. If the end time is earlier than the start time, the calculator automatically wraps into the next day and marks next-day times with +1d.'
		},
		{
			q: 'How can I run this schedule automatically on my Android phone?',
			a: 'Download Repeat Alarm: Clock-It on Google Play. Enter the exact same start time, end time, and repeat interval once, and Clock-It schedules the entire sequence under a single toggle.'
		}
	];

	const schema = jsonLdScript({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebApplication',
				name: 'Repeat Alarm Interval Calculator',
				url: CANONICAL,
				applicationCategory: 'UtilitiesApplication',
				operatingSystem: 'Any',
				description: DESCRIPTION,
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
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
					{ '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
					{ '@type': 'ListItem', position: 3, name: 'Interval Calculator', item: CANONICAL }
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
	<meta property="og:type" content="website" />
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
	category="Interactive Tool"
	title="Repeat alarm interval calculator"
	subtitle="Pick a start time, end time, and repeat interval to preview every exact alarm time—and see how many manual alarms you avoid creating."
	utmCampaign={UTM_CAMPAIGN}
>
	<IntervalCalculator utmCampaign={UTM_CAMPAIGN} />

	<!-- Example Schedules -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Common interval schedules
		</h2>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each examples as item}
				<div class="rounded-2xl bg-surface/80 p-5">
					<div class="flex items-center justify-between gap-2">
						<h3 class="text-base font-bold text-foreground">{item.name}</h3>
						<span class="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-black/[0.06] tabular-nums">
							{item.count}
						</span>
					</div>
					<p class="mt-1 text-xs font-semibold text-foreground/75 tabular-nums">{item.window}</p>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{item.why}</p>
				</div>
			{/each}
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

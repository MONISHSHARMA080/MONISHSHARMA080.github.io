<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
	import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
	import {
		LAST_UPDATED,
		SITE_URL,
		clockItSoftwareSchema,
		jsonLdScript
	} from '$lib/seo';

	const PATH = '/alternatives/repeat-alarm';
	const CANONICAL = `${SITE_URL}${PATH}`;
	const UTM_CAMPAIGN = 'seo_repeat_alarm_alternative';
	const TITLE = 'Repeat Alarm Alternative for Android — Clock-It Interval Alarm';
	const DESCRIPTION =
		'Looking for a modern Repeat Alarm alternative on Android? Repeat Alarm: Clock-It lets you set start time, end time, and repeat interval in seconds with Material 3 light & dark themes and zero ads.';

	let openFaq = $state<number | null>(0);

	const comparisonRows = [
		{
			feature: 'Setup model',
			clockIt: 'One screen: start time, end time, repeat interval, date, sound & message',
			classic: 'Recurring interval rule or reminder setup',
			stock: 'Create every single alarm manually one by one'
		},
		{
			feature: 'Schedule preview',
			clockIt: 'Shows every exact ring time in a confirmation timeline before finishing',
			classic: 'Usually shows next ring time only',
			stock: 'Shows separate cluttered cards for every alarm'
		},
		{
			feature: 'Toggle an entire window',
			clockIt: 'One clean toggle turns the whole sequence on or off',
			classic: 'Per-alarm toggle',
			stock: 'Must toggle 10–30 alarms individually'
		},
		{
			feature: 'Design & themes',
			clockIt: 'Material 3 Expressive with light & dark mode',
			classic: 'Utilitarian / older UI styles',
			stock: 'Standard system clock UI'
		},
		{
			feature: 'Ads',
			clockIt: 'Ad-free',
			classic: 'Often ad-supported on free tiers',
			stock: 'Ad-free'
		},
		{
			feature: 'Sound & loudness',
			clockIt: 'Random or specific sound + optional force-loud volume',
			classic: 'Custom ringtones / voice alerts',
			stock: 'Standard alarm ringtone'
		}
	];

	const routines = [
		{
			title: 'Heavy sleepers & ADHD mornings',
			desc: 'Set 6:00 AM → 6:45 AM every 2 or 5 minutes with random ringtones so you never drift back to sleep between alarms.'
		},
		{
			title: 'Pomodoro & study blocks',
			desc: 'Run 25-minute focus intervals across a 3-hour study window without resetting a timer each round.'
		},
		{
			title: 'Medicine & hydration windows',
			desc: 'Schedule hourly or multi-hour repeating alarms from morning to evening with a clear label message.'
		},
		{
			title: 'Flights & early shifts',
			desc: 'Ring every 10 minutes during the final hour before you need to walk out the door.'
		}
	];

	const faqs = [
		{
			q: 'How is Repeat Alarm: Clock-It different from classic Repeat Alarm apps?',
			a: 'Clock-It focuses on bounded time windows with clean Material 3 design and zero ads. You pick a start time, an end time, and an interval—and Clock-It shows you every ring time up front and groups the entire sequence under a single home-screen toggle.'
		},
		{
			q: 'Can I use Clock-It for hourly water, medication, or Pomodoro intervals?',
			a: 'Yes. You can set short intervals (1, 2, 5, 10, 15, 25, or 30 minutes) or hourly intervals across any window, and add a custom message so you know what each sequence is for.'
		},
		{
			q: 'How do I avoid cluttered alarm lists when setting alarms every 5 minutes?',
			a: 'Instead of displaying 15 or 20 separate rows, Clock-It collapses the entire window (for example, 5:29 PM → 6:14 PM) into a single card with one toggle switch.'
		},
		{
			q: 'Does Clock-It have social/group alarms or iOS support?',
			a: 'No. Clock-It is an Android-only individual alarm utility. If you need shared group alarms for friends or iOS support, an app like Galarm is better suited.'
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
						name: 'Repeat Alarm Alternative',
						item: CANONICAL
					}
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
	title="A clean Repeat Alarm alternative for Android"
	subtitle="Replace cluttered alarm lists and older utility interfaces with one Material 3 setup: pick a start time, an end time, and a repeat interval."
	utmCampaign={UTM_CAMPAIGN}
>
	<!-- TL;DR Box -->
	<section class="rounded-[24px] border border-[#c2d2ff] bg-[#f8f8fe] p-6 sm:p-8">
		<p class="text-xs font-semibold uppercase tracking-wider text-primary">TL;DR</p>
		<p class="mt-2 text-base leading-relaxed text-foreground sm:text-lg">
			If you are looking for an Android app like <strong>Repeat Alarm</strong> with a modern,
			ad-free interface, <strong>Repeat Alarm: Clock-It</strong> lets you schedule an entire
			sequence of interval alarms in seconds, preview every exact ring time before saving, and
			control the whole window with a single toggle.
		</p>
		<div class="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
			<PlayStoreButton
				campaign={UTM_CAMPAIGN}
				content="tldr_cta"
				size="md"
				fullWidthMobile={true}
			/>
			<a
				href="/tools/interval-alarm-calculator"
				class="text-sm font-medium text-primary transition hover:text-primary-hover"
			>
				Try the interval calculator ›
			</a>
		</div>
	</section>

	<!-- Comparison Table -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Clock-It vs. classic Repeat Alarm apps vs. stock Android Clock
		</h2>
		<p class="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
			Here is how Repeat Alarm: Clock-It compares when you need recurring alarms across a specific
			part of your day.
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
								Classic Repeat Alarm apps
							</p>
							<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{row.classic}</p>
						</div>
						<div class="rounded-2xl bg-surface/70 p-3.5">
							<p class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
								Stock Android Clock
							</p>
							<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{row.stock}</p>
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
						<th class="w-[18%] px-4 py-4 font-semibold text-muted-foreground">Capability</th>
						<th class="w-[30%] px-4 py-4 font-bold text-primary">Repeat Alarm: Clock-It</th>
						<th class="w-[26%] px-4 py-4 font-semibold text-foreground">Classic Repeat Alarm apps</th>
						<th class="w-[26%] px-4 py-4 font-semibold text-foreground">Stock Android Clock</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border/80">
					{#each comparisonRows as row}
						<tr class="align-top">
							<td class="px-4 py-4 font-semibold text-foreground">{row.feature}</td>
							<td class="bg-[#f8f8fe]/60 px-4 py-4 text-foreground">{row.clockIt}</td>
							<td class="px-4 py-4 text-muted-foreground">{row.classic}</td>
							<td class="px-4 py-4 text-muted-foreground">{row.stock}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- Visual Walkthrough -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
				One setup. One toggle. Zero alarm clutter.
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
				Instead of tapping through a time picker 15 times—and having 15 separate cards clog your
				alarm screen—Clock-It treats each time range as one clean unit.
			</p>
		</div>

		<div class="grid gap-5 rounded-[28px] bg-surface/65 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:px-6 sm:pt-7">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Clean overview</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">One toggle per sequence</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Turn an entire 7:00 → 7:40 every-10-minutes block on or off with one tap.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/onboarding-better.webp"
						alt="Clock-It Better way screen showing a 7:00 to 7:40 every 10 minutes toggle"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>

			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:px-6 sm:pt-7">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Fast setup</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Start, end, and interval</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Pick your start time, end time, repeat step, date, sound, and optional label message.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/step2-configure.webp"
						alt="Clock-It Set alarm screen with start time, end time, and repeat interval"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>

			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:col-span-2 sm:px-6 sm:pt-7 lg:col-span-1">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Full clarity</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Preview every ring time</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Review the exact schedule list before you finish so there are zero surprises.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/step3-scheduled.webp"
						alt="Clock-It confirmation timeline showing every scheduled alarm time"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Use cases -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Where interval alarms shine every day
		</h2>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each routines as item}
				<div class="rounded-2xl bg-surface/80 p-5">
					<h3 class="text-base font-bold text-foreground">{item.title}</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Honest Trade-offs -->
	<section class="rounded-[24px] border border-border bg-white p-6 sm:p-8">
		<h2 class="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
			When another app may fit better
		</h2>
		<ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
			<li class="flex gap-2.5">
				<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"></span>
				<span>
					<strong class="text-foreground">You are on iPhone:</strong> Repeat Alarm: Clock-It is
					Android-only.
				</span>
			</li>
			<li class="flex gap-2.5">
				<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"></span>
				<span>
					<strong class="text-foreground">You want shared/buddy alarms:</strong> Clock-It is a
					personal device alarm utility without social groups.
				</span>
			</li>
			<li class="flex gap-2.5">
				<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"></span>
				<span>
					<strong class="text-foreground">You want wake-up puzzles:</strong> Clock-It uses repeating
					interval rings, random sounds, and force-loud volume rather than math or barcode tasks.
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

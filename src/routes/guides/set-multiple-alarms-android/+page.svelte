<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
	import IntervalCalculator from '$lib/components/IntervalCalculator.svelte';
	import { LAST_UPDATED, SITE_URL, jsonLdScript } from '$lib/seo';

	const PATH = '/guides/set-multiple-alarms-android';
	const CANONICAL = `${SITE_URL}${PATH}`;
	const UTM_CAMPAIGN = 'seo_multiple_alarms_guide';
	const TITLE = 'How to Set Multiple Alarms Automatically on Android (Every 5 Minutes)';
	const DESCRIPTION =
		'Learn the 3 ways to set multiple repeating alarms on Android automatically—without tapping the clock picker 20 times—plus a checklist to keep Android battery optimization from silencing alarms.';

	let openFaq = $state<number | null>(0);

	const faqs = [
		{
			q: 'Can Google Clock automatically create alarms every 5 minutes?',
			a: 'No. Google Clock and most OEM stock clock apps require creating each alarm individually. You can use Snooze to repeat an alarm after it rings, but tapping Dismiss once stops the chain completely.'
		},
		{
			q: 'What is the fastest way to set alarms every 5 or 10 minutes on Android?',
			a: 'Use a dedicated interval alarm app like Repeat Alarm: Clock-It. You enter a start time, end time, and repeat interval once, and the app schedules every alarm in between automatically.'
		},
		{
			q: 'Why do third-party Android alarm apps sometimes fail to ring?',
			a: 'Aggressive OEM battery optimization (on Samsung, Xiaomi, OnePlus, Oppo, and others) or missing Alarms & Reminders permissions can delay background alarms. Disabling battery restrictions for your alarm app prevents this.'
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
						name: 'Set Multiple Alarms on Android',
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
	category="Guide · Android"
	title="How to set multiple alarms automatically on Android"
	subtitle="If you need alarms every 5, 10, or 15 minutes, setting them one by one in the default Clock app wastes time and leaves a mess. Here are the 3 real options on Android."
	utmCampaign={UTM_CAMPAIGN}
>
	<!-- Method 1 -->
	<section class="space-y-4">
		<div class="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-foreground">
			Method 1 · Fastest
		</div>
		<h2 class="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
			Use a dedicated interval alarm app (Repeat Alarm: Clock-It)
		</h2>
		<p class="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
			Instead of creating 12 or 20 individual alarms by hand, an interval alarm app generates the
			whole window from three numbers: <strong>start time</strong>, <strong>end time</strong>,
			and <strong>repeat interval</strong>.
		</p>

		<div class="grid gap-4 sm:grid-cols-3">
			<div class="rounded-2xl bg-surface/80 p-5">
				<p class="text-xs font-bold text-primary">01 · Window</p>
				<h3 class="mt-1 text-base font-bold text-foreground">Pick start &amp; end time</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					For example, 6:00 AM to 7:00 AM for morning wake-ups, or 8:00 AM to 8:00 PM for hourly
					reminders.
				</p>
			</div>
			<div class="rounded-2xl bg-surface/80 p-5">
				<p class="text-xs font-bold text-primary">02 · Interval</p>
				<h3 class="mt-1 text-base font-bold text-foreground">Choose repeat spacing</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Select 1, 2, 5, 10, 15, or 30 minutes—plus optional random ringtone and message label.
				</p>
			</div>
			<div class="rounded-2xl bg-surface/80 p-5">
				<p class="text-xs font-bold text-primary">03 · Confirm</p>
				<h3 class="mt-1 text-base font-bold text-foreground">Review &amp; toggle as one</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
					Clock-It lists every scheduled ring time and stores the whole block behind one switch.
				</p>
			</div>
		</div>

		<div class="grid gap-5 rounded-[28px] bg-surface/65 p-4 sm:grid-cols-2 sm:p-5">
			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:px-7 sm:pt-7">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Configure once</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Start, end &amp; interval</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Choose your time window, interval spacing, alarm sound, and optional label in seconds.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/step2-configure.webp"
						alt="Clock-It Set alarm screen showing start time, end time, and repeat interval"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>

			<div class="apple-card flex flex-col justify-between overflow-hidden rounded-[24px] bg-white px-5 pt-6 sm:px-7 sm:pt-7">
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-primary">Full schedule</p>
					<h3 class="mt-1 text-lg font-bold text-foreground">Every ring time listed</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						Confirm the exact sequence before finishing—no guessing which times were scheduled.
					</p>
				</div>
				<div class="mt-6 flex justify-center overflow-hidden">
					<img
						src="/screenshots/step3-scheduled.webp"
						alt="Clock-It confirmation timeline listing every scheduled alarm time"
						width="760"
						height="1606"
						loading="lazy"
						class="-mb-14 w-[148px] object-contain drop-shadow-[0_14px_28px_rgba(17,17,20,0.14)] sm:-mb-16 sm:w-[164px]"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Embedded Calculator -->
	<IntervalCalculator utmCampaign={UTM_CAMPAIGN} compact={true} />

	<!-- Method 2 & 3 -->
	<section class="space-y-6">
		<div class="rounded-[24px] border border-border bg-white p-6 sm:p-8">
			<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
				Method 2 · Built-in stock Clock
			</p>
			<h2 class="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
				Google Clock / Samsung Clock snooze workaround (and its catch)
			</h2>
			<p class="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
				If you only want to use your phone's pre-installed Clock app, you can set snooze length to
				5 or 10 minutes. The catch is that snooze stops the moment you accidentally tap{' '}
				<strong>Dismiss</strong> while half-asleep. Setting separate manual alarms avoids that,
				but creating 15–20 alarms manually clutters your Clock tab and means toggling each one off
				individually when your schedule changes.
			</p>
		</div>

		<div class="rounded-[24px] border border-border bg-white p-6 sm:p-8">
			<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
				Method 3 · Power-user automation
			</p>
			<h2 class="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
				MacroDroid or Tasker scripts
			</h2>
			<p class="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
				Automation tools like MacroDroid and Tasker can trigger alarms in a loop or respond to
				custom conditions. They are great if you want sensor or Wi-Fi rules, but overkill—and slow
				to adjust—when you just want to change tomorrow's wake-up window in five seconds before
				bed.
			</p>
		</div>
	</section>

	<!-- Android Reliability Checklist -->
	<section class="rounded-[24px] bg-surface/75 p-6 sm:p-8">
		<h2 class="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
			Android reliability checklist (so alarms never get killed overnight)
		</h2>
		<p class="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
			Whichever alarm app you choose on Android, check these four settings—especially on Samsung,
			Xiaomi, OnePlus, Oppo, and Realme phones:
		</p>
		<ol class="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
			<li>
				<strong class="text-foreground">1. Allow Alarms &amp; Reminders permission:</strong> On
				Android 12+, confirm the app is allowed to schedule exact alarms in App Info.
			</li>
			<li>
				<strong class="text-foreground">2. Set Battery usage to Unrestricted:</strong> Open
				<em>App Info → Battery</em> and choose <em>Unrestricted</em> (or disable battery
				optimization) so Android Doze mode does not delay morning alarms.
			</li>
			<li>
				<strong class="text-foreground">3. Check Do Not Disturb exceptions:</strong> Make sure
				alarms are allowed to bypass Do Not Disturb overnight.
			</li>
			<li>
				<strong class="text-foreground">4. Verify Alarm volume:</strong> Android separates media,
				ring, and alarm volume—keep the alarm slider high (or enable force-loud volume in
				Clock-It).
			</li>
		</ol>
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

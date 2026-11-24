<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
	import { LAST_UPDATED, SEO_PAGES, SITE_URL, jsonLdScript } from '$lib/seo';

	const PATH = '/guides';
	const CANONICAL = `${SITE_URL}${PATH}`;
	const UTM_CAMPAIGN = 'seo_guides_hub';
	const TITLE = 'Guides, Comparisons & Tools — Repeat Alarm: Clock-It';
	const DESCRIPTION =
		'Practical Android alarm guides, honest comparisons with Alarmy and Repeat Alarm, and an interactive interval alarm calculator for Repeat Alarm: Clock-It.';

	const comparisons = SEO_PAGES.filter((p) => p.category === 'Comparison');
	const guides = SEO_PAGES.filter((p) => p.category === 'Guide');
	const tools = SEO_PAGES.filter((p) => p.category === 'Tool');

	const schema = jsonLdScript({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'CollectionPage',
				name: TITLE,
				description: DESCRIPTION,
				url: CANONICAL,
				dateModified: LAST_UPDATED,
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
					{ '@type': 'ListItem', position: 2, name: 'Guides', item: CANONICAL }
				]
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

<div
	class="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-[#c2d2ff] selection:text-[#182246]"
>
	<SiteHeader activePath={PATH} utmCampaign={UTM_CAMPAIGN} />

	<main class="relative pb-20 pt-10 sm:pb-24 sm:pt-14">
		<!-- Subtle ambient periwinkle studio halo matching homepage -->
		<div
			class="pointer-events-none absolute top-0 left-1/2 -z-10 h-64 w-[92%] max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c2d2ff]/25 via-[#dfc4f7]/10 to-transparent blur-2xl"
			aria-hidden="true"
		></div>

		<div class="mx-auto max-w-5xl px-4 sm:px-8">
			<nav
				aria-label="Breadcrumb"
				class="mb-6 flex items-center gap-2 text-xs font-medium text-muted-foreground"
			>
				<a href="/" class="transition hover:text-foreground">Home</a>
				<span aria-hidden="true">›</span>
				<span class="text-foreground">Guides &amp; Comparisons</span>
			</nav>

			<header class="max-w-2xl pb-10 sm:pb-12">
				<p class="mb-3 text-sm font-semibold tracking-tight text-primary">
					Repeat Alarm: Clock-It
				</p>
				<h1 class="text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-5xl leading-[1.08]">
					Guides, comparisons &amp; tools
				</h1>
				<p class="mt-4 text-base leading-relaxed text-muted-foreground sm:text-xl">
					Honest app comparisons, practical Android interval-alarm setups for heavy sleepers, and
					an interactive schedule calculator.
				</p>
			</header>

			<div class="space-y-12">
				<!-- Comparisons -->
				<section aria-label="App comparisons">
					<h2 class="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
						App comparisons
					</h2>
					<div class="grid gap-5 sm:grid-cols-2">
						{#each comparisons as item}
							<a
								href={item.href}
								class="apple-card flex flex-col justify-between rounded-[28px] bg-surface/75 p-6 transition hover:bg-surface sm:p-7"
							>
								<div>
									<span class="text-xs font-semibold uppercase tracking-wider text-primary">
										{item.category}
									</span>
									<h3 class="mt-2 text-xl font-bold tracking-tight text-foreground">
										{item.title}
									</h3>
									<p class="mt-2 text-[15px] leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</div>
								<span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
									Read comparison <span aria-hidden="true">›</span>
								</span>
							</a>
						{/each}
					</div>
				</section>

				<!-- Android Guides -->
				<section aria-label="Android alarm guides">
					<h2 class="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
						Android alarm guides
					</h2>
					<div class="grid gap-5 sm:grid-cols-2">
						{#each guides as item}
							<a
								href={item.href}
								class="apple-card flex flex-col justify-between rounded-[28px] bg-surface/75 p-6 transition hover:bg-surface sm:p-7"
							>
								<div>
									<span class="text-xs font-semibold uppercase tracking-wider text-primary">
										{item.category}
									</span>
									<h3 class="mt-2 text-xl font-bold tracking-tight text-foreground">
										{item.title}
									</h3>
									<p class="mt-2 text-[15px] leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</div>
								<span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
									Read guide <span aria-hidden="true">›</span>
								</span>
							</a>
						{/each}
					</div>
				</section>

				<!-- Tools -->
				<section aria-label="Interactive tools">
					<h2 class="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
						Interactive tools
					</h2>
					<div class="grid gap-5">
						{#each tools as item}
							<a
								href={item.href}
								class="apple-card flex flex-col justify-between rounded-[28px] border border-[#c2d2ff] bg-[#f8f8fe] p-6 transition sm:flex-row sm:items-center sm:p-8"
							>
								<div class="max-w-xl">
									<span class="text-xs font-semibold uppercase tracking-wider text-primary">
										{item.category}
									</span>
									<h3 class="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
										{item.title}
									</h3>
									<p class="mt-2 text-[15px] leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</div>
								<span class="mt-5 inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:mt-0">
									Open calculator <span aria-hidden="true">›</span>
								</span>
							</a>
						{/each}
					</div>
				</section>

				<!-- Bottom CTA -->
				<section class="pt-2">
					<div
						class="flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[#161619] px-6 py-9 text-white sm:flex-row sm:px-10"
					>
						<div class="flex items-center gap-4">
							<img
								src="/clock-it-icon.png"
								alt="Repeat Alarm: Clock-It"
								class="h-14 w-14 shrink-0 rounded-[14px]"
								width="56"
								height="56"
							/>
							<div>
								<h2 class="text-xl font-bold tracking-tight sm:text-2xl">
									Repeat Alarm: Clock-It
								</h2>
								<p class="mt-1 text-sm text-white/75">
									Ad-free interval alarms for Android. One setup, every alarm in between.
								</p>
							</div>
						</div>
						<PlayStoreButton
							campaign={UTM_CAMPAIGN}
							content="guides_hub_cta"
							size="md"
							fullWidthMobile={true}
						/>
					</div>
				</section>
			</div>
		</div>
	</main>

	<SiteFooter utmCampaign={UTM_CAMPAIGN} />
</div>

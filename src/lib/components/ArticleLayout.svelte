<script lang="ts">
	import type { Snippet } from 'svelte';
	import { LAST_UPDATED_LABEL, SEO_PAGES } from '$lib/seo';
	import SiteHeader from './SiteHeader.svelte';
	import SiteFooter from './SiteFooter.svelte';
	import PlayStoreButton from './PlayStoreButton.svelte';

	interface Props {
		currentPath: string;
		category: string;
		title: string;
		subtitle: string;
		utmCampaign: string;
		updatedLabel?: string;
		children: Snippet;
	}

	let {
		currentPath,
		category,
		title,
		subtitle,
		utmCampaign,
		updatedLabel = LAST_UPDATED_LABEL,
		children
	}: Props = $props();

	const currentMeta = $derived(SEO_PAGES.find((page) => page.href === currentPath));
	const relatedPages = $derived(SEO_PAGES.filter((page) => page.href !== currentPath));
</script>

<div
	class="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-[#c2d2ff] selection:text-[#182246]"
>
	<SiteHeader activePath={currentPath} {utmCampaign} />

	<main class="relative pb-20 pt-8 sm:pb-24 sm:pt-12">
		<!-- Subtle ambient periwinkle studio halo matching homepage -->
		<div
			class="pointer-events-none absolute top-0 left-1/2 -z-10 h-64 w-[92%] max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c2d2ff]/25 via-[#dfc4f7]/10 to-transparent blur-2xl"
			aria-hidden="true"
		></div>

		<article class="mx-auto max-w-4xl px-4 sm:px-8">
			<!-- Breadcrumb -->
			<nav aria-label="Breadcrumb" class="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
				<a href="/" class="transition hover:text-foreground">Home</a>
				<span aria-hidden="true">›</span>
				<a href="/guides" class="transition hover:text-foreground">Guides</a>
				<span aria-hidden="true">›</span>
				<span class="text-foreground">{currentMeta?.shortTitle ?? title}</span>
			</nav>

			<!-- Article Header -->
			<header class="mb-10 border-b border-border/80 pb-8 sm:mb-12 sm:pb-10">
				<span
					class="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-surface/80 px-3 py-1 text-xs font-semibold text-primary"
				>
					{category}
				</span>

				<h1
					class="text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-5xl leading-[1.1] text-balance"
				>
					{title}
				</h1>

				<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl text-pretty">
					{subtitle}
				</p>

				<div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
					<span>By Monish Sharma</span>
					<span class="text-black/20">·</span>
					<span>Updated {updatedLabel}</span>
					<span class="text-black/20">·</span>
					<span>Android · Ad-free</span>
				</div>
			</header>

			<!-- Article Body -->
			<div class="space-y-12 sm:space-y-14">
				{@render children()}
			</div>

			<!-- Closing CTA Card -->
			<section class="mt-14 sm:mt-16" aria-label="Download Repeat Alarm: Clock-It">
				<div
					class="flex flex-col items-center rounded-[28px] bg-surface px-5 py-9 text-center sm:rounded-[32px] sm:px-10 sm:py-14"
				>
					<img
						src="/clock-it-icon.png"
						alt="Repeat Alarm: Clock-It"
						class="mb-5 h-14 w-14 rounded-[14px] shadow-[0_14px_30px_-10px_rgba(17,17,20,0.28)] ring-1 ring-black/10 sm:h-16 sm:w-16 sm:rounded-[16px]"
						width="64"
						height="64"
					/>
					<h2 class="text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
						One setup. Every alarm in between.
					</h2>
					<p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
						Try Repeat Alarm: Clock-It free on Android—ad-free, Material 3 light &amp; dark themes,
						and one clean toggle per window.
					</p>
					<div class="mt-7 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
						<PlayStoreButton
							campaign={utmCampaign}
							content="article_closing_cta"
							fullWidthMobile={true}
						/>
						<a
							href="/tools/interval-alarm-calculator"
							class="inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-primary-hover"
						>
							<span>Preview your schedule</span>
							<span aria-hidden="true">›</span>
						</a>
					</div>
				</div>
			</section>

			<!-- Related Guides & Comparisons -->
			<section
				class="mt-14 rounded-[28px] bg-surface/65 p-5 sm:mt-16 sm:p-8"
				aria-label="More guides and tools"
			>
				<div class="mb-6 flex items-baseline justify-between gap-4">
					<h2 class="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
						More guides &amp; tools
					</h2>
					<a
						href="/guides"
						class="shrink-0 text-sm font-medium text-primary transition hover:text-primary-hover"
					>
						All guides ›
					</a>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					{#each relatedPages as page}
						<a
							href={page.href}
							class="apple-card flex flex-col justify-between rounded-[24px] bg-white p-5 sm:p-6"
						>
							<div>
								<span class="text-[11px] font-semibold uppercase tracking-wider text-primary">
									{page.category}
								</span>
								<h3 class="mt-1.5 text-base font-bold tracking-tight text-foreground">
									{page.title}
								</h3>
								<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
									{page.description}
								</p>
							</div>
							<span class="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
								Read more <span aria-hidden="true">›</span>
							</span>
						</a>
					{/each}
				</div>
			</section>
		</article>
	</main>

	<SiteFooter {utmCampaign} />
</div>

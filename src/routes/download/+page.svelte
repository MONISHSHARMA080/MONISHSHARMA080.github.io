<script lang="ts">
	import { onMount } from 'svelte';
	import { DOWNLOAD_REDIRECT_PATH, SITE_URL, playStoreUrl } from '$lib/seo';

	const CANONICAL = `${SITE_URL}${DOWNLOAD_REDIRECT_PATH}`;
	const DEFAULT_TARGET_URL = playStoreUrl('download_redirect', 'direct_download', {
		source: 'personal_website',
		medium: 'redirect'
	});
	const NOSCRIPT_TARGET_URL = playStoreUrl('download_noscript', 'direct_download', {
		source: 'personal_website',
		medium: 'redirect'
	});

	let targetUrl = $state(DEFAULT_TARGET_URL);

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const source = params.get('source')?.trim() || 'personal_website';
		const medium = params.get('medium')?.trim() || 'redirect';
		const campaign = params.get('campaign')?.trim() || 'direct_download';
		const content = params.get('content')?.trim() || 'download_redirect';

		const resolved = playStoreUrl(content, campaign, { source, medium });
		targetUrl = resolved;
		window.location.replace(resolved);
	});
</script>

<svelte:head>
	<title>Download Repeat Alarm: Clock-It on Google Play</title>
	<meta name="robots" content="noindex, nofollow" />
	<link rel="canonical" href={CANONICAL} />
	<noscript>
		<meta http-equiv="refresh" content={`0;url=${NOSCRIPT_TARGET_URL}`} />
	</noscript>
</svelte:head>

<div
	class="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip bg-background px-5 py-12 text-foreground selection:bg-[#c2d2ff] selection:text-[#182246]"
>
	<!-- Subtle ambient periwinkle studio halo -->
	<div
		class="pointer-events-none absolute top-0 left-1/2 -z-10 h-72 w-[90%] max-w-2xl -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c2d2ff]/35 via-[#dfc4f7]/15 to-transparent blur-3xl"
		aria-hidden="true"
	></div>

	<main class="w-full max-w-md rounded-[28px] border border-black/[0.06] bg-surface/75 p-7 text-center shadow-[0_24px_60px_-24px_rgba(17,17,20,0.14)] sm:p-9">
		<img
			src="/clock-it-icon.png"
			alt="Repeat Alarm: Clock-It"
			class="mx-auto mb-5 h-16 w-16 rounded-[16px] shadow-[0_14px_30px_-10px_rgba(17,17,20,0.28)] ring-1 ring-black/10"
			width="64"
			height="64"
		/>

		<p class="text-xs font-semibold uppercase tracking-wider text-primary">
			Repeat Alarm: Clock-It
		</p>
		<h1 class="mt-2 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
			Redirecting to Google Play…
		</h1>
		<p class="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
			Opening the official Android listing for Repeat Alarm: Clock-It. If you are not
			redirected automatically, use the button below.
		</p>

		<div class="mt-7 flex flex-col items-center gap-3">
			<a
				href={targetUrl}
				rel="noopener noreferrer"
				class="inline-flex h-[52px] w-full items-center justify-center gap-3 whitespace-nowrap rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_rgba(37,83,232,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_32px_-10px_rgba(37,83,232,0.75)] active:translate-y-0"
			>
				<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M3.61 1.814L13.793 12 3.61 22.186a1.83 1.83 0 0 1-.41-1.158V2.972c0-.436.153-.84.41-1.158zm11.27 11.271l2.803 2.803-11.2 6.38c-.44.25-.945.323-1.404.222l9.801-9.405zm3.947-2.25l2.313 1.318c.84.478.84 1.69 0 2.168l-2.313 1.318-2.99-2.402 2.99-2.402zM5.079 1.51c.46-.101.964-.028 1.404.222l11.2 6.38-2.803 2.803-9.801-9.405z"
					/>
				</svg>
				<span>Open Google Play</span>
			</a>

			<a
				href="/"
				class="mt-1 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground"
			>
				<span aria-hidden="true">‹</span>
				<span>Back to Monish Sharma</span>
			</a>
		</div>
	</main>
</div>

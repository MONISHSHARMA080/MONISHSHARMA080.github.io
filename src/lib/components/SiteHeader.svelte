<script lang="ts">
	import { playStoreUrl } from '$lib/seo';

	interface Props {
		activePath?: string;
		utmCampaign?: string;
	}

	let { activePath = '/', utmCampaign = 'clock_it_landing' }: Props = $props();
	let mobileMenuOpen = $state(false);

	const isGuidesActive = $derived(
		activePath.startsWith('/guides') || activePath.startsWith('/alternatives')
	);
	const isCalculatorActive = $derived(activePath === '/tools/interval-alarm-calculator');

	const navLinks = [
		{ label: 'Clock-It', href: '/#clock-it', active: false },
		{ label: 'How it works', href: '/#how-it-works', active: false },
		{ label: 'Features', href: '/#features', active: false },
		{ label: 'Guides', href: '/guides', key: 'guides' },
		{ label: 'Calculator', href: '/tools/interval-alarm-calculator', key: 'calculator' },
		{ label: 'Projects', href: '/#projects', active: false }
	] as const;

	function linkActive(key?: string): boolean {
		if (key === 'guides') return isGuidesActive;
		if (key === 'calculator') return isCalculatorActive;
		return false;
	}
</script>

<header class="sticky top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
	<nav
		class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8"
		aria-label="Primary"
	>
		<a
			href="/"
			class="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold tracking-tight text-foreground"
		>
			<img
				src="/clock-it-icon.png"
				alt="Clock-It"
				class="h-7 w-7 shrink-0 rounded-[7px] ring-1 ring-black/10"
				width="28"
				height="28"
			/>
			<span>Monish Sharma</span>
		</a>

		<div class="hidden items-center text-[14px] font-medium text-muted-foreground md:flex md:gap-4 lg:gap-7">
			{#each navLinks as link}
				<a
					href={link.href}
					class="shrink-0 whitespace-nowrap transition-colors hover:text-foreground {linkActive(
						'key' in link ? link.key : undefined
					)
						? 'font-semibold text-foreground'
						: ''}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="flex shrink-0 items-center gap-2">
			<a
				href={playStoreUrl('nav_cta', utmCampaign)}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-primary px-3.5 text-[12px] font-semibold text-primary-foreground transition hover:bg-primary-hover active:scale-[0.98] md:h-9 md:px-4 md:text-[13px]"
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
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					>
						<path d="M6 6l12 12M18 6 6 18" />
					</svg>
				{:else}
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					>
						<path d="M4 8h16M4 16h16" />
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<div class="border-t border-black/[0.06] bg-white px-5 pb-5 pt-3 md:hidden">
			<div class="flex flex-col space-y-1 text-[15px] font-medium">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={() => (mobileMenuOpen = false)}
						class="rounded-xl px-3 py-2.5 text-foreground hover:bg-surface {linkActive(
							'key' in link ? link.key : undefined
						)
							? 'bg-surface/80 font-semibold'
							: ''}"
					>
						{link.label}
					</a>
				{/each}
				<a
					href={playStoreUrl('mobile_menu_cta', utmCampaign)}
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

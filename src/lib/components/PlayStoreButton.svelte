<script lang="ts">
	import { playStoreUrl } from '$lib/seo';

	interface Props {
		campaign?: string;
		content: string;
		label?: string;
		size?: 'sm' | 'md' | 'lg';
		fullWidthMobile?: boolean;
		className?: string;
	}

	let {
		campaign = 'clock_it_landing',
		content,
		label = 'Download on Google Play',
		size = 'lg',
		fullWidthMobile = false,
		className = ''
	}: Props = $props();

	const sizeClasses = {
		sm: 'h-9 px-4 text-[13px] gap-2',
		md: 'h-11 px-5 text-sm gap-2.5',
		lg: 'h-[52px] px-7 text-[15px] gap-3 shadow-[0_10px_28px_-10px_rgba(37,83,232,0.65)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(37,83,232,0.75)] active:translate-y-0 sm:h-[54px]'
	} as const;
</script>

<a
	href={playStoreUrl(content, campaign)}
	target="_blank"
	rel="noopener noreferrer"
	class="group inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover active:scale-[0.98] {fullWidthMobile
		? 'w-full sm:w-auto'
		: ''} {sizeClasses[size]} {className}"
>
	<svg
		class={size === 'sm' ? 'h-4 w-4 shrink-0' : 'h-5 w-5 shrink-0'}
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			d="M3.61 1.814L13.793 12 3.61 22.186a1.83 1.83 0 0 1-.41-1.158V2.972c0-.436.153-.84.41-1.158zm11.27 11.271l2.803 2.803-11.2 6.38c-.44.25-.945.323-1.404.222l9.801-9.405zm3.947-2.25l2.313 1.318c.84.478.84 1.69 0 2.168l-2.313 1.318-2.99-2.402 2.99-2.402zM5.079 1.51c.46-.101.964-.028 1.404.222l11.2 6.38-2.803 2.803-9.801-9.405z"
		/>
	</svg>
	<span>{label}</span>
</a>

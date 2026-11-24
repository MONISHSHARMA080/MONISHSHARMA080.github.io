<script lang="ts">
	import { GITHUB_PROFILE_URL, playStoreUrl } from '$lib/seo';

	interface Props {
		utmCampaign?: string;
	}

	let { utmCampaign = 'clock_it_landing' }: Props = $props();
</script>

<footer class="border-t border-border/80 bg-white">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground md:flex-row sm:px-8"
	>
		<p>© {new Date().getFullYear()} Monish Sharma</p>
		<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
			<a
				href={playStoreUrl('footer_link', utmCampaign)}
				target="_blank"
				rel="noopener noreferrer"
				class="transition hover:text-foreground"
			>
				Clock-It on Google Play
			</a>
			<a href="/guides" class="transition hover:text-foreground">Guides</a>
			<a href="/alternatives/alarmy" class="transition hover:text-foreground">Alarmy Alternative</a>
			<a href="/alternatives/repeat-alarm" class="transition hover:text-foreground">
				Repeat Alarm Alternative
			</a>
			<a href="/tools/interval-alarm-calculator" class="transition hover:text-foreground">
				Interval Calculator
			</a>
			<a
				href={GITHUB_PROFILE_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="transition hover:text-foreground"
			>
				GitHub
			</a>
			<a href="/multipleAlarmPrivacyPolicy" class="transition hover:text-foreground">
				Privacy Policy
			</a>
		</div>
	</div>
</footer>

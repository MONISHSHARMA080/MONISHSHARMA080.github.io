export const SITE_URL = 'https://monishsharma080.github.io';
export const PLAY_STORE_BASE_URL =
	'https://play.google.com/store/apps/details?id=com.coolApps.MultipleAlarmClock';
export const GITHUB_PROFILE_URL = 'https://github.com/MONISHSHARMA080';
export const ZIG_REPO_URL = 'https://github.com/monishsharma080/zig-concurrency';
export const AUTHOR_NAME = 'Monish Sharma';
export const APP_NAME = 'Repeat Alarm: Clock-It';
export const DOWNLOAD_REDIRECT_PATH = '/download';
export const LAST_UPDATED = '2026-11-24';
export const LAST_UPDATED_LABEL = 'Nov 24, 2026';

export interface SeoPageMeta {
	href: string;
	category: 'Comparison' | 'Guide' | 'Tool';
	title: string;
	shortTitle: string;
	description: string;
	utmCampaign: string;
}

export const SEO_PAGES: readonly SeoPageMeta[] = [
	{
		href: '/alternatives/alarmy',
		category: 'Comparison',
		title: 'Alarmy Alternative for Android',
		shortTitle: 'Alarmy Alternative',
		description:
			'Compare Repeat Alarm: Clock-It vs Alarmy—ad-free interval alarms instead of missions, paywalls, and clutter.',
		utmCampaign: 'seo_alarmy_alternative'
	},
	{
		href: '/alternatives/repeat-alarm',
		category: 'Comparison',
		title: 'Repeat Alarm Alternative for Android',
		shortTitle: 'Repeat Alarm Alternative',
		description:
			'Schedule an entire start-to-end interval alarm sequence from one setup with Material 3 light & dark themes.',
		utmCampaign: 'seo_repeat_alarm_alternative'
	},
	{
		href: '/guides/set-multiple-alarms-android',
		category: 'Guide',
		title: 'How to Set Multiple Alarms Automatically on Android',
		shortTitle: 'Set Multiple Alarms Automatically',
		description:
			'Three practical ways to schedule alarms every 5, 10, or 15 minutes on Android without creating 20 alarms by hand.',
		utmCampaign: 'seo_multiple_alarms_guide'
	},
	{
		href: '/guides/alarm-for-heavy-sleepers-android',
		category: 'Guide',
		title: 'Alarm Setup for Heavy Sleepers & ADHD on Android',
		shortTitle: 'Heavy Sleepers & ADHD Setup',
		description:
			'Use tight interval windows, random ringtones, and force-loud volume so there is no quiet gap to fall back asleep.',
		utmCampaign: 'seo_heavy_sleeper_guide'
	},
	{
		href: '/tools/interval-alarm-calculator',
		category: 'Tool',
		title: 'Repeat Alarm Interval Calculator',
		shortTitle: 'Interval Alarm Calculator',
		description:
			'Pick a start time, end time, and repeat interval to preview every exact alarm ring time in your schedule.',
		utmCampaign: 'seo_interval_calculator'
	}
] as const;

export interface PlayStoreUrlOptions {
	source?: string;
	medium?: string;
}

/**
 * Builds a Google Play Store campaign URL using the official `referrer` parameter
 * so installs show up under Google Play Console -> Store performance / UTM campaigns.
 */
export function playStoreUrl(
	content: string,
	campaign = 'clock_it_landing',
	options: PlayStoreUrlOptions = {}
): string {
	const utmParams = new URLSearchParams({
		utm_source: options.source || 'personal_website',
		utm_medium: options.medium || 'website',
		utm_campaign: campaign,
		utm_content: content
	}).toString();
	return `${PLAY_STORE_BASE_URL}&referrer=${encodeURIComponent(utmParams)}`;
}

/**
 * Serializes a JSON-LD object safely for injection into `<svelte:head>`.
 */
export function jsonLdScript(data: Record<string, unknown>): string {
	const json = JSON.stringify(data).replace(/</g, '\\u003c');
	return `<script type="application/ld+json">${json}<\/script>`;
}

/**
 * Reusable SoftwareApplication schema node for Repeat Alarm: Clock-It.
 */
export function clockItSoftwareSchema(): Record<string, unknown> {
	return {
		'@type': 'SoftwareApplication',
		name: APP_NAME,
		alternateName: 'Multiple Alarm Clock',
		operatingSystem: 'Android',
		applicationCategory: 'UtilitiesApplication',
		description:
			'Create a full sequence of repeating interval alarms from one setup. Pick a start time, end time, and repeat interval (1, 2, 5, 10, 15, or 30 minutes) for heavy sleepers, ADHD routines, study sprints, and medication reminders.',
		url: SITE_URL,
		downloadUrl: PLAY_STORE_BASE_URL,
		installUrl: PLAY_STORE_BASE_URL,
		image: `${SITE_URL}/clock-it-icon.png`,
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		author: {
			'@type': 'Person',
			name: AUTHOR_NAME,
			url: SITE_URL
		}
	};
}

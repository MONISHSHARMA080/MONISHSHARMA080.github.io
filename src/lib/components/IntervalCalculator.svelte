<script lang="ts">
	import PlayStoreButton from './PlayStoreButton.svelte';

	interface Props {
		utmCampaign?: string;
		compact?: boolean;
	}

	let { utmCampaign = 'seo_interval_calculator', compact = false }: Props = $props();

	const presets = [
		{ name: 'Heavy sleeper', start: '06:00', end: '07:00', interval: 5 },
		{ name: 'Pomodoro study', start: '09:00', end: '12:00', interval: 25 },
		{ name: 'Hydration', start: '08:00', end: '20:00', interval: 60 },
		{ name: 'Early flight', start: '04:00', end: '05:00', interval: 10 }
	] as const;

	const quickIntervals = [1, 2, 5, 10, 15, 30, 60] as const;

	let startTime = $state('06:00');
	let endTime = $state('07:00');
	let intervalMinutes = $state(5);
	let showAll = $state(false);

	function parseMinutes(hhmm: string): number {
		const [hStr, mStr] = hhmm.split(':');
		const h = Number(hStr);
		const m = Number(mStr);
		if (Number.isNaN(h) || Number.isNaN(m)) return 0;
		return h * 60 + m;
	}

	function formatTime12h(totalMinutes: number): { label: string; nextDay: boolean } {
		const nextDay = totalMinutes >= 1440;
		const normalized = ((totalMinutes % 1440) + 1440) % 1440;
		const hours24 = Math.floor(normalized / 60);
		const minutes = normalized % 60;
		const period = hours24 >= 12 ? 'PM' : 'AM';
		const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
		const paddedMinutes = minutes.toString().padStart(2, '0');
		return {
			label: `${hours12}:${paddedMinutes} ${period}`,
			nextDay
		};
	}

	function clampInterval(value: number): number {
		if (!Number.isFinite(value) || value < 1) return 1;
		if (value > 240) return 240;
		return Math.round(value);
	}

	function applyPreset(preset: (typeof presets)[number]) {
		startTime = preset.start;
		endTime = preset.end;
		intervalMinutes = preset.interval;
		showAll = false;
	}

	const safeInterval = $derived(clampInterval(intervalMinutes));

	const schedule = $derived.by(() => {
		const startMin = parseMinutes(startTime);
		let endMin = parseMinutes(endTime);
		const wrapsOvernight = endMin < startMin;
		if (wrapsOvernight) {
			endMin += 1440;
		}

		const times: { label: string; nextDay: boolean }[] = [];
		const maxSafetyCount = 720;
		for (let t = startMin; t <= endMin && times.length < maxSafetyCount; t += safeInterval) {
			times.push(formatTime12h(t));
		}

		return {
			times,
			wrapsOvernight,
			spanMinutes: endMin - startMin
		};
	});

	const visibleTimes = $derived(showAll ? schedule.times : schedule.times.slice(0, 18));
	const hiddenCount = $derived(Math.max(0, schedule.times.length - visibleTimes.length));

	const spanLabel = $derived.by(() => {
		const hours = Math.floor(schedule.spanMinutes / 60);
		const mins = schedule.spanMinutes % 60;
		if (hours === 0) return `${mins}m window`;
		if (mins === 0) return `${hours}h window`;
		return `${hours}h ${mins}m window`;
	});
</script>

<section
	class="rounded-[28px] border border-black/[0.06] bg-surface/70 {compact
		? 'p-5 sm:p-7'
		: 'p-6 sm:p-9'}"
	aria-label="Repeat alarm interval calculator"
>
	<div class="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
		<div>
			<p class="text-xs font-semibold uppercase tracking-wider text-primary">
				Interactive schedule preview
			</p>
			<h2 class="mt-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
				Preview your repeating alarm sequence
			</h2>
		</div>

		<div class="flex flex-wrap gap-1.5" role="group" aria-label="Quick presets">
			{#each presets as preset}
				{@const active =
					startTime === preset.start &&
					endTime === preset.end &&
					safeInterval === preset.interval}
				<button
					type="button"
					onclick={() => applyPreset(preset)}
					class="cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition {active
						? 'bg-foreground text-white'
						: 'bg-white text-foreground/80 ring-1 ring-black/[0.08] hover:bg-white/80 hover:text-foreground'}"
				>
					{preset.name}
				</button>
			{/each}
		</div>
	</div>

	<!-- Controls -->
	<div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
		<label class="flex min-w-0 flex-col gap-1.5 rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.06] sm:p-4">
			<span class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
				Start time
			</span>
			<input
				type="time"
				bind:value={startTime}
				class="tabular-nums w-full min-w-0 bg-transparent text-base font-bold text-foreground outline-none sm:text-lg"
			/>
		</label>

		<label class="flex min-w-0 flex-col gap-1.5 rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.06] sm:p-4">
			<span class="flex items-center justify-between gap-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
				<span>End time</span>
				{#if schedule.wrapsOvernight}
					<span class="rounded-full bg-[#c2d2ff]/60 px-1.5 py-0.5 text-[10px] font-semibold text-[#1e2b5c]">
						+1d
					</span>
				{/if}
			</span>
			<input
				type="time"
				bind:value={endTime}
				class="tabular-nums w-full min-w-0 bg-transparent text-base font-bold text-foreground outline-none sm:text-lg"
			/>
		</label>

		<div class="col-span-2 flex min-w-0 flex-col justify-between gap-2 rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.06] sm:col-span-1 sm:p-4">
			<span class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
				Repeat every
			</span>
			<div class="inline-flex w-full items-center justify-between gap-1 rounded-full bg-[#c2d2ff]/55 px-1.5 py-1 text-[#1e2b5c]">
				<button
					type="button"
					aria-label="Decrease interval by 1 minute"
					onclick={() => {
						intervalMinutes = clampInterval(safeInterval - 1);
						showAll = false;
					}}
					class="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-base font-semibold transition hover:bg-white/60 active:scale-95"
				>
					−
				</button>
				<div class="flex min-w-0 items-baseline justify-center gap-1">
					<input
						type="number"
						aria-label="Repeat interval in minutes"
						min="1"
						max="240"
						value={intervalMinutes}
						oninput={(e) => {
							const parsed = Number((e.currentTarget as HTMLInputElement).value);
							if (!Number.isNaN(parsed)) {
								intervalMinutes = clampInterval(parsed);
							}
						}}
						class="tabular-nums w-11 bg-transparent text-center text-base font-bold text-[#1e2b5c] outline-none sm:text-lg"
					/>
					<span class="text-xs font-semibold text-[#1e2b5c]/80">min</span>
				</div>
				<button
					type="button"
					aria-label="Increase interval by 1 minute"
					onclick={() => {
						intervalMinutes = clampInterval(safeInterval + 1);
						showAll = false;
					}}
					class="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-base font-semibold transition hover:bg-white/60 active:scale-95"
				>
					+
				</button>
			</div>
		</div>
	</div>

	<!-- Quick Interval Pills -->
	<div class="mt-4 flex flex-wrap items-center gap-2">
		<span class="mr-1 text-xs font-medium text-muted-foreground">Quick interval:</span>
		{#each quickIntervals as mins}
			<button
				type="button"
				onclick={() => {
					intervalMinutes = mins;
					showAll = false;
				}}
				class="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold tabular-nums transition {safeInterval ===
				mins
					? 'bg-primary text-primary-foreground'
					: 'bg-white text-foreground/80 ring-1 ring-black/[0.07] hover:text-foreground'}"
			>
				{mins} min
			</button>
		{/each}
	</div>

	<!-- Output Preview -->
	<div class="mt-6 rounded-2xl bg-white p-5 ring-1 ring-black/[0.06] sm:p-6">
		<div class="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
			<div>
				<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
					Alarms will ring at
				</p>
				<p class="mt-1 text-lg font-bold tracking-tight text-foreground tabular-nums sm:text-xl">
					{formatTime12h(parseMinutes(startTime)).label} →{' '}
					{formatTime12h(
						parseMinutes(endTime) + (schedule.wrapsOvernight ? 1440 : 0)
					).label}
				</p>
			</div>

			<div class="flex items-center gap-2">
				<span class="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground tabular-nums">
					{spanLabel}
				</span>
				<span class="rounded-full bg-[#c2d2ff]/60 px-3 py-1 text-xs font-bold text-[#1e2b5c] tabular-nums">
					{schedule.times.length} {schedule.times.length === 1 ? 'alarm' : 'alarms'}
				</span>
			</div>
		</div>

		<ul class="mt-4 flex flex-wrap gap-2" aria-label="Generated alarm times">
			{#each visibleTimes as item}
				<li
					class="inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-semibold text-foreground tabular-nums ring-1 ring-black/[0.04]"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
					<span>{item.label}</span>
					{#if item.nextDay}
						<span class="text-[10px] font-medium text-muted-foreground">+1d</span>
					{/if}
				</li>
			{/each}
		</ul>

		{#if hiddenCount > 0}
			<button
				type="button"
				onclick={() => (showAll = true)}
				class="mt-4 cursor-pointer text-xs font-semibold text-primary transition hover:text-primary-hover"
			>
				Show {hiddenCount} more {hiddenCount === 1 ? 'alarm' : 'alarms'} ›
			</button>
		{:else if schedule.times.length > 18 && showAll}
			<button
				type="button"
				onclick={() => (showAll = false)}
				class="mt-4 cursor-pointer text-xs font-semibold text-muted-foreground transition hover:text-foreground"
			>
				Show fewer
			</button>
		{/if}

		<!-- Honest Callout + CTA -->
		<div class="mt-6 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-5 sm:flex-row sm:items-center">
			<p class="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
				Setting <strong class="font-semibold text-foreground">{schedule.times.length}</strong>{' '}
				{schedule.times.length === 1 ? 'alarm' : 'alarms'} manually means repeating your clock
				picker <strong class="font-semibold text-foreground">{schedule.times.length}</strong>{' '}
				{schedule.times.length === 1 ? 'time' : 'times'}. Repeat Alarm: Clock-It schedules the
				entire sequence from one setup on Android.
			</p>
			<PlayStoreButton
				campaign={utmCampaign}
				content="calculator_cta"
				label="Create on Android"
				size="md"
				fullWidthMobile={true}
			/>
		</div>
	</div>
</section>

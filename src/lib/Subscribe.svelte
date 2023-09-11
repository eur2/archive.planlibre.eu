<script>
	let visible;
	function handleToggle() {
		visible = !visible;
	}
</script>

<footer>
	<div class="bc fixed b0 l0 r0 z200 flex">
		<a
			class="p251251 flex1 center {visible ? 'none' : ''}"
			style="background-color:black;color:fuchsia;"
			rel="noreferrer"
			target="_blank"
			href="https://maop.fr/publications/plan-libre-anatomie-d-un-journal-d-architecture"
			>+++<i>200 Plan Libre+++</i>, le livre</a
		>
		<button class="p251251 flex1 center {visible ? 'none' : ''}" on:click={handleToggle}>
			+++Abonnement à <i>Plan Libre</i> 25€+++
		</button>
		{#if visible}
			<div class="p">
				<div class="flex jc-sb">
					<span />
					<h3>+++Abonnement annuel/4 numéros/25€+++</h3>
					<button on:click={handleToggle}>×</button>
				</div>
				<slot />
				<div class="flex wrap jc-center">
					<a
						rel="noreferrer"
						target="_blank"
						href="https://maison-de-larchitecture-occitanie-pyrenees.sumup.link/abonnement-plan-libre-1an"
						class="btn"
					>
						S’abonner
					</a>
					<a rel="noreferrer" target="_blank" href="https://maop.fr/soutenir-la-maison" class="btn">
						Soutenir la maison
					</a>
				</div>
			</div>
		{/if}
	</div>
</footer>

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
			href="https://www.helloasso.com/associations/maison-de-l-architecture-occitanie-pyrenees/collectes/200-plan-libre-anatomie-d-un-journal-d-architecture-en-prevente 
		">+++Prévente <i>200 Plan Libre+++</i></a
		>
		<button class="p251251 flex1 center {visible ? 'none' : ''}" on:click={handleToggle}>
			+++Abonnement à <i>Plan Libre</i> 25€+++
		</button>
		{#if visible}
			<div class="p">
				<div class="flex jc-sb">
					<span />
					<h3>+++Abonnement annuel/10 numéros/25€+++</h3>
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

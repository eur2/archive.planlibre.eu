<script>
    let visible = $state();
    function handleToggle() {
        visible = !visible;
    }
</script>

<footer>
    <div class="bc b0 l0 r0 z200 fixed flex">
        <a
            class="p251251 flex1 center {visible ? 'none' : ''}"
            style="background-color:black;color:fuchsia;"
            rel="noreferrer"
            target="_blank"
            href="https://maop.fr/publications/plan-libre-anatomie-d-un-journal-d-architecture"
            >+++<i>200 Plan Libre+++</i>, le livre</a
        >
        <button
            class="p251251 flex1 center {visible ? 'none' : ''}"
            onclick={handleToggle}
        >
            +++Abonnement à <i>Plan Libre</i> 30€+++
        </button>
        {#if visible}
            <div class="p">
                <div class="jc-sb flex">
                    <span />
                    <h3>+++Abonnement annuel/4 numéros/30€+++</h3>
                    <button onclick={handleToggle}>×</button>
                </div>
                <slot />
                <div class="wrap jc-center flex">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://maison-de-larchitecture-occitanie-pyrenees.sumup.link/abonnement-plan-libre-1an"
                        class="btn"
                    >
                        S’abonner
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://maop.fr/soutenir-la-maison"
                        class="btn"
                    >
                        Soutenir la maison
                    </a>
                </div>
            </div>
        {/if}
    </div>
</footer>

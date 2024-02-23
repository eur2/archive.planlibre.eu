<script>
    let visible = $state(true);
    function handleToggle() {
        visible = !visible;
    }
</script>

<div
    class="pointer"
    onclick={handleToggle}
    onkeydown={handleToggle}
    role="button"
    tabindex="0"
>
    {#if visible}
        <div class="z100 t0 l0 r0 b0 jc-center ai-center column fixed flex">
            <div
                class="center bg-white"
                style="width: 800px;max-width: 100%;border:1px solid black;
			"
            >
                <i>Plan Libre</i> devient <i>Plan L****</i>
                <img
                    id="a1"
                    src="PL-new_maop-web.png"
                    width="800"
                    height="600"
                    alt="plan libre maop"
                />
                <!-- <img
						id="a2"
						class="hide"
						src="PL-new_maop_2-web.png"
						width="800"
						height="600"
						alt="plan libre maop"
					/> -->
            </div>
        </div>
    {/if}
</div>

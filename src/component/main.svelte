<script>
	import { miseState, chomiseState } from "../store/writableStore";

</script>

<main>
	
	<div class="card w-96 bg-base-100 shadow-xl">
		<div style="display: flex">
			<div class="card lg:card-side bg-base-100 shadow-xl">
                {#if $miseState == 1}
                    <figure><img src="images/verygood.png" alt="Album"></figure>
                  {/if}
                  {#if $miseState == 2}
                  <figure><img src="images/good.png" alt="Album"></figure>
                  {/if}
                  {#if $miseState == 3}
                  <figure><img src="images/bad.png" alt="Album"></figure>
                  {/if}
                  {#if $miseState == 4}
                  <figure><img src="images/verybad.png" alt="Album"></figure>
                  {/if}
				<div class="card-body">
				  <h2 class="card-title">미세먼지 </h2>
				  {#if $miseState == 1}
                  <p>좋음</p>
                  {/if}
                  {#if $miseState == 2}
                  <p>보통</p>
                  {/if}
                  {#if $miseState == 3}
                  <p>나쁨</p>
                  {/if}
                  {#if $miseState == 4}
                  <p>매우나쁨</p>
                  {/if}
				  <div class="card-actions justify-end">
				  </div>
				</div>
			  </div>
			  <div class="card lg:card-side bg-base-100 shadow-xl">
				{#if $chomiseState == 1}
                    <figure><img src="images/verygood.png" alt="Album"></figure>
                  {/if}
                  {#if $chomiseState == 2}
                  <figure><img src="images/good.png" alt="Album"></figure>
                  {/if}
                  {#if $chomiseState == 3}
                  <figure><img src="images/bad.png" alt="Album"></figure>
                  {/if}
                  {#if $chomiseState == 4}
                  <figure><img src="images/verybad.png" alt="Album"></figure>
                  {/if}
				<div class="card-body">
				  <h2 class="card-title">초미세먼지</h2>
                  {#if $chomiseState == 1}
                  <p>좋음</p>
                  {/if}
                  {#if $chomiseState == 2}
                  <p>보통</p>
                  {/if}
                  {#if $chomiseState == 3}
                  <p>나쁨</p>
                  {/if}
                  {#if $chomiseState == 4}
                  <p>매우나쁨</p>
                  {/if}
				  
				  <div class="card-actions justify-end">
				  </div>
				</div>
			  </div>
	  	</div>
	</div>

</main>

<style>

</style>
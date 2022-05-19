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
                  <progress class="progress progress-info w-56" value="15" max="100"></progress>
                  {/if}
                  {#if $miseState == 2}
                  <p>보통</p>
                  <progress class="progress progress-success w-56" value="30" max="100"></progress>
                  {/if}
                  {#if $miseState == 3}
                  <p>나쁨</p>
                  <progress class="progress progress-warning w-56" value="45" max="100"></progress>
                  {/if}
                  {#if $miseState == 4}
                  <p>매우나쁨</p>
                  <progress class="progress progress-error w-56" value="60" max="100"></progress>
                  {/if}
                  {#if $miseState == 5}
                  <p>현재 기상정보가 없습니다</p>
                  <progress class="progress progress-error w-56" value="0" max="100"></progress>
                  {/if}
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
                  <progress class="progress progress-info w-56" value="15" max="100"></progress>
                  {/if}
                  {#if $chomiseState == 2}
                  <p>보통</p>
                  <progress class="progress progress-success w-56" value="30" max="100"></progress>
                  {/if}
                  {#if $chomiseState == 3}
                  <p>나쁨</p>
                  <progress class="progress progress-warning w-56" value="45" max="100"></progress>
                  {/if}
                  {#if $chomiseState == 4}
                  <p>매우나쁨</p>
                  <progress class="progress progress-error w-56" value="60" max="100"></progress>
                  {/if}
                  {#if $chomiseState == 5}
                  <p>현재 기상정보가 없습니다.</p>
                  <progress class="progress progress-error w-56" value="0" max="100"></progress>
                  {/if}
				</div>
			  </div>
	  	</div>
	</div>

</main>

<style>

</style>
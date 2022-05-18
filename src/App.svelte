<script>
	import { miseState, chomiseState, success, loading } from "./store/writableStore.js";
	import Main from './component/main.svelte';
	import Errpage from './component/errpage.svelte';



const getHtml = async () => {
	try {
		//todo non-cors
		const data = await (await fetch("https://www.weather.go.kr/w/wnuri-fct2021/main/current-weather.do")).text();
		const index1 = data.indexOf(`<span class="air-lvt" style="color:#000;">`);
		const chomise = data[index1+42]+data[index1+43];
		if (chomise == "좋음") {
			chomiseState.update(()=>{return 1});
		} else if(chomise == "보통") {
			chomiseState.update(()=>{return 2});
		}

		const index2 = data.indexOf(`<span class="air-lvt" style="color:#000;">`,index1+1);
		const mise = data[index2+42]+data[index2+43];
		if (mise == "좋음") {
			miseState.update(()=>{return 1});
		} else if(mise == "보통") {
			miseState.update(()=>{return 2});
		}
		loading.update(()=>{return false});
		success.update(()=>{return true});
		
	} catch(error) {
		console.error(error);
	}
}

getHtml()



</script>

<main>
	{#if $loading}
	<button class="btn loading">loading</button>
	{/if}

	{#if $success}
	<Main/>
	{/if}

	{#if $success == false}
	<Errpage/>
	{/if}


</main>

<style>

</style>
<script>
	import { miseState, chomiseState, success, loading } from "./store/writableStore.js";
	import Main from './component/main.svelte';
	import Errpage from './component/errpage.svelte';



const getHtml = async () => {
	try {
		//todo Geolocation API + kakaomap api
		const data = await (await fetch("https://www.weather.go.kr/w/wnuri-fct2021/main/current-weather.do?code=1154551000")).text();
		const index1 = data.indexOf(`<span class="air-lvt" style="color:#000;">`);
		const chomise = data[index1+42]+data[index1+43];
		if (chomise == "좋음") {
			chomiseState.update(()=>{return 1});
		} else if(chomise == "보통") {
			chomiseState.update(()=>{return 2});
		} else if(chomise == "나쁨") {
			chomiseState.update(()=>{return 3});
		} else if(chomise == "매우") {
			chomiseState.update(()=>{return 4});
		} else if(chomise == "자료") {
			chomiseState.update(()=>{return 5});
		}

		const index2 = data.indexOf(`<span class="air-lvt" style="color:#000;">`,index1+1);
		const mise = data[index2+42]+data[index2+43];
		if (mise == "좋음") {
			miseState.update(()=>{return 1});
		} else if(mise == "보통") {
			miseState.update(()=>{return 2});
		} else if(mise == "나쁨") {
			miseState.update(()=>{return 3});
		} else if(mise == "매우") {
			miseState.update(()=>{return 4});
		} else if(mise == "자료") {
			miseState.update(()=>{return 5});
		}

		setTimeout(() => {
			loading.update(()=>{return false});
		success.update(()=>{return true});		
		}, 100);
		
	} catch(error) {
		console.error(error);
		loading.update(()=>{return false});
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
	{#if $loading == false}
	<Errpage/>
	{/if}
	{/if}


</main>

<style>

</style>
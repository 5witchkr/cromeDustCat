<script>
	// based on https://codesandbox.io/s/framer-motion-2-animating-shared-layouts-1cpd0?from-embed
   
	   // usually this import strategy should work:
	   //import {Motion, AnimatePresence,AnimateSharedLayout} from "svelte-motion";
	   import  Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	   import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte';
	   import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte';
   
	   let items=[false];

</script>
<style>
	 ul,
 li {
   list-style: none;
   margin: 0;
   padding: 0;
 }
 
 ul {
   width: 300px;
   display: flex;
   flex-direction: column;
   background: white;
   padding: 20px;
   border-radius: 25px;
 }
 
 li {
	   -webkit-tap-highlight-color: transparent;
   background-color: rgba(214, 214, 214, 0.5);
   border-radius: 10px;
   padding: 20px;
   margin-bottom: 20px;
   overflow: hidden;
   cursor: pointer;
 }
 
 li:last-child {
   margin-bottom: 0px;
 }
 

</style>
<AnimateSharedLayout>
   <Motion let:motion layout initial={{ borderRadius: 25 }} >
   <ul use:motion >
	   {#each items as isOpen,i}
	   <Motion layout initial={{ borderRadius: 10 }} let:motion={m1}>
		 
		 <li on:click={()=>{items=items.map((v,j)=>j===i?(!v):v)}} use:m1>
		   <Motion layout let:motion={m2}  ><div use:m2 class="avatar" ></div></Motion>
		   날씨정보를 불러오는데 실패했습니다!
		   <AnimatePresence list={isOpen?[{key:1}]:[]} >
			 <Motion
			   layout
			   initial={{ opacity: 0 }}
			   animate={{ opacity: 1}} 
			   
			   exit={{ opacity: 0}}    
			   let:motion={m3}
			 >
			   <div use:m3>
			   <div style="margin-top: 10px;">== 원인 ==</div>
			   <div style="margin-top: 10px;">1. 인터넷 연결을 확인 후 다시 시도해보세요!</div>
			   <div style="margin-top: 10px;">2. 현재 해당지역의 날씨정보가 없을수도 있어요</div>
			   <div style="margin-top: 10px;">3. 알수없는 원인 문의는 Email:hob4419@gmail.com</div>
			   </div>
		   </Motion>
		   </AnimatePresence>
		 </li>
	   </Motion>
	   {/each}
	 </ul>
   </Motion>
</AnimateSharedLayout>
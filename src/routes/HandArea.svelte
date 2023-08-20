<script>
    import HandTroop from './HandTroop.svelte';
import PlayerContainer from './PlayerContainer.svelte';
    
    import { onMount } from 'svelte';
    let mainArea, sleft;
    let box;
    let area

    export const horizontalWheelScroll = (node) => {
    node.style.scrollBehavior = "smooth";

    node.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        node.scrollLeft += evt.deltaY;
    });
};


onMount(()=>{
    horizontalWheelScroll(area);
});



</script>
<style>
    .mainArea{
     width: 100%;
     height: auto;
     margin-bottom: 2%;
     display: flex;
     background-color: aliceblue;
     border: 2px solid black;
        
    }
    .vLine {
      
      width: 2px;
      style: 0 auto;
      background-color: rgb(99, 99, 99);
      margin: 1%; 
      margin-top: 5%;
      margin-bottom: 5%;
  }

</style>  

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="mainArea" bind:this={area} on:scroll={()=>{console.log("e")}}>
    <HandTroop/>
    <div class="vLine"/>
    <HandTroop/>
    <div class="vLine"/>
    <HandTroop/>
    <div class="vLine"/>
    <HandTroop/>

</div>
 

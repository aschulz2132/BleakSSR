<script>
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
        background-color: aliceblue;
        width: 100%;
        height: fit-content;
    
        margin: 2%;
        
        border: 2px black solid;
        padding: 0 ;
        margin: 1%;
        display: inline-block;    
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        border-radius: 5px;
        
    }
   
</style>  

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mainArea" bind:this={area} on:scroll={()=>{console.log("e")}}>
    <PlayerContainer />
    <PlayerContainer />
    <PlayerContainer />
    <PlayerContainer />
    <PlayerContainer />

   

</div>

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
        background-color: rgb(193, 177, 142);
        border: 2px solid black;
        
        
        width: fit-content;
        height: fit-content;
        flex-direction: row;
        display: flex;
    min-height: 100%;
        
    }
    .card {
        padding-top: 0;
        height: 100%;
        aspect-ratio: 1/1;
        background-color: antiquewhite;
        
      
        margin: 5%;
    }
   
</style>  

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mainArea" bind:this={area} on:scroll={()=>{console.log("e")}}>
    <div class="card">
        card
    </div>
    <div class="card">
        card
    </div>  
    <div class="card">
        card
    </div>

</div>

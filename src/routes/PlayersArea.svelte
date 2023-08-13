<script>
    import PlayerContainer from './PlayerContainer.svelte';
    
    import { onMount } from 'svelte';
    let mainArea, sleft;
    let box;

    function handleMouse(){

}



</script>
<style>
    .mainArea{
        background-color: aliceblue;
        width: 100%;
        height: fit-content;
    
        margin: 2%;
        display: inline-block;      
        border: 2px black solid;
        padding: 0 ;
        margin: 1%;

        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        border-radius: 5px;
        
    }
   
</style>  

<div class="mainArea" >
    <PlayerContainer />
    <PlayerContainer />
    <PlayerContainer />
    <PlayerContainer />
    <PlayerContainer />

   

</div>

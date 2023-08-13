<script>
    import UserContainer from "./UserContainer.svelte";
    import PlayersArea from "./PlayersArea.svelte";
    import { onMount } from "svelte";
    
    
    let vw = 1920;
    let PA;
    let message = "gr";
    function handleMouse(){
        message += "eat";
    }
</script>


<style>
    div {
        height: 100%;
    }
    :global(body) {
        height: 100%;
        background-color: darkgray;
    }
    :global(html) {
        height: 100%;
        background-color: darkgray;
        overflow-y: hidden;
    }
    .upperArea {
        width: 100%;
        margin: 0;
        max-height: 60%;
        display: flex; /*added*/
        flex-direction: row; /*added*/
        justify-content: center;
        align-content: center;
        background-color: antiquewhite;
    }
    h1 {
        margin: 0;
    }
</style>

<div style="display: flex; flex-direction: column; /*added*/" >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1 on:click={()=>{console.log("e")}}>Bleak</h1>
        <h1>{message}</h1>
    <div style="display: flex; flex-direction: row; overflow: hidden;/*added*/">
    <div class="upperArea" >
        <UserContainer  />
        <PlayersArea style="flex: 1;overflow-x:scroll;" bind:this={PA}  />
    </div></div>
</div>
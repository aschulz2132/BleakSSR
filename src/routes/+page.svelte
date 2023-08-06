<script>
    import UserContainer from "./UserContainer.svelte";
    import PlayersArea from "./PlayersArea.svelte";
    import { onMount } from "svelte";
    
    
    let vw = 1920;
    let PA;
    
        
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

<div style="display: flex; flex-direction: column; /*added*/">
    <h1>Bleak</h1>
    <div style="display: flex; flex-direction: row; overflow: hidden;/*added*/">
    <div class="upperArea" on:scroll={scrollHorizontally}>
        <UserContainer  />
        <PlayersArea style="flex: 1;overflow-x:scroll;" bind:this={PA}  />
    </div></div>
</div>
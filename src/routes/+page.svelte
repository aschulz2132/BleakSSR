<script>
    import UserContainer from "./UserContainer.svelte";
    import PlayersArea from "./PlayersArea.svelte";
    import { onMount } from "svelte";
    import HandArea from "./HandArea.svelte";
    
    
    let vw = 1920;
    let PA;
    let message = "gr";
    function handleMouse(){
        message += "eat";
    }
</script>


<style>
       @font-face {
        font-family: "Comic Mono";

        src: url(https://dtinth.github.io/comic-mono-font/ComicMono.ttf)
            format("woff2");
    }
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
        height: fit-content;
        display: flex; /*added*/
        flex-direction: row; /*added*/
        justify-content: center;
        align-content: center;
        background-color: antiquewhite;
       
    }
    h1 {
        margin: 0;
    }

    .lowerArea{
        background-color: whitesmoke;
        border: 2px black solid;
        width:100%;
    
      
    
        height: fit-content;
        padding:  0;
        border-radius: 5px;
        margin: 1%;
    }
    .centerHorizontal {
        height: 40%;
        display: flex;
        
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;

    }
    .deckNameTab{
        background-color: black;
    }
</style>

<div style="display: flex; flex-direction: column; /*added*/" >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1 on:click={()=>{console.log("e")}}>Bleak</h1>
    <div style="display: flex; flex-direction: row; overflow: hidden;/*added*/">
    <div class="upperArea" >
        <UserContainer  />
        <PlayersArea style="flex: 1;overflow-x:scroll;" bind:this={PA}  />
    </div></div>
    <div class="centerHorizontal">
        
        <HandArea/>
   
    </div>
</div>
<script>
    import HandTroop from "./HandTroop.svelte";
    import PlayerContainer from "./PlayerContainer.svelte";

    import { onMount } from "svelte";
    let mainArea, sleft;
    let box;
    let area;

    export const horizontalWheelScroll = (node) => {
        node.style.scrollBehavior = "smooth";

        node.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            node.scrollLeft += evt.deltaY;
        });
    };

    onMount(() => {
        horizontalWheelScroll(area);
    });
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="b">
<div class="deckNameTab">
    <p class="deckNameTabP" >Deck:</p>
</div>
<div
    class="mainArea"
    bind:this={area}
    on:scroll={() => {
        console.log("e");
    }}
>
<p class="placeholder">No cards!<br>Refill soon.</p>
<HandTroop />
   
</div>
</div>
<style>
    .placeholder{ 
        top:20%;
        position: relative;
        padding: 10%;
        z-index: 1;
    }
    .deckNameTab{
    
        width: fit-content;

        background-color: black;
        height: fit-content;
        margin: 0;
        text-align: left;
        padding: 0;
        border: 2px solid black;
        
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    
    }
    .deckNameTabP {
        color: white;
        font-family: 'Comic Mono';
        font-size: 120%;
        margin: 2%;
        padding-left: 2%;
        
        
    }
    .b {
        height: 100%;
        display: flex;
        flex-direction: column;
        float: top;
    }
    .mainArea {
        height: 85%;
       

        position: relative;

        justify-content: center;
        vertical-align: center;
        align-content: center;
        background-color: aliceblue;
        border: 2px solid black;
        border-radius: 5px;
        border-top-left-radius: 0;
        display: flex;
        flex-direction: row;
       
        padding: 0;
        margin: 0;
        width: fit-content;
    }
</style>

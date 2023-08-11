<script>
    import Troop from './Troop.svelte'
    let nuhuh = "yuhuh";
</script>

<style>
    @font-face {
        font-family: 'Comic Mono';

        src: url(https://dtinth.github.io/comic-mono-font/ComicMono.ttf) format('woff2');
        
    }
.userLandMain {
        background-color: whitesmoke;
        border: 2px black solid;
        width: auto;
        flex: 1;
        flex-direction: column;
    
        height: fit-content;
        padding:  0;
        border-radius: 5px;
        margin: 1%;
    }

    .userLandMainHeader {
        border-radius: 0 0 1px 1px;
        padding:  0;
        margin: 0;
        background-color: rgb(133, 133, 133);
    }
    .userLandMainHeaderText {
        padding:  2px;
        margin: 0;
        color: white;
    
        font-family: 'Comic Mono';
    }
    
    .vLine {
      
        width: 2px;
        style: 0 auto;
        background-color: rgb(99, 99, 99);
        margin: 1%; 
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .troopLine{
      
        display: flex;
        justify-content: center;
        align-content: center;
        /* Column | row */
        
    }
 

</style>


<div class="userLandMain">
    <div class="userLandMainHeader" >
        <p class="userLandMainHeaderText"> FakeLand #1 </p>
    </div>
    <div class="troopLine"> 
        <Troop />
        <div class="vLine"/>
        <Troop />
        <div class="vLine"/>
        <Troop />
    </div>   
</div>

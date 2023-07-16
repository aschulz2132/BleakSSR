<script>
    import {Troop} from './troop.svelte'
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
        height:auto;
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
 

</style>


<div class="userLandMain">
    <div class="userLandMainHeader" >
        <p class="userLandMainHeaderText"> FakeLand #1 </p>
    </div>    
    <Troop/>
</div>

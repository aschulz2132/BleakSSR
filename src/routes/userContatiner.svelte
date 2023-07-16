<script>
    import UserLand from './userLand.svelte'
</script>
<style>
    @font-face {
        font-family: 'Comic Mono';

        src: url(https://dtinth.github.io/comic-mono-font/ComicMono.ttf) format('woff2');
        
    }
    .userContainerMainPage {
        border-radius: 5px;
        background-color: whitesmoke;
        border: 2px black solid;
        width: 20%;
        height: 60%;
        padding:  0;
        margin: 0;
    }

    .userContainerMainHeader {
        padding:  0;
        border-radius: 0 0 1px 1px;
        margin: 0;
        background-color: black;
    }
    .userContainerMainHeaderText {
        padding:  2px;
        padding-bottom: 3px;
        margin: 0;
        font-family: 'Comic Mono';
        color: white;
    }
    
</style>

<div class="userContainerMainPage">
    <div class="userContainerMainHeader"> 
       <p class="userContainerMainHeaderText"> Placeholder Country</p>
    </div>
    <UserLand/> 
    <UserLand/>
    <UserLand/>
</div>
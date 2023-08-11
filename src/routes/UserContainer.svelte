<script>
    import UserLand from './UserLand.svelte'

    let vw = 1920

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
        height: fit-content;
        width: 30% ;
        display: flex;
        flex-direction: column;
        padding: 0 ;
        margin: 1%;
    }

    .userContainerMainHeader {
        padding:  0;
        white-space: nowrap;
        overflow: hidden;
        border-radius: 0 0 1px 1px;
        margin: 0;
        background-color: black;
    }
    .userContainerMainHeaderText {
        padding:  3px;
       
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
<script>
    import UserContainer from './UserContainer.svelte';
    import PlayersArea from './PlayersArea.svelte';
</script>
<style>
    div {
        height: 100%
    }
    :global(body) {
        height: 100%;
        background-color: darkgray;
    }
    :global(html) {
        height: 100%;
        background-color: darkgray;
    }
    .upperArea{
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
<div>
<h1>Bleak</h1>
<div class="upperArea">
    <UserContainer></UserContainer>
    <PlayersArea></PlayersArea>
</div>

</div>


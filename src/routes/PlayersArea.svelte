<script>
    import UserContainer from './UserContainer.svelte';
    
</script>
<style>
    .mainArea{
        background-color: aliceblue;
        width: 60%;
        height: fit-content;
    
        margin: 5%;
        display: inline-flex ;
        border-radius: 5px;
        height: 100%;
        border: 2px black solid;
       
        flex-direction: row;
        padding: 0 ;
        margin: 1%;
    }

</style>
<div class="mainArea">
    <UserContainer ></UserContainer>
    <UserContainer ></UserContainer>
    <UserContainer ></UserContainer>
    <UserContainer ></UserContainer>

</div>

<script>
    import UserContainer from './UserContainer.svelte';
    import { onMount } from 'svelte';
    let mainArea, sleft;
    let box;

  

  
    function scrollHorizontally(e) {
                console.log("e")
                e = window.event || e;
                var delta = Math.max(
                    -1,
                    Math.min(1, e.wheelDelta || -e.detail)
                );
                box.scrollLeft -= delta * 40; // Multiplied by 40
                e.preventDefault();
            }  
    
    onMount(()=>{
        box.addEventListener("DOMMouseScroll",(console.log("b")));
    })

</script>
<style>
    .mainArea{
        background-color: aliceblue;
        width: 100%;
        height: fit-content;
    
        margin: 2%;
        display: inline-flex ;
        border-radius: 5px;
        
        overflow-x: scroll;
        border: 2px black solid;
       display: flex;
        flex-direction: row;
        padding: 0 ;
        margin: 1%;
    }

</style> 

<div class="mainArea" >
    <UserContainer ></UserContainer>
    <UserContainer ></UserContainer>
    <UserContainer ></UserContainer>
    <UserContainer ></UserContainer>
   

</div>

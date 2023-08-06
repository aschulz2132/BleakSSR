<script>
    
</script>

<style>
    .buttonShell {
        display: flex;
        flex: 1;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        background-color: black;
        height:0;
        width: 30%;
        padding-bottom:20%;
        border-radius: 5px;
        margin: 7%;
      

    }
    .square-box{

    position: relative;
    height: fit-content;

    width: 100%;
    overflow: hidden;
    background: black;
    margin:2%;
    border-radius: 5px;
  
}
.square-box:before{
    content: "";
    display: block;
    padding-top: 100%;
}
.square-content{
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
}
    .numberBox {
        color: white;
        text-align: center;
        padding: 0;
        
        

    }

</style>

<div class="square-box" style>
    <div class="square-content">
        <p>7</p>
    </div>
</div>

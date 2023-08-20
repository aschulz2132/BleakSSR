<script>
    
</script>

<style>
    @font-face {
        font-family: 'Comic Mono';

        src: url(https://dtinth.github.io/comic-mono-font/ComicMono.ttf) format('woff2');
        
    }
    .square-box{

    position: relative;
    height: fit-content;

    width: 100%;
    overflow: hidden;
    background: black;
    margin:5%;
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
    
    p {
        font-family: 'Comic Mono';
        font-size: large;
    }
</style>

<div class="square-box" style>
    <div class="square-content">
        <p>7</p>
    </div>
</div>

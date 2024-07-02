<script>
</script>


<style>
    @font-face {
        font-family: "Comic Mono";

        src: url(https://dtinth.github.io/comic-mono-font/ComicMono.ttf)
            format("woff2");
    }
    .square-box {
        z-index: 2;
        top: 15%;

        position: relative;
        height: 70%;
        aspect-ratio: 1/1;
        float: none;
        display: inline-block;
   
        text-align: center;
        vertical-align: center;
        background: rgb(255, 255, 255);
        margin-left: 1%;
        margin-right: 1%;
        padding: 0;
        border-radius: 5px;
        border: 2px solid black;
    }
    .square-content {
        position: absolute;
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
        font-family: "Comic Mono";
        font-size: large;
        color: rgb(0, 0, 0);
    }
</style>
<div class="square-box" style>
    <div class="square-content">
        <p> Empty deck!</p><br/>
        <p> Refill soon</p>

    </div>
</div>

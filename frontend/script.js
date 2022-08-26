console.log("Welcome on Board with JMSS");



//imitialize variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');

let songs = [
    {
        songName:" Lily",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },

    {
        songName:" Lily",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },

    {
        songName:" Lily",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },

    {
        songName:" Lily",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },

    {
        songName:" Lily",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    }
]
//audioElement.play();

//handle play/pause click

masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-paly-circle');
        gif.style.opacity =0;
    }
})


//listen to Events

audioElement.addEventListener('timeupdate', () => {

    console.log('timeupdate');

    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)/100);
    console.log(progress);
    myProgressBar.value = progress;

});
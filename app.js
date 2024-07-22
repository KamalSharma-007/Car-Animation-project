var music = document.createElement('audio');
music.setAttribute('src', 'sound.mp3');

music.loop = true;


addEventListener("click", (audio) => {
    music.play();

})
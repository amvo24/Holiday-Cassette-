document.addEventListener("DOMContentLoaded", function(){
    // Constants and Variables
    const playButton = document.querySelector(".play");
    const stopButton = document.querySelector(".stop");
    const nextButton = document.querySelector(".next");
    const previousButton = document.querySelector(".previous");
    const volumeUpButton = document.querySelector(".volume-up");
    const volumeDownButton = document.querySelector(".volume-down")
    const audio = document.getElementById("audio");

    let audioArray = [ //audioArray contains all the songs in an array.
        "static/audio/Bill Evans - Skating In Central Park.mp3",
        "static/audio/Frank Sinatra - Have Yourself A Merry Little Christmas.mp3",
        "static/audio/Michael Bublé - It's Beginning To Look A Lot Like Christmas.mp3",
        "static/audio/The Drifters - White Christmas.mp3"
    ]

    let currentAudioIndex = 0 //to start with first song in the list 'audioArray'

    // Logic
    playButton.addEventListener("click", function(){
        audio.play()
    })
    stopButton.addEventListener("click", function(){
        audio.pause()
    })
    nextButton.addEventListener("click", function(){
        currentAudioIndex = (currentAudioIndex + 1) % audioArray.length // increments array index by 1 whilst checking it doesnt exceed the length
        audio.src = audioArray[currentAudioIndex]
        audio.play()
    })
    previousButton.addEventListener("click", function(){
        currentAudioIndex = (currentAudioIndex - 1 + audioArray.length) % audioArray.length // prevents negative indexing
        audio.src = audioArray[currentAudioIndex]
        audio.play();
    })

    // Volume control
    volumeUpButton.addEventListener("click", function(){
        if (audio.volume < 1.0) {
            audio.volume = Math.min(1.0, audio.volume + 0.25); // Ensure volume doesn't exceed 1.0
        }
    })
    volumeDownButton.addEventListener("click", function(){
        if (audio.volume > 0) {
            audio.volume = Math.max(0, audio.volume - 0.25); // Ensure volume doesn't go below 0
        }
    })
})

// function getCurrentAudioIndex() {
//     // Replace this with your logic to get the current audio index
//     return 0;
// }

// dynamic display function
function getCurrentSongName() {
    switch (currentAudioIndex) {
        case 0:
            return "Bill Evans - Skating In Central Park";
        case 1:
            return "Frank Sinatra - Have Yourself A Merry Little Christmas";
        case 2:
            return "Michael Bublé - It's Beginning To Look A Lot Like Christmas";
        case 3:
            return "The Drifters - White Christmas";
        default:
            return "Unknown Song";
    }
}

function updateSongInfo() {
    const currentSongTitle = getCurrentSongName();
    const currentSongElement = document.getElementById("currentSong");

    // Update the content of the current song span
    currentSongElement.textContent = currentSongTitle;
}

updateSongInfo();

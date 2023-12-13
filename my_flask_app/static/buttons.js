document.addEventListener("DOMContentLoaded", function(){
    // Constants and Variables
    const playButton = document.querySelector(".play");
    const stopButton = document.querySelector(".stop");
    const nextButton = document.querySelector(".next");
    const previousButton = document.querySelector(".previous");
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
})
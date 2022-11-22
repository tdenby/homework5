const video = document.querySelector("#videoplayer")
const slider = document.querySelector("#slider")
let firstTime = true
let speedTracker = video.playbackRate

//Play Button//

document.querySelector("#play").addEventListener("click", () => {
	console.log("Play Video")
	if (firstTime === true) {
		document.querySelector("#volume").innerHTML = 100 + "%"
		video.volume = 1
		slider.value = 100
		firstTime = false
	}
	video.play()
})

//Pause Button//

document.querySelector("#pause").addEventListener("click", () => {
	console.log("Pause Video")
	video.pause()
})

//Slow Down Button//

document.querySelector("#slower").addEventListener("click", () => {
	console.log("Slow Video")
	if(speedTracker === 1) {
        video.playbackRate = video.playbackRate - .5
        speedTracker = .5
    }
    else if(speedTracker === 2) {
        video.playbackRate = video.playbackRate - 1
        speedTracker = 1
    }
    else {
        alert('Video is at slowest speed!')
    }
	console.log("Video playback rate is ", video.playbackRate)
})

//Speed Up Button//

document.querySelector("#faster").addEventListener("click", () => {
	console.log("Speed up Video")
	if(speedTracker === 1) {
        video.playbackRate = video.playbackRate + 1
        speedTracker = 2
    }
    else if(speedTracker === .5) {
        video.playbackRate = video.playbackRate + .5
        speedTracker = 1
    }
    else {
        alert('Video is at fastest speed!')
    }
	console.log("Video playback rate is ", video.playbackRate)
})

//Mute Button//

var muteButton = document.querySelector("#mute")
document.querySelector("#mute").addEventListener("click", () => {
	if (video.muted === false) {
		console.log("Mute Video")
		document.querySelector('#mute').innerText = 'Unmute'
		video.muted = true
	}
	else {
		console.log("Unmute Video")
		document.querySelector('#mute').innerText = 'Mute'
		video.muted = false
	}
})

//Skip Button//

document.querySelector("#skip").addEventListener("click", () => {
	var time = video.currentTime
	console.log("Video duration is ", video.duration, " seconds.")
	console.log("Skip Ahead")
	console.log("Current playback time in seconds: ", video.currentTime)
	if (time + 15 > video.duration ) {
		video.currentTime = 0
		video.play()
	}
	else {
		video.currentTime = video.currentTime + 15
	}
	console.log("New playback time in seconds: ", video.currentTime)
})

//Volume Slider//

slider.oninput = () => {
	video.volume = slider.value/100
	document.querySelector("#volume").innerHTML = slider.value + "%"
	console.log("Volume is set to ", video.volume)
}
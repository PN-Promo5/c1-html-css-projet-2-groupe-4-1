// When Dom is loaded
document.addEventListener('DOMContentLoaded', function(e) {
    // Je déclare les variables
    let eltRandomColor = document.getElementsByClassName("text-random-color");
    let eltTv = document.getElementsByClassName("tv-programmation");
    let eltVideoText = document.getElementsByClassName("activate-video");
    let eltVideoContainer = document.getElementsByClassName("video-container");
    let eltVideo = document.getElementsByClassName("video");
    let eltInfos = document.getElementsByClassName("infos");
    let color = ["gold", "aqua", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "DodgerBlue", "orange", "pink", "GreenYellow", "brown", "salmon", "crimson"]
    // get random nbr
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // add random color to all h3
    for (let i = 0; i < 16; i++) {
        let maxLength = color.length;
        let randomIndex = getRandomInt(0, maxLength);
        eltRandomColor[i].classList.add(color[randomIndex]);
        color.splice(randomIndex, 1);
    }
    // Hidden and paused all video
    for (let i = 0; i < eltVideoContainer.length; i++) {
        currentTv = eltTv[i];
        currentVideoContainer = eltVideoContainer[i];
        currentVideoText = eltVideoText[i];
        currentVideo = eltVideo[i];
        currentVideoContainer.classList.remove("d-none");
        currentVideoContainer.hidden = true;
        currentVideo.pause();
        currentVideo.setAttribute("autoplay", "autoplay");
        // Adding event listener to all tv
        currentTv.addEventListener("click", function(e) {
            currentVideoContainer = eltVideoContainer[i];
            currentVideoText = eltVideoText[i];
            currentVideo = eltVideo[i];
            videoPaused = currentVideo.paused;
            currentEltInfo = eltInfos[i];
            // If video not playing playing it else paused the video and return to infos
            if (videoPaused === true && currentEltInfo.hidden === false) {
                playVideo(currentEltInfo,currentVideoContainer, currentVideoText, currentVideo, i, true)
                currentVideo.addEventListener("ended", function(e) {
                    playVideo(currentEltInfo,currentVideoContainer, currentVideoText, currentVideo, i, false)
                }, false)
            } else {
                playVideo(currentEltInfo,currentVideoContainer, currentVideoText, currentVideo, i, false)
            }
        }, false)
    }
    // If true play video else paused
    function playVideo(videoInfos,videoContainer, videoText, video, currentIndex, booleen) {
        if (booleen === true) {
            videoText.hidden = true;
            videoContainer.hidden = false;
            video.load();
            video.volume = 0.1;
            infosHidden(videoInfos, true);
        } else {
            video.pause();
            videoText.hidden = false;
            videoContainer.hidden = true;
            infosHidden(videoInfos, false);
        }
    }

    // true hidden infos elt and false display it
    function infosHidden(infos, booleen) {
        if (booleen === true) {
            infos.hidden = true;
        } else {
            infos.hidden = false;
        }
    }
}, false);
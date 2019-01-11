document.addEventListener('DOMContentLoaded', function(e) {
    // Je déclare les variables
    let eltRandomColor = document.getElementsByClassName("text-random-color");
    let eltTv = document.getElementsByClassName("tv-programmation");
    let eltVideoText = document.getElementsByClassName("activate-video");
    let eltVideoContainer = document.getElementsByClassName("video-container");
    let eltVideo = document.getElementsByClassName("video");
    let eltInfos = document.getElementsByClassName("infos");
    let color = ["gold", "aqua", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "DodgerBlue", "orange", "pink", "GreenYellow", "brown", "salmon", "crimson"]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < 16; i++) {
        let maxLength = color.length;
        let randomIndex = getRandomInt(0, maxLength);
        eltRandomColor[i].classList.add(color[randomIndex]);
        color.splice(randomIndex, 1);
    }
    // Je cache toute les videos et je l'ai met sur pause
    for (let i = 0; i < eltVideoContainer.length; i++) {
        currentTv = eltTv[i];
        currentVideoContainer = eltVideoContainer[i];
        currentVideoText = eltVideoText[i];
        currentVideo = eltVideo[i];
        currentVideoContainer.classList.remove("d-none");
        currentVideoContainer.hidden = true;
        currentVideo.pause();
        currentVideo.setAttribute("autoplay", "autoplay");
        // J'ajoute un ecouteur d'evenement au click a toute les elt tv
        currentTv.addEventListener("click", function(e) {
            currentVideoContainer = eltVideoContainer[i];
            currentVideoText = eltVideoText[i];
            currentVideo = eltVideo[i];
            videoPaused = currentVideo.paused;
            currentEltInfo = eltInfos[i];
            if (videoPaused === true && currentEltInfo.hidden === false) {
                playVideo(currentVideoContainer, currentVideoText, currentVideo, i, true)
                currentVideo.addEventListener("ended", function(e) {
                    playVideo(currentVideoContainer, currentVideoText, currentVideo, i, false)
                }, false)
            } else {
                playVideo(currentVideoContainer, currentVideoText, currentVideo, i, false)
            }
            nbrClick++;
        }, false)
    }
    // Function qui arrete ou commence la video
    function playVideo(videoContainer, videoText, video, currentIndex, booleen) {
        if (booleen === true) {
            videoText.hidden = true;
            videoContainer.hidden = false;
            video.load();
            infosHidden(eltInfos[currentIndex], true);
        } else {
            video.pause();
            videoText.hidden = false;
            videoContainer.hidden = true;
            infosHidden(eltInfos[currentIndex], false);
        }
    }

    /* Fonction qui prend en parametre l'element infos et un booleen
    (true pour cacher l'element infos et false pour faire re aparaitre tout les elements infos)*/
    function infosHidden(infos, booleen) {
        if (booleen === true) {
            infos.hidden = true;
        } else {
            infos.hidden = false;
        }
    }
}, false);
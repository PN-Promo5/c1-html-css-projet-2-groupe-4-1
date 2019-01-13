    // Je déclare les variables
    let eltTv = document.getElementsByClassName("tv");
    let eltVideoContainer = document.getElementsByClassName("video-container");
    let eltVideo = document.getElementsByClassName("video");
    let time = 500;
    let eltH1 = document.getElementsByClassName("text-white");
    let eltLink = document.getElementsByClassName("link");
    let viewportWidth = $(window).width();
    for (let i = 0; i < eltVideo.length; i++) {
        let currentVideo = eltVideo[i];
        currentVideo.volume = 0;
    }
    if (viewportWidth < 576) {
        eltVideoContainer[0].classList.add("d-none");
        eltVideoContainer[1].classList.add("d-none");
        eltLink[0].classList.remove("d-none");
        eltLink[1].classList.remove("d-none");
    }
    if (viewportWidth < 768 && viewportWidth > 576) {
        eltLink[2].classList.remove("d-none");
    } else {
        eltLink[2].classList.add("d-none");
    }
    if (viewportWidth < 768) {
        eltVideoContainer[2].hidden = true;
    } else {
        eltVideoContainer[2].classList.remove("d-none");
        setTimeout(function() {
            eltVideoContainer[2].hidden = true;
        }, 1500);
    }
    document.addEventListener('DOMContentLoaded', function(e) {
        window.addEventListener("resize", function(e) {
            viewportWidth = $(window).width();
            responsive(viewportWidth, "resize");
        }, false)
        window.addEventListener("load", function(e) {
            viewportWidth = $(window).width();
            responsive(viewportWidth, "load");
        }, false)

        function responsive(viewportWidth, event) {
            if (viewportWidth < 576) {
                eltVideoContainer[0].classList.add("d-none");
                eltVideoContainer[1].classList.add("d-none");
                eltLink[0].classList.remove("d-none");
                eltLink[1].classList.remove("d-none");
            } else {
                eltLink[0].classList.add("d-none");
                eltLink[1].classList.add("d-none");
                eltVideoContainer[0].classList.remove("d-none");
                eltVideoContainer[1].classList.remove("d-none");
                if (event === "load") {
                    eltVideoContainer[0].hidden = true
                    setTimeout(function() {
                        eltVideoContainer[1].hidden = true
                    }, 1000);
                }
            }
            if (viewportWidth < 768) {
                eltVideoContainer[2].classList.add("d-none");
                if (event === "load") {
                    eltVideoContainer[2].hidden = true;
                }
            } else {
                eltVideoContainer[2].classList.remove("d-none");
                if (event === "load") {
                    setTimeout(function() {
                        eltVideoContainer[2].hidden = true;
                    }, 1500);
                }
            }
            if (viewportWidth < 768 && viewportWidth > 576) {
                eltLink[2].classList.remove("d-none");
            } else {
                eltLink[2].classList.add("d-none");
            }
        }
        // Je cache toute les videos
        for (let i = 0; i < eltVideoContainer.length; i++) {
            currentTv = eltTv[i];
            setTimeout(function() {
                currentVideoContainer = eltVideoContainer[i];
                currentVideo = eltVideo[i];
                currentVideoContainer.hidden = true;
                currentVideo.pause();
            }, time);
            time += 200;
            currentTv.addEventListener("click", function() {
                currentVideoContainer = eltVideoContainer[i];
                currentVideo = eltVideo[i];
                videoPaused = currentVideo.paused;
                if (videoPaused === true) {
                    playVideo(currentVideoContainer, currentVideo)
                } else {
                    stopVideo(currentVideoContainer, currentVideo)
                }
            }, false)
        }
        // Function qui arrete ou commence la video
        function playVideo(videoContainer, video) {
            videoContainer.hidden = false;
            video.load();
            video.volume = 0.1;
        }

        function stopVideo(videoContainer, video) {
            video.pause();
            videoContainer.hidden = true;
        }
    }, false);
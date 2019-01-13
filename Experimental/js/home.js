    // I set the variables
    let eltTv = document.getElementsByClassName("tv");
    let eltVideoContainer = document.getElementsByClassName("video-container");
    let eltVideo = document.getElementsByClassName("video");
    let time = 500;
    let eltH1 = document.getElementsByClassName("text-white");
    let eltLink = document.getElementsByClassName("link");
    let viewportWidth = $(window).width();
    // Put the volum of all video to 0;
    for (let i = 0; i < eltVideo.length; i++) {
        let currentVideo = eltVideo[i];
        currentVideo.volume = 0;
    }
    // Responsive at first loading
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
    // When Dom is loaded
    document.addEventListener('DOMContentLoaded', function(e) {
        // Adding event listener to resize for responsive
        window.addEventListener("resize", function(e) {
            viewportWidth = $(window).width();
            responsive(viewportWidth, "resize");
        }, false)
        // Adding event listener on load for responsive
        window.addEventListener("load", function(e) {
            viewportWidth = $(window).width();
            responsive(viewportWidth, "load");
        }, false)
        // Function Responsive
        function responsive(viewportWidth, event) {
            // If lower than SM
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
            //If lower than MD
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
            // if Only MD
            if (viewportWidth < 768 && viewportWidth > 576) {
                eltLink[2].classList.remove("d-none");
            } else {
                eltLink[2].classList.add("d-none");
            }
        }
        // Hidden all video after time
        for (let i = 0; i < eltVideoContainer.length; i++) {
            currentTv = eltTv[i];
            setTimeout(function() {
                currentVideoContainer = eltVideoContainer[i];
                currentVideo = eltVideo[i];
                currentVideoContainer.hidden = true;
                currentVideo.pause();
            }, time);
            time += 200;
            // adding event listener to all tv
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
        // Start the video
        function playVideo(videoContainer, video) {
            videoContainer.hidden = false;
            video.load();
            video.volume = 0.1;
        }
        // Stop the video
        function stopVideo(videoContainer, video) {
            video.pause();
            videoContainer.hidden = true;
        }
    }, false);
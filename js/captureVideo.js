function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
    function handleError(error) {
        console.error('navigator.getUserMedia error: ', error);
    }
    const constraints = {
        video: {
            width: 516,
            height: 382
        }
    };

    (function() {
        const screenshotButtonBack = document.querySelector('#captureBtn-back');
        const confirmButtonBack = document.querySelector('#captureBtn-confirm-back');
        const imgBack = document.querySelector('#screenshot-back');
        const videoBack = document.querySelector('#video-back');

        const screenshotButtonFront = document.querySelector('#captureBtn-front');
        const confirmButtonFront = document.querySelector('#captureBtn-confirm-front');
        const imgFront = document.querySelector('#screenshot-front');
        const videoFront = document.querySelector('#video-front');

        const canvasBack = document.createElement('canvas');
        const canvasFront = document.createElement('canvas');

        startVideo();

        screenshotButtonBack.onclick = function() {
            if (videoBack.paused){
                confirmButtonBack.style.display = 'none';
                screenshotButtonBack.innerHTML = '<i class="fa fa-camera"></i>&nbsp;Chụp hình';
                startVideo();
            }else {
                canvasBack.width = videoBack.videoWidth;
                canvasBack.height = videoBack.videoHeight;
                canvasBack.getContext('2d').drawImage(videoBack, 0, 0);
                // Other browsers will fall back to image/png
                imgBack.src = canvasBack.toDataURL('image/webp');
                stopVideo(videoBack, screenshotButtonBack, confirmButtonBack);
            }
        };

        screenshotButtonFront.onclick = function() {
            if (videoFront.paused){
                confirmButtonFront.style.display = 'none';
                screenshotButtonFront.innerHTML = '<i class="fa fa-camera"></i>&nbsp;Chụp hình';
                startVideo();
            }else {
                canvasFront.width = videoFront.videoWidth;
                canvasFront.height = videoFront.videoHeight;
                canvasFront.getContext('2d').drawImage(videoFront, 0, 0);
                // Other browsers will fall back to image/png
                imgFront.src = canvasFront.toDataURL('image/webp');
                stopVideo(videoFront, screenshotButtonFront, confirmButtonFront);
            }
        };

        let localMediaStream;

        function handleSuccess(stream) {
            localMediaStream = stream;
            videoBack.srcObject = stream;
            videoFront.srcObject = stream;
        }

        function startVideo() {
            navigator.mediaDevices.getUserMedia(constraints).
            then(handleSuccess).catch(handleError);
        }

        function stopVideo(video, screenshotBtn, confirmBtn) {
            video.pause();
            screenshotBtn.innerHTML = '<i class="fa fa-camera"></i>&nbsp;Chụp lại';
            confirmBtn.style.display = 'inline-block';
        }

    })();
} else {
    alert('getUserMedia() is not supported by your browser');
}
function handleError(error) {
    console.error('navigator.getUserMedia error: ', error);
}
const constraints = {video: true};

(function() {
    const screenshotButton = document.querySelector('#captureBtn-back');
    const confirmButton = document.querySelector('#captureBtn-confirm');
    const img = document.querySelector('#screenshot-back');
    const video = document.querySelector('#video-back');

    const canvas = document.createElement('canvas');

    startVideo();

    screenshotButton.onclick = function() {
        if (video.paused){
            confirmButton.style.display = 'none';
            screenshotButton.innerHTML = '<i class="fa fa-camera"></i>&nbsp;Chụp hình';
            startVideo();
        }else {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            // Other browsers will fall back to image/png
            img.src = canvas.toDataURL('image/webp');
            stopVideo();
        }
    };

    let localMediaStream;

    function handleSuccess(stream) {
        localMediaStream = stream;
        video.srcObject = stream;
    }

    function startVideo() {
        navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);
    }

    function stopVideo() {
        video.pause();
        screenshotButton.innerHTML = '<i class="fa fa-camera"></i>&nbsp;Chụp lại';
        confirmButton.style.display = 'inline-block';
    }

})();
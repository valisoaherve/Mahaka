/* Ce code permet de capturer une video streaming */
  const player = document.getElementById('player');
  const constraints = {
    video: true,
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video and play

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// Catch error
		console.log('Whoops, error here:', error);
	}
}

button.addEventListener('click', async () => {
	//Disable button
	button.disabled = true;
	// Start picture in picture

	await videoElement.requestPictureInPicture();
	// reset button
	button.disabled = false;
});

// On load

selectMediaStream();

const likelyhoods = {
  UNKNOWN: () => 0,
  VERY_UNLIKELY: () => Math.random() * .1 + 0, // 0-.1
  UNLIKELY: () => Math.random() * .15 + .25, // .1-.25
  POSSIBLE: () => Math.random() * .25 + .4, // .25-.6
  LIKELY: () => Math.random() * .25 + .6, // .6-.85
  VERY_LIKELY: () => Math.random() * .85 + .15, // .85-1
};

function analyzeImage(emotion, imageUri) {

  return fetch(
    'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBBngH5y1nnVBApZjrr76bSeamNNl8rgnA', {
      method: 'POST',
      body: JSON.stringify({
        "requests": [
          {
            "features": [
              {
                "type": "FACE_DETECTION"
              }
            ],
            "image": {
              "source": {
                imageUri,
              }
            }
          }
        ]
      }),
    }
  )
    .then(result => result.json())
    .then(result => {
      let likelihood = 'UNKNOWN';
      try {
        likelihood = result.responses[0].faceAnnotations[0][`${emotion.toLowerCase()}Likelihood`];
      }catch(e){}
      return likelyhoods[likelihood]();
    });

}

export default {
  analyzeImage,
}
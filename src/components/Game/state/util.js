const likelyhoods = {
  UNKNOWN: .15,
  VERY_UNLIKELY: .01,
  UNLIKELY: .25,
  POSSIBLE: .45,
  LIKELY: .75,
  VERY_LIKELY: .95,
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
      return likelyhoods[likelihood];
    });

}

export default {
  analyzeImage,
}
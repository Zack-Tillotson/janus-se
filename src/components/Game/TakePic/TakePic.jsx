import React from 'react';
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/dispatcher';
import photoSelector from '../state/photoSelector';

import './styles';

const MAX_WIDTH = 360;
const MAX_HEIGHT = 360;

class TakePic extends React.Component {

  state = {
    hasVideo: null, // null is loading, '' is ok, a truthy string is error
  }

  componentDidMount() {
    this.setupVideoStream();
  }

  componentDidUpdate(lastProps) {
    if(!this.props.photo.image && lastProps.photo.image) {
      this.setupVideoStream();
    }
  }

  componentWillUnmount() {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setupVideoStream = () => {
    this.setState(() => ({hasVideo: null}), () => {
      if(!this.video) {
        this.timeout = setTimeout(this.setupVideoStream, 500);
        return;
      }
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      })
        .then(stream => {
          this.video.srcObject = stream;

          this.video.onloadedmetadata = () => {
            this.setState(() => ({hasVideo: ''}))
            this.video.play();
          }
        })
        .catch(err => {
          this.setState(() => ({hasVideo: err.toString()}))
        });
    });
  }

  convertVideoToImage() {
    const context = this.canvas.getContext('2d');
    this.canvas.width = this.video.getBoundingClientRect().width;
    this.canvas.height = this.video.getBoundingClientRect().height;
    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    const data = this.canvas.toDataURL('image/png');

    return data;
  }

  render() {

    const {emotion, photo: {image, isLoading}, doSavePhoto} = this.props;

    const handelTakePicture = () => {
      this.props.doTakePhoto(this.convertVideoToImage());
    }
    const handelSubmitPicture = () => {
      this.props.doSavePhoto(this.props.photo.image);
    }
    const handleRevertPicture = () => {
      this.props.doDiscardPhoto();
    }

    return (
      <div className="take-pic">
        <div className="take-pic__action-hint">Make a face showing this emotion:</div>
        <h1>{emotion}</h1>
        <div className="take-pic__image">
          {!image && (
            <video ref={ele => this.video = ele} autoplay playsInline muted />
          )}
          {!!image && (
            <img src={image} />
          )}
          <canvas ref={ele => this.canvas = ele} />
          {!!this.state.hasVideo && this.state.hasVideo}
        </div>
        {!isLoading && (
          <div className="take-pic__controls">
            {!image && (
              <button onClick={handelTakePicture}>Take Picture</button>
            )}
            {!!image && (
              <button onClick={handelSubmitPicture}>Submit</button>
            )}
            {!!image && (
              <button className="button--alternate" onClick={handleRevertPicture}>Try Again</button>
            )}
          </div>
        )}
      </div>
    );
  }
}

function metaSelector(state) {
  return {
    ...selector(state),
    photo: photoSelector(state),
  }
}

export default connect(metaSelector, dispatcher)(TakePic);
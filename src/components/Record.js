import React from 'react';
import Button from 'react-bootstrap/Button';
import Webcam from 'react-webcam';
import Question from './Question';

const Record = (props) => {
  return (
    <div>
      <Question />
      <Webcam audio={true} ref={props.webcamRef} />
      {props.capturing ? (
        <Button onClick={props.handleStopCapture}>Stop Recording</Button>
      ) : (
        <Button onClick={props.handleStartCapture}>Start Recording</Button>
      )}

      <Button onClick={props.handleUpload}>Test Submission</Button>
    </div>
  );
};

export default Record;

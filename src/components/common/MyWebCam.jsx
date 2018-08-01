import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class MyWebCam extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isWebCamOpen : true,
          btnName : "Stop"
        };
        this.setRef = this.setRef.bind(this);
        this.btnAction = this.btnAction.bind(this);
    }
    setRef (webcam) {
        this.webcam = webcam;
    }
     
    btnAction() {
        let btnName = this.state.isWebCamOpen? "Start":"Stop";
        let me = this;
        this.setState({isWebCamOpen : !this.state.isWebCamOpen},
            () => {
                me.setState({btnName});
            }
        );
    }

    render() {
        const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: 'user',
        };
        let cam = '';
        cam = this.state.isWebCamOpen ? <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}/>
                :'';

        return (
        <div>
            <br />
            <button onClick={this.btnAction}>{this.state.btnName}</button>
            <br />
            {cam}
        </div>
    )
  }
}
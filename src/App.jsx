import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyReactComponent from './components/common/MyReactComponent.jsx';
import MyWebCam from './components/common/MyWebCam.jsx';
// import { MediaStream, PeerConnection, DataChannel } from 'webrtc-api';

import Webcam from 'react-webcam';

class App extends React.Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <MyReactComponent label="Change color" />
        </MuiThemeProvider>
        <MyWebCam />
      </div>
    );
  }
}

export default withRouter(connect(store => ({
  changeColorReducer:store.changeColorReducer
}))(App));
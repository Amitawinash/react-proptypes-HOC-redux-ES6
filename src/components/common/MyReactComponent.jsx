import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import { changeColorAction } from "../../actions/changeColorAction";
class MyReactComponent extends React.Component { 

  constructor(props){
    super(props);
    this.changeBtnColor = this.changeBtnColor.bind(this);
  }

  changeBtnColor(){
    this.props.dispatch(changeColorAction(!this.props.changeColorReducer.btnColorType));
  }

  render() {
    
    let btn = <RaisedButton primary label={this.props.label} />;
    btn = this.props.changeColorReducer.btnColorType ? <RaisedButton onClick={this.changeBtnColor} primary label="Raised Button" /> : <RaisedButton onClick={this.changeBtnColor} secondary label="Raised Button" />;
    return (
      <div>
        { btn }
      </div>
    );
  }
}
 
export default withRouter(connect(store => ({
  changeColorReducer:store.changeColorReducer
}))(MyReactComponent));
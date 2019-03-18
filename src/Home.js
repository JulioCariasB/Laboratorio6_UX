import React, { Component } from "react";
import "./App.css";
import React from 'react';
import ACTIONS from "../modules/action";
import Button from '@material-ui/core/Button';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {homeTitle: "Bienvenido a Project Code Names"}
    }

    changeState = (event) => {
        console.log(this.props);
        this.props.boom(this.state.homeTitle);
        
    }


    render() {
      return (
          <div>
            <h1>{this.state.homeTitle}</h1>
             <Button onClick= {this.changeState}>
             BOOM
             </Button>
         </div>
      );
    }
}

const mapStateToProps = state => ({
    homeTitle: state.homeTitle
});

const mapDispatchToProps = dispatch => ({
    boom: title => dispatch(ACTIONS.boom(title))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Home));
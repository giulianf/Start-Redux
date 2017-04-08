import React, { Component } from 'react';

import { Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';

export default class ImageHome extends Component {
  constructor (){
    super();
    this.state = {index: 0, direction: null};
  }

  render () {
    const handleCarouselSelect = (selectedIndex, e) => {
     this.setState({
       index: selectedIndex,
       direction: e.direction
     });
   };


    return (
      <Grid className="dark-header" fluid>
        <Row>
          <div className="container has-sticky-menu">
            <div className="header-content">
              <div className="row">
                <div className="col-sm-6">
                  <div className="header-image">
                    <img src="http://lorempixel.com/860/830" alt=""/>
                  </div>
                </div>

                <div className="col-sm-6 header-content-details">
                  <h3 className="header-brand">This is THE<span className="text-primary">ONE</span> </h3>
                  <h3>The Best App Landing Page Template</h3>
                  <p>Qusinque rhoncus tempus sem sed ornare. Aenean viverra ornare dui nec mollis. Vestibulum in dui sed velit consequat. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                  <p className="download-buttons">
                    <a href="#"><img src="/images/app-store.png" alt="app-store"/></a>
                    <a href="#"><img src="images/play-store.png" alt="play-store"/></a>
                    <a href="#features" className="btn btn-md btn-info-filled btn-rounded page-scroll"><i className="fa fa-lightbulb-o"></i><span>Learn More</span></a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </Row>
      </Grid>
    );
  }
}

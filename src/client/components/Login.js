/**
 * Created by julienfumanti on 06/04/2017.
 */
import React, { Component } from 'react';
import { Grid,  Row, Col } from 'react-bootstrap';

export default class Login extends Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <Grid >
        <Row className='section section-padding'>
          <Col md={4} sm={8} xs={12} mdOffset={4} smOffset={4} >

          </Col>
        </Row>
      </Grid>
    )
  }
}

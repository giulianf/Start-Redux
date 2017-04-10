import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import moment from 'moment';

export default class Footer extends Component {
  constructor (){
    super();
  }

  render () {
      const year = moment().year();

    return (
    <footer className="dark-footer">
      <Grid>
        <p className="footer-info">© {year} - <strong>Ufiix</strong> - Marque déposée de Finauxa sa. All Rights Reserved.
          <span className="social pull-right">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
            </span>
        </p>
      </Grid>
    </footer>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';
import {Grid,  Row, Col, Navbar, Nav,NavDropdown, NavItem,MenuItem, Button, Glyphicon } from 'react-bootstrap';

const Main = React.createClass({
render() {
  let connexion;

  if ( !this.props.loggedIn ) {
    connexion =  (
      <Link className="btn btn-flat btn-home-bg" to="/login">Connexion</Link>
    ) ;
  } else {
    connexion =  (
      <NavDropdown eventKey={3} title={<Glyphicon glyph="user" ></Glyphicon>} id="basic-nav-dropdown">
        <Navbar.Text>
          {this.props.profile ? this.props.profile.name : null}
        </Navbar.Text>
        <MenuItem divider />
        <li>
          <Link to="/profile" >Profile</Link>
        </li>
        <MenuItem divider />
        <MenuItem eventKey={3.3} onClick={this.props.logout} >Log Out <Glyphicon glyph="log-out" className="pull-right"></Glyphicon></MenuItem>
      </NavDropdown>
    ) ;
  }

  {/*<Navbar fixedTop fluid className="">*/}
    {/*<Grid>*/}
      {/*<Navbar.Header>*/}
        {/*<Navbar.Brand>*/}
          {/*<Link to="/"><img width="100" src="/img/logo.png"></img></Link>*/}
        {/*</Navbar.Brand>*/}
        {/*<Navbar.Toggle />*/}
      {/*</Navbar.Header>*/}

      {/*<Navbar.Collapse>*/}
        {/*<Nav pullRight>*/}
          {/*<li><Link to="/">Accueil</Link></li>*/}
          {/*<li><Link to="/sinistrSimulation">Démarrez</Link></li>*/}
          {/*<li>*/}
            {/*<Navbar.Form>*/}
              {/*{connexion}*/}
            {/*</Navbar.Form>*/}
          {/*</li>*/}

        {/*</Nav>*/}
      {/*</Navbar.Collapse>*/}
    {/*</Grid>*/}
  {/*</Navbar>*/}
    return (
      <Grid id='mainLayout' fluid>
        <Row>
          <nav className="navbar-1 navbar navbar-default-transparent navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img src="images/light-logo.png" alt="logo"/></a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><a href="#top" className="page-scroll"><span>Home</span></a></li>
                  <li><a href="#features" className="page-scroll"><span>Features</span></a></li>
                  <li><a href="#how" className="page-scroll"><span>How it Works</span></a></li>
                  <li><a href="#team" className="page-scroll"><span>The Team</span></a></li>
                  <li><a href="#newsletter" className="page-scroll"><span>Subscribe</span></a></li>
                  <li><label className="btn btn-primary-filled-nav btn-rounded"><a href="#"><i className="fa fa-cloud-download"></i><span>Download Now</span></a></label></li>
                </ul>
              </div>
            </div>
          </nav>
        </Row>
        <Row>
          {/* this is the important part */}
          {React.cloneElement({...this.props}.children, {...this.props})}
        </Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
    )
  }
});

export default Main;

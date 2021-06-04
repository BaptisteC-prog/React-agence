//import logo from './logo.svg';
//import './App.css';
import './kasa.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/LogoKasa.png';
import logonoir from './img/LogoKasaNoir.jpg';
import AboutImg from './img/AboutImg.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homebanner from './img/home-banner.jpg'
import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Home from './Home.js';
import About from './About.js';
import FicheLogement from './Logement.js';

//HOOK
export function useJSONInfo() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch("/logements2.json")
      .then((val) => val.json())
      .then((items) => setItems(items))

  }, []);
  return items
}

export function Accordion({ title, msg }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const style = {
    marginBottom: '1rem',
    backgroundColor: '#FF6060',
    width: '100%',
    display: 'block',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    border: '0px',
    fontSize: '22px'
  };

  const cardStyle = {
    border: "none",
    marginTop: "-15px",
    backgroundColor: "#F7F7F7",
    fontSize: '18px'
  }
  return (

    <div id="accordion" style={{ width: "100%" }}>
      <Button color="primary" onClick={toggle} style={style}>{title}</Button>
      <Collapse isOpen={isOpen} style={{ backgroundColor: "#F7F7F7" }} >
        <Card style={cardStyle}>
          <CardBody style={{ backgroundColor: "#F7F7F7" }} >
            <div>
              {msg}
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}


function Accordion2({ title, msg }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const style = {
    marginBottom: '1rem',
    backgroundColor: '#FF6060',
    width: '100%',
    display: 'block',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    border: '0px',
    fontSize: '22px'
  };

  const cardStyle = {
    border: "none",
    marginTop: "15px",
    backgroundColor: "#F7F7F7",
    fontSize: '18px'
  }

  return (
    <div id="accordion" style={{ width: "100%" }}>
      <Button color="primary" onClick={toggle} style={style}>{title}</Button>
      {isOpen ? <div id="card" style={cardStyle}>
        {msg}
      </div> : null}
    </div>
  );
}

function Machin() {
  const logements = useJSONInfo()
  return (
    <div>
      {logements.map(item => <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
      </tr>)}
    </div>)
}
/*
function Spacing(){
  return(<div height="50px">_</div>)
}*/

function MenuHaut() {

  return (<div id="menuHaut">
    <img className="left" src={logo}></img>
    <p className="right"><Link to={'/About'} style={{ color: '#FF6060' }}>A Propos</Link></p>
    <p className="right"><Link to={'/'} style={{ color: '#FF6060' }} >Accueil</Link></p>
  </div>)
}

function Footer() {
  return <div id="footer">
    <p className="center"><img src={logonoir}></img></p>
    <p>© 2020 Kasa. All rights reserved</p>
  </div>
}

function Page404() {
  return <div>
    <div id="page404">
      <h1 id="big404fake" className="spacing">&nbsp;</h1>
      <h1 id="big404" className="spacing">404</h1>
      <h3 className="spacing">Oups! La page que vous demandez n'existe pas.</h3>
      <p className="spacing">Retour à la page d'accueil</p>
    </div>
  </div>
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <div className="container">
          <MenuHaut />
          <div className="spacing2"></div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/Logement/:id" component={FicheLogement} />
            <Route path="*" component={Page404} />
          </Switch>
          <div className="spacing2"></div>
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AboutImg from './img/AboutImg.jpg';

function Accordion({ title, msg }) {
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

function About() {
    return (
      <div id="AboutPage">
        <img src={AboutImg}></img>
        <div className="col-lg-12">
          <Accordion title="Fiabilité" msg="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        </div>
        <div className="col-lg-12">
          <Accordion title="Respect" msg="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        </div>
        <div className="col-lg-12">
          <Accordion title="Service" msg="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        </div>
        <div className="col-lg-12">
          <Accordion title="Sécurité" msg="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
      </div>
    )
  }

  export default About;
  
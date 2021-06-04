import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import {Accordion} from './App.js';
import {useJSONInfo} from './App.js';
import { Redirect, useHistory, useParams } from 'react-router-dom'



function Stars({ stars }) {
    return (<span className="right"><img src={"/"+stars + ".jpg"}></img></span>)
}

function Equip({ logement }) {
    let equip = "" //mettre ca dans un composant plutot
    for (let eq in logement.equipments) {
        equip += "<p>" + logement.equipments[eq] + "</p>"
    }
    return (
        <div dangerouslySetInnerHTML={{ __html: equip }} />
    )
}

function SlidesImg({ logement }) {

    let items = []
    for (let i in logement.pictures) {
        let obj = {
            src: logement.pictures[i],
            altText: logement.title + " " + i,
            caption: ''
        }
        items.push(obj)
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

    );
}

// le mieux c'est d'envoyer toutes les propriétés en parametres
function FicheLogement(props) {
    // const logements = useJSONInfo()
    //logement = logements[0].title;
    //  {logements.tags.map(item => <div key={item.id} className="locationhome2"  ><img src={item.cover}></img><br></br><p>{item.title}</p></div>)}
    //      {logement.pictures && <Slides logement={logement} />}
    //      {logement.pictures.length > 0 && <Slides logement={logement} />}
    //    <img className="bandeau" src={logement.pictures[0]}></img>

    const { id } = useParams()
    //      {logement.pictures.length > 0 && <Slides logement={logement} />}
    //s'entrainer a faire le carousel seul
    const logements = useJSONInfo();
    console.log(logements);
    if (logements.length ===  0) return null
    let logement = logements.find((elem) => elem.id === id);

if(logement === undefined){
    // props.history.push("/404");
    // return null;  <<< METHODE AVEC HISTORY 
    return <Redirect to="/404"/>
}

    console.log("LOGEMENT",logement)
    let images = logement.pictures;
    //console.log(images)
/*
    let equip = "" //mettre ca dans un composant plutot

    for (let eq in logement.equipments) {
        equip += "<p>" + logement.equipments[eq] + "</p>"
        console.log(eq, logement.equipments[eq])
    }
    console.log("LOGEMENTS", equip);*/
    return (
        <div id="fiche-logement">
            <div id="SlidesImg"><SlidesImg logement={logement} /></div>
            <div className="spacing2"></div>
            <div className="row">
                <div className="col-lg-6">
                    <h1><b>{logement.title}</b></h1>
                    <p><b>{logement.location}</b></p>
                </div>
                <div className="col-lg-6 elem1">
                    <img className="avatar right" src={logement.host.picture}></img>
                    <p className="hostname right">{logement.host.name}&nbsp;</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">{logement.tags.map(item => <div key={item} className='tag'>{item}</div>)}</div>
                <div className="col-lg-6"><Stars stars={logement.rating}></Stars></div>
            </div>
            <div className="spacing2"></div>
            <div className="row">
                <div className="col-lg-6">
                    <Accordion title="Description" msg={logement.description} />
                </div>
                <div className="col-lg-6">
                    {<Accordion title="Equipements" msg={<Equip logement={logement} />} /> }
                </div>
            </div>

        </div>)
}

export default FicheLogement;
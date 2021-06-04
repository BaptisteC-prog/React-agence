import React, { useState, useEffect } from 'react';
import FicheLogement from './Logement.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useJSONInfo } from './App.js';


function Home() {
    return (
        <div>
            <div id="Home">
                <div className="homebanner">
                    <p className="">Chez vous, partout et ailleurs</p>
                </div>
            </div>
            <Home2 />
        </div>
    )
}

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) { return true }
    }
}

function getFrom(tab) {
	return tab[Math.floor(tab.length * Math.random())];
}

function Home2() {
    const logements = useJSONInfo()
    //const logements2=[getFrom(logements),getFrom(logements),getFrom(logements)];
    console.log(logements)
   // const logements3=[getFrom(logements),getFrom(logements),getFrom(logements)];
   /*
      const logements2 = logements.slice(Math.floor(Math.random()*7), 3);
    const logements3 = logements.slice(10+Math.floor(Math.random()*7), 3);
   */
  let a = Math.floor(Math.random()*7);
  let b =Math.floor(10+Math.random()*7);
    const logements2 = logements.slice(a, a+3);
    const logements3 = logements.slice(b, b+3);
    const styleLink = {
        marginTop: '5px',
        maxWidth: '100%',
        fontFamily: 'Montserrat',
        color: 'white',
        fontSize: '16px'
    };
    
    return (
        <div id="Home2">
            <div className="row">
                {logements2.map(item =>
                    <div key={item.id} className="locationhome2"  >
                        <Link style={styleLink} to={"/Logement/" + item.id}><div><img src={item.cover}></img>
                            <br></br>
                        </div>
                        </Link>
                        <p>{item.title}</p>
                    </div>)}
            </div>
            <div className="row">
                {logements3.map(item =>
                    <div key={item.id} className="locationhome2"  >
                        <Link style={styleLink} to={"/Logement/" + item.id}><div><img src={item.cover}></img>
                            <br></br>
                        </div>
                        </Link>
                        <p>{item.title}</p>
                    </div>)}
            </div>
        </div>
    )

}

/*

 {logements3.map(item => <div key={item.id} className="locationhome2"  ><img src={item.cover}></img><br></br><p>{item.title}</p></div>)}

<Route exact path="/Logement/:id" render={(id) => <FicheLogement logement={id} />} />
    <Route path="/Logement:id" component={FicheLogement} />
*/

export default Home;
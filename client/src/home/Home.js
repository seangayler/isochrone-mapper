import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import graphic from '../static/home-image.svg';

function Home(props) {
  const [text, setText] = useState(welcomeString);
  return (
    <div className='home'>
      <div className='home-tabs'>
        <div className='home__left'>
          <button onClick={() => {setText(welcomeString); changeTab('WELCOME');} } className="home__tab home__tab--activated">Welcome</button>
          <button onClick={() => {setText(howWorksString); changeTab('HOW');} } className="home__tab">How this works</button>
          <button onClick={() => {setText(exampleUseString); changeTab('EXAMPLE');} } className="home__tab">Example of use</button>
          <button onClick={() => {setText(attributionString); changeTab('AUTHOR');} } className="home__tab">Attribution</button>
        </div>
        <div className='home__right'>
          { text }
        </div>
      </div>
      <img onHover='' className='home__graphic' src={graphic} />
      <div class='home__footer'>
        <div class="home__footer__bar"></div>
        <div class="home__footer__green">Easter egg.</div>
      </div>
    </div>
  );
}

function changeTab(buttonName) {
  const currentSelectedButton = document.getElementsByClassName('home__tab--activated')[0];
  currentSelectedButton.classList.remove('home__tab--activated');
  const buttons = document.getElementsByClassName('home__tab');
  let index = 0;
  switch (buttonName) {
    case 'WELCOME':
      index = 0;
      break;
    case 'HOW':
      index = 1;
      break;
    case 'EXAMPLE':
      index = 2;
      break;
    case 'AUTHOR':
      index = 3;
      break;
  }
  buttons[index].classList.add('home__tab--activated');
}

const welcomeString = 'Hello! Thank you for checking out ISOCHRONE-MAPPER. \
  This tool aims to satisfy your isochrone mapping needs. I hope you enjoy it.';

const howWorksString = 'First click "Sign On" in the top right corner to \
  create an account or log in. This will allow you to create isochrones and \
  save them to your account. You may save up to 5 of them at once.';

const exampleUseString = 'Completely hypothetical user Jane Doe is looking for a new \
  apartment. She would like to know which stores are local to a given apartment. \
  Jane uses this tool to visualise where she can walk, drive and ride her bike \
  within 15 minutes. Jane makes a smarter decision. Jane buys a better \
  apartment.';
  
const attributionString = 'Developed by Sean Gayler.'

export default Home;
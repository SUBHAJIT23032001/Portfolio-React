import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Assests/home.png';
import  ExampleCarouselImage2 from '../Assests/hobbies.png';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About()
{
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="items">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <div class="item1-img">
            <img  src={ExampleCarouselImage} alt=" "text="First slide" />
        </div>
            <Carousel.Caption>
                <h3 id="home" class="home">Currently I am living in</h3>
                <p class="home">AE-190,Tirupati Plaza, Rabindrapally,</p>
                <p class="home">Kestopur, Kolkata-700101</p>
                <p class="home">Westbengal,India</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="item2">
      <div class="item2-img">
        <img src={ExampleCarouselImage2} alt=" " text="Second slide" />
      </div>
        <Carousel.Caption>
                <h3 id="home" class="home">My Hobbies are</h3>
                <p class="home">Painting, Playing cricket</p>
                <p class="home">Traveling, Video editing</p>
                <p class="home">Coding and Movies</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );

}

export default About;
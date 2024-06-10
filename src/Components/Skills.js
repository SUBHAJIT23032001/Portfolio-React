import React from "react";
import './Skills.css';
import c from '../Assests/c_image.png'
import css from '../Assests/css_image.png'
import html from '../Assests/HTML.png'
import java from '../Assests/java.png'
import javascript from '../Assests/javascript.png'
import python from '../Assests/pyhton.png'
import sql from '../Assests/SQL.png'
import react from '../Assests/React.png'
import github from '../Assests/github.png'

function Skills()
{
    return(
        <div class="exp">
        <div id="experience" class="experience">
          <h3>My Experience till now</h3>
        </div>
        <section class="fourth-section">
          <div class="Experiences">
            <div class="left-exp">
              <h3>My coding skills</h3>
              <ul class="exp-list">
                <li class="exp-img"> <img src={c} alt=""/> C/C++</li>
                <li class="exp-img"> <img src={python} alt=""/> Python</li>
                <li class="exp-img"> <img src={java} alt=""/> Java</li>
                <li class="exp-img"> <img src={sql} alt=""/> SQL</li>
              </ul>
              
            </div>
            <div class="middle-exp">
              <ul class="exp-list">
                <li class="exp-img"> <img src={html} alt=""/>HTML</li>
                <li class="exp-img"> <img src={css} alt=""/> CSS</li>
                <li class="exp-img"> <img src={javascript} alt=""/> Java Script</li>
                <li class="exp-img"> <img src={react} alt=""/> React</li>
              </ul>
            </div>
            <div class="right-exp">
              <p class="exp-first">I am a fresher, recently graduated from UEM Kolkata</p>
              <p>Although I don't have any industrial intrnships but I have done one under my colege faculty</p>
              <p>Also I have done other projects on various domains during my academics</p>
              <p>you can see my projects by  <span class="desc-exp">clicking on the github icon</span></p>
              <div class="git-icon">
                <a href="https://github.com/SUBHAJIT23032001?tab=repositories">
                  <img class="github" src={github} alt=""/>
                </a>
              </div>
             
            </div>
          </div>
          </section>
          </div>
    )
}

export default Skills
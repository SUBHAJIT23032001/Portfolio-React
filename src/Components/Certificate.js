import React from "react";
import './Certificate.css';
import coursera from '../Assests/coursera.png';
import udemy from '../Assests/udemy.png';
import edx from '../Assests/edx.png'



function Certificate()
{
    return(
        <div class="fift-section">
             <div id="certificates" class="certificates">
                My Certificates
            <p class="cer-first">I have done some courses along with my academic career.</p>
            <p>Because I always love to lear new things that's my main motivation so here are some certificates of mine</p>
            <p>I have completed this courses on various platforms. Like Udemy, coursera, EDX</p>
            <p>You can <span class="desc-exp">click on the icons</span>  to see the certificates</p>
          </div>
          <div class="cer-icons">
            <div id="cer-links" class="cer-links">
              <div class="content-img">
                <a href="https://drive.google.com/drive/folders/1gIZUF6oj4lWvCdxO4W-Wi5HfytwOybnA?usp=share_link">
                  <img src={udemy} alt=""/>
                </a>
              </div>
            </div>
            <div class="cer-links">
              <div class="content-img-coursera">
                <a href="https://drive.google.com/drive/folders/1W4MyAzq25sLUeOHgETudFuKqLwbfa8wT?usp=share_link">
                  <img src={coursera} alt=""/>
                </a>
              </div>
            </div>
            <div class="cer-links">
              <div class="content-img-edx">
                <a href="https://drive.google.com/drive/folders/1Ax7ny0Pe_n3f0Kwda7LoeFHxFKOKvk3t?usp=share_link">
                  <img src={edx} alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Certificate;
import React from 'react'
import "./landingPage.scss";
import botImg from "../assets/landing_page_bot.png"
import textBubbleImg1 from "../assets/Text_Bubble1.png";
import textBubbleImg2 from "../assets/Text_Bubble2.png";
import textBubbleImg3 from "../assets/Text_Bubble3.png";
import textBubbleImg4 from "../assets/Text_Bubble4.png";
const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='first-page'>
        <div id='nav-bar-component'>

        </div>
        <div id='contentDiv'>
          <img src={textBubbleImg3} alt="Text Bubble 3" className='text-bubble' id='textBubble3' />
          <div id='textContentDiv'>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ad hic, nihil, eligendi fugit maiores id ut aperiam impedit 
              ipsa adipisci illum libero quasi esse. Repudiandae dolor quas quo 
              quibusdam accusantium!
            </h1>
            <button id='SignUpBtn'>
              Sign Up!
            </button>
          </div>
          <div id='heroImage'>
            <img src={textBubbleImg1} alt="Text Bubble 1" className='text-bubble' id='textBubble1' />
            <img src={textBubbleImg2} alt="Text Bubble 2" className='text-bubble' id='textBubble2' />
            <img src={textBubbleImg4} alt="Text Bubble 4" className='text-bubble' id='textBubble4' />
            <img src={botImg} alt="Bot Image" id='botImg'/>
          </div>
        </div>
      </div>
      {/* <div>

      </div>
      <div>

      </div>
      <div>

      </div> */}
    </div>
  )
}

export default LandingPage
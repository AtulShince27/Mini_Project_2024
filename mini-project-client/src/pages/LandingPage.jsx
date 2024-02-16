import React from 'react'
import "../styles/landingPage.scss";
import botImg from "../assets/icons/landing_page_bot.png"
import textBubbleImg1 from "../assets/icons/Text_Bubble1.png";
import textBubbleImg2 from "../assets/icons/Text_Bubble2.png";
import textBubbleImg3 from "../assets/icons/Text_Bubble3.png";
import textBubbleImg4 from "../assets/icons/Text_Bubble4.png";
import mobilePhoneImg from "../assets/icons/mobile_phone.png";
import chatsImg from "../assets/icons/chats.png";
import circleDesignEl from "../assets/icons/Circle_Design_El.png";
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
      <div className='four-page-gradient'>
        <div className='second-page'>
          <img src={mobilePhoneImg} alt="Mobile Phone Image" id='mobilePhone'/>
          <img src={chatsImg} alt="Chats Image" id='chats'/>
          <div className='content-container'>
            <div id='textContentCol'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit voluptas dolore voluptatum eligendi perspiciatis accusamus 
                distinctio doloremque ipsa ipsum, expedita est repudiandae amet 
                voluptatem atque quasi a possimus numquam rerum.
              </p>
            </div>
            <div id='circleDesignElCol'>
              <img src={circleDesignEl} alt="Circle Gradient Design Element" id='circleDesign'/>
            </div>
          </div>
        </div>
        <div className='third-page'>
          <div className='content-container'>
            <div id='pageThreeImg'>
            </div>
            <div id='textContentCol'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Placeat quos incidunt porro necessitatibus sit quas reprehenderit 
                impedit, possimus ullam, doloremque voluptates! Maxime, harum? 
                Neque ullam debitis, odio unde officia accusamus.
              </p>
            </div>
          </div>
        </div>
        <div className='fourth-page'>
          {/* A2C1AE */}
          <div className="content-container">
            <div id='pageFourTextContent'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quas illo, est, dolor iste impedit nobis, culpa consectetur 
              illum amet voluptas voluptates minima aspernatur cum dignissimos. 
              Quis dicta voluptatibus inventore. Amet!
            </div>
            <div id='pageFourImg'>
            </div>
          </div>
        </div>
        <div className='fifth-page'>

        </div>
      </div>
    </div>
  )
}

export default LandingPage
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
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (ev)=>{
    ev.preventDefault();
  }
  // navigate is a React Router DOM freature that allows us to navigate between pages
  return (
    <>
      <div className='landing-page'>
        {/* This is an animated div that animates the first page on load */}
        <motion.div 
          className='first-page'
          initial={{
            opacity: 0,
          }}
          whileInView={{
              opacity: 1,
          }}
          transition={{
              ease: "easeIn",
              duration: 0.75,
          }}  
        >
          <div id='nav-bar-component'>

          </div>
          <div id='contentDiv'>
            <motion.img 
            src={textBubbleImg3} alt="Text Bubble 3" 
            className='text-bubble' 
            id='textBubble3' 
            initial={{
              opacity: 0,
              x: -150,
            }}
            whileInView={{
              opacity: 1,
            }}
            animate={{
              x: 0,
            }}
            transition={{
                ease:"backInOut",
                duration: 1.75,
            }}  
            />
            <div id='textContentDiv'>
              <h1>
              The only app you need for all your college related news, notices and documents.
              </h1>
              <p>
                Tired of missing important notices? Are you tired of
                missing subject notes ? Wouldn't it be convenient if you could recieve 
                all your college related news, notices and notes ? We've got you covered!
                Scroll down to learn more 
              </p>
              <button id='SignUpBtn' onClick={()=>{
                navigate("/signinPage");
              }}>
                Sign Up!
              </button>
            </div>
            <div id='heroImage'>
              <motion.img 
                src={textBubbleImg1} 
                alt="Text Bubble 1" 
                className='text-bubble' 
                id='textBubble1' 
                initial={{
                  opacity: 0,
                  x: -200,
                }}
                whileInView={{
                  opacity: 1,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                    ease:"backInOut",
                    duration: 1.25,
                }}  
              />
              <motion.img 
              src={textBubbleImg2} 
              alt="Text Bubble 2" 
              className='text-bubble' 
              id='textBubble2'
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{
                opacity: 1,
              }}
              animate={{
                x:0
              }}
              transition={{
                  ease:"backInOut",
                  duration: 1.5,
              }}   
              />
              <motion.img 
              src={textBubbleImg4} 
              alt="Text Bubble 4" 
              className='text-bubble' 
              id='textBubble4'
              initial={{
                opacity: 0,
                x: -300,
              }}
              whileInView={{
                opacity: 1,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                  ease:"backInOut",
                  duration: 2,
              }}   
              />
              <motion.img 
              src={botImg} 
              alt="Bot Image" 
              id='botImg'
              initial={{
                scale: 0,
                y: 150
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              transition={{
                ease: "backInOut",
                duration: 1.15,
              }}
              />
            </div>
          </div>
        </motion.div>
        <div className='four-page-gradient'>
          <div className='second-page'>
            <AnimatePresence mode='popLayout'>
              <motion.img 
                src={mobilePhoneImg} 
                alt="Mobile Phone Image" 
                id='mobilePhone'
                initial={{
                  opacity: 0,
                  x: 200,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                  ease: "backInOut",
                  times: [0.55, 1],
                }}
                exit={{
                  opacity: 0,
                  x: 200,
                }}
              />
              <motion.img 
                src={chatsImg} 
                alt="Chats Image" 
                id='chats'
                initial={{
                  opacity: 0,
                  x: -200,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 2,
                  ease: "backInOut",
                  times: [0.55, 1],
                }}
                exit={{
                  opacity: 0,
                  x: -200,
                }}
              />
            </AnimatePresence>
            <motion.div 
              className='content-container'
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity:1,
              }}
              transition={{
                duration:1,
                ease:"easeIn"
              }}
            >
              <div id='textContentCol'>
                <p id='secondPageText'>
                  Our chatbot will primarily function on Whatsapp. Since, it's 
                  quite convenient and it is where majority of our target audience
                  is comfortable recieving college related documents. It is easy and convenient
                  to use! And will change how we upload and recieve notes.
                </p>
              </div>
              <motion.div 
                id='circleDesignElCol'
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.10,
                  ease:"backOut",
                }}
              >
                <img src={circleDesignEl} alt="Circle Gradient Design Element" id='circleDesign'/>
              </motion.div>
            </motion.div>
          </div>
          <div className='third-page'>
            <AnimatePresence>
              <motion.div 
                className='content-container'
                initial={{
                  scale: 0,
                }}  
                whileInView={{
                  scale : 1,
                }}
                transition={{
                  duration: 1,
                  ease: "backOut",
                }}
                exit={{
                  scale: 0,
                }}
              >
                <div id='pageThreeImg'>
                </div>
                <div id='textContentCol'>
                  <p>
                    Users of this application can upload all their college related
                    documents, and these notes will be stored for our chatbot to access.
                    Students can send the chatbot queries on whatsapp and the chatbot will retrieve 
                    data from the database and send the correct documents as a result.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className='fourth-page'>
            <motion.div 
              className="content-container"
              initial={{
                y: 300,
                opacity: 0,
              }}
              whileInView={{
                y : 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease:"backInOut",
              }}
            >
              <div id='pageFourTextContent'>
                Uploading and retrieving notes has never been easier! This application
                will change the way we share data in the college and will streamline the means
                of communication, bridging the gap between the students and the teachers.
              </div>
              <div id='pageFourImg'>
              </div>
            </motion.div>
          </div>
          <div className='fifth-page'>
            <div className='contact-page'>
              <h1>Contact Us!</h1>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Your Name: </label>
                <input type="text" name="username" id="username" />
                <br />
                <label htmlFor="freeform">Your Feedback: </label>
                <br />
                <textarea id="freeform" name="freeform" rows="3" cols="50">
                </textarea>
                <br/>
                <button type="submit" id="submitBtn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
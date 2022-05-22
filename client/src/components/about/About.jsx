import React from 'react'
import Style from '../about/About.module.css'
import {NavLink} from 'react-router-dom'
import {TiSocialTwitter,TiSocialLinkedin} from 'react-icons/ti'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineWavingHand} from 'react-icons/md'
import {RiEmotionHappyLine} from 'react-icons/ri'


const About = () => {
    return(
    <div>
    <div className={Style.body}></div> 
    <div className={Style.text}>
      <h3><MdOutlineWavingHand/>HELLO, I'M</h3> 
          <h2>
            Maira Pajaro
            <span>Maira Pajaro</span>
            <span>Maira Pajaro</span>
            <span>Full Stack Developer</span>
          </h2>
      
        <div className={Style.description}>
              <h4>Throughout my life and work career I've been involved in areas of development, teamwork and creativity. I was always curious, ambitious and determined to find solutions to the challenges that presented to me.</h4>
              <h4>A year ago, I decided that needed to focouse in a new career path, and started to explore areas such as the tech industry. I studied by myself every day for a few months and then I got accepted at <a rel='noreferrer' href='https://www.soyhenry.com/' target='_blank'>Soy Henry</a>Bootcamp. I now have a great experience in marketing, art, and all the new technologies I recently incorporated.</h4>
            <h4>I'm a versatile person, quickly adapting to changes and now looking forward to find an opportunity to contribute with all my skills as a Full Stack developer.</h4>
            <p><RiEmotionHappyLine/>Hope you like my work and thanks for sharing!<RiEmotionHappyLine/></p>
        </div>
    <div>
      </div>
    <div className={Style.social}>
      <h3>You can contact me on the following social media platforms:</h3>
      <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/maira-pajaro-93b274189/'><TiSocialLinkedin/></a>
      <a rel='noreferrer' target='_blank' href='https://github.com/MaiBP'><BsGithub/></a>
      <a rel='noreferrer' target='_blank' href='https://twitter.com/MaiPajaro'><TiSocialTwitter/></a> 
      
    </div>
    <div className={Style.btnAlign}>
                    <NavLink to='/home'>
                    <button className={Style.backBtn}>
                    <span className={Style.buttonTop}>BACK HOME</span></button>
                    </NavLink>
              </div>

    </div>
    </div>
    )
}
export default About;


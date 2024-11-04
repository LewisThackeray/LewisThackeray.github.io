/**
 * @author Lewis Thackeray <thackeray.lewis0@gmail.com>
 * @version 1.0.0
 * This web page has been created to act as a funnel for employers to allow them to find all of my resources (like my LinkedIn and GitHub) at a single place.
 */

import React from 'react'; import './App.css'; import myImage from './assets/me.jpeg'; import cv from './assets/LewisThackerayCV.pdf'
import { ImLinkedin2 } from "react-icons/im"; import { SiGithub } from "react-icons/si"; import { IoIosDocument } from "react-icons/io";

function Header() {
  const handleEmailClick = () => {window.location.href = 'mailto:thackeray.lewis0@gmail.com'}
  return (
    <header className='header'>
      <title className='title'>Lewis Thackeray</title> <div className='name'>Lewis Thackeray</div> <button className='email' onClick={handleEmailClick}>Email Me!</button> <hr></hr>
    </header>
  )
}

function AboutMe() {
  const handleLinkedInClick = () => {window.location.href = "https://www.linkedin.com/in/lewis-thackeray-064172237/"};
  const handleGitHubClick = () => {window.location.href = 'https://github.com/LewisThackeray'};
  const handleCVClick = () => {window.open(cv, '_blank')}
  return (
    <div className='about-me-container'>
      <img src={myImage} alt='Lewis Thackeray' className='image'></img>
      <div className='about-me-container-words'>
        <h2 className='introduction'>Hi! I'm Lewis.  I am interested in <span style={{backgroundColor: '#fae978'}}>Software Engineering</span> and <span style={{backgroundColor: '#fae978'}}>High-Performance Computing</span>.</h2>
        <p className='text'>
        <br></br>
          <ul>
            <li>Highly motivated second-year Computer Science student at the University of Reading, skilled in Python, Java, C, C++ and JavaScript through multiple programming modules and software created for industry, requiring strong knowledge of Data Structures and Algorithms.</li>
            <br></br>
            <li>Expertise in Parallel and Distributed Systems from the Edinburgh Parallel Computing Center (EPCC) High-Performance Computing (HPC) Summer School 2024.</li>
            <br></br>
            <li>Excellent communication skills honed from customer-facing roles in the construction and hospitality industries.</li>
            <br></br>
            <li>Passionate entrepreneur, currently building Vorium which aims to innovate the way businesses interact with their customers.</li>
            <br></br>
            <li>Seeking industrial placements and summer internships to build strong foundations for a career in IT and software engineering.</li>
          </ul>
        </p>
        <div className='buttons-container'>
          <button className='linkedin-button' onClick={handleLinkedInClick}><ImLinkedin2 color='white'/></button>
          <button className='github-button' onClick={handleGitHubClick}><SiGithub/></button>
          <button className='cv-button' onClick={handleCVClick}>
            <div className='cv-container' style={{display: 'flex', alignItems: 'center'}}>
              <IoIosDocument style={{ marginRight: '8px', fontSize: '30px', color: 'white'}}/> <span className='cv-text' style={{fontSize: '30px'}}>My CV</span>
            </div>
          </button>
        </div>
        <div className='extra-information-container'>
          <p className='extra-information-container-text'><i>The copy of my CV available on this web page is my master copy, therefore, it may look different to the CV given to an employer as I have personalised my CV for that position.</i></p>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Header/> 
      <AboutMe/>
    </>
    
  )
}

export default App;
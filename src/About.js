
import React from 'react'
import web from "../src/images/home.svg"
import { NavLink } from 'react-router-dom'
import Common from './Common'


const About = () => {
  return (
    <>
     <Common name="Come join us to play the game we all love" imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
  )
}

export default About
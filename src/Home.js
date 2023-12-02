
import React from 'react'
import web from "../src/images/home.svg"
import { NavLink } from 'react-router-dom'
import Common from './Common'


const Home = () => {
  return (
    <>
      <Common name="Welcome to " imgsrc={web} visit="/contact" btname="Contact Now"/>
      </>
  )
}

export default Home
import React from 'react'
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import Circlebackdrop from "../components/Circlebackdrop"
import InputLol from '../components/InputLol'

export default function lol() {
  return (
    <div className='text-center'>
        <Head>
				<title>W3 - LoL</title>
		</Head>
        <Navbar />
        <Circlebackdrop/>
			<div className='flex justify-center items-center md:mt-40 md:mb-28 flex-col'>
				<h1 className='max-sm:text-3xl max-md:mx-16 max-sm:mt-16 md:text-5xl'>Welcome to the League of Legends Worst 3</h1>
				<p className='max-md:mx-16 max-sm:text-sm mt-4'>use our service to see which champions you truly suck at</p>
			</div>
			
            <div className='max-sm:mt-10 flex justify-center items-center flex-col'>
			
			
				<InputLol/>
				
			</div>
    </div>
  )
}

import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import Circlebackdrop from "../components/Circlebackdrop"

export default function Home() {
	return (
		<div className='text-center'>
			<Head>
				<title>W3 - WotLK</title>
			</Head>
			<Navbar />

			<Circlebackdrop/>
			<div className='flex justify-center items-center md:mt-40 md:mb-28 flex-col'>
				<h1 className='max-sm:text-3xl max-md:mx-2 max-sm:mt-16 md:text-5xl'>Welcome to the WOTLK Classic Worst 3</h1>
				<p className='max-sm:text-sm md:mt-3'>use our service to see which parses you truly suck at</p>
			</div>
			<div className='max-sm:mt-10 flex justify-center items-center flex-col'>
			
			
				<Input/>
				
			</div>
			
		</div>
	)
}

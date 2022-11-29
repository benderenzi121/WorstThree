import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>W3 - WotLK</title>
			</Head>
			<Navbar />
		</div>
	)
}

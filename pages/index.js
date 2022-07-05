import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarthak Music</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src='/welcome.js'></Script>
      <div className={styles.topcontainer}>
        <p>..Sarthak Music Learn with ease..</p>
      </div>
     

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sarthak Music School
        </h1>
        <div className={styles.imgwrap}>
        <Image className={styles.musicimg} src="/coverimg.jpg" width={300} height={200} />
        </div>
         <div className={styles.content}>
          <h2>Courses Provided at Sarthak Music School</h2>
          <h2>Guitar</h2>
          <p>The guitar is a fretted musical instrument that typically has six strings.</p>
         </div>
         <div className={styles.content}>
          <h2>Piano</h2>
          <p>The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers.</p>
         </div>
         <div className={styles.content}>
          <h2>Violin</h2>
          <p>The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. </p>
         </div>
         <div className={styles.content}>
          <h2>Flute</h2>
          <p>The flute is a family of musical instruments in the woodwind group.</p>
         </div>
         
         

         


        

        
        
      </main>

      <footer className={styles.footer}>
        <p><b>Powered: </b>SarthakTechsolutions</p>
        
      </footer>
    </div>
  )
}

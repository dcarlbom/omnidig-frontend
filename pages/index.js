import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Omnidig</title>
        <meta name="description" content="Static, fix this." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar>
        Vi håller för närvarande på att bygga om omnidig.se - men du kan nå oss på 070-6050670.
      </TopBar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          OMNIDIG
        </h1>

        <p className={styles.description}>
          
        </p>
      </main>

      <Footer>
        &copy; Omnidig AB 2016-2022
      </Footer>
    </div>
  )
}

const TopBar = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
background: rgb(0,0,0);
color: white;
padding: 0.2rem 0;
`

const Foo = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`
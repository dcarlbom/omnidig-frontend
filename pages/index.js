import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Omnidig</title>
        <meta name="description" content="Static, fix this." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          OMNIDIG
        </h1>

        <p className={styles.description}>
          Vi bygger om, snart tillbaka!
        </p>
      </main>

      <Footer>
        &copy; Omnidig AB 2016-2022
      </Footer>
    </div>
  )
}

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

// import LatestBlogPosts from '../components/Start/LastestBlog'

import fetch from 'isomorphic-unfetch'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Omnidig</title>
        <meta name="description" content="Static, fix this." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar>
        Vi håller för närvarande på att bygga om omnidig.se
      </TopBar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          OMNIDIG
        </h1>
        {/* <h2>Senaste från bloggen</h2> */}
        {/* <LatestBlogPosts></LatestBlogPosts> */}
        <p className={styles.description}>
          Vi hjälper företag synas på nätet och som du noterar håller vi på att bygga om lite på vår sajt :)
        </p>
      </main>
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

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`

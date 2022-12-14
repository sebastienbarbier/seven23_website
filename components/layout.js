import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import Container from '@mui/material/Container';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Seven23 - Budget app</title>
        <meta name="description" content="Fully manual budget app to track your expenses. Completely opensource, with privacy by design." />
      </Head>
      <header className={ home ? 'homepage' : 'legals'} id="top">
        { home ? <div id="title">
            <div id="title_text">
                <h1>Seven23</h1>
                <p>Fully manual budget app to track personal expenses.</p>
                <p>Completely <strong>opensource</strong>, with <strong>privacy by design</strong>.</p>
            </div>
            <aside>
                <img
                    src="/images/transactions-light.png"
                    alt="iPhone visual of Seven23" />
            </aside>
        </div> : <div></div>}
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#features">Features</a></li>
                <li><a href="/#gallery">Gallery</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#faq">FAQ</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="https://app.seven23.io">Open the app <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg></a></li>
            </ul>
        </nav>
      </header>
      <main className="main">
        {children}
      </main>
      <footer>
        <Container maxWidth="xl" className="wrapper">
          <div>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a target="_blank" href="https://github.com/sebastienbarbier/seven23">Github</a></li>
                  <li><a target="_blank" href="https://seven23.readthedocs.io/en/latest/">Documentation</a></li>
                  <li><a target="_blank" href="https://blog.seven23.io/">Blog</a></li>
                  <li><a target="_blank" href="https://status.seven23.io/">Status</a></li>
                  <li><a target="_blank" href="https://twitter.com/seven23_app">Twitter</a></li>
                  <li><a target="_blank" href="https://github.com/sebastienbarbier/seven23_webapp/issues">Issue tracker</a></li>
                  <li><a href="/legals/">Legals</a></li>
              </ul>
          </div>
          <p>Developed by<br /><a href="https://sebastienbarbier.com" target="_blank">sebastienbarbier</a></p>
        </Container>
      </footer>
    </div>
  )
}
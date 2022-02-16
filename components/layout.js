import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <CssBaseline />
        <meta charset="utf-8" />
        <title>Seven23 - Budget app</title>
        <meta name="description" content="Fully manual budget app to track your expenses. Completely opensource, with privacy by design." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#1e88e5" />
        <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#1e88e5" />
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
      <main>{children}</main>
      <footer>
        <div class="wrapper">
          <div>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a target="_blank" href="https://github.com/sebastienbarbier/seven23">Github</a></li>
                  <li><a target="_blank" href="https://seven23-server.readthedocs.io/en/latest/">Documentation</a></li>
                  <li><a target="_blank" href="https://status.seven23.io/">Status</a></li>
                  <li><a target="_blank" href="https://twitter.com/seven23_app">Twitter</a></li>
                  <li><a target="_blank" href="https://github.com/sebastienbarbier/seven23_webapp/issues">Issue tracker</a></li>
                  <li><a href="/legals/">Legals</a></li>
              </ul>
          </div>
          <p>Developed by<br /><a href="https://sebastienbarbier.com" target="_blank">sebastienbarbier</a></p>
        </div>
      </footer>
    </div>
  )
}

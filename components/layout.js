import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Divider from '@mui/material/Divider';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Seven23 - Budget app</title>
        <meta name="description" content="Fully manual budget app to track your expenses. Completely opensource, with privacy by design." />
      </Head>
      <header>
        <Container justifyContent="space-between" alignItems="center">
          <Stack container direction="row" justifyContent="space-between">
            <a href="/" className={styles.title}>
              <h1><img src="/images/svg/seven23_logo.svg" alt="Seven23 logo" /> Seven23</h1>
            </a>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button href="/product">Product</Button>
              <Button href="/pricing">Pricing</Button>
              <Button href="/resources">Resources</Button>
              <Button href="/about-us">About us</Button>
              <Divider orientation="vertical" style={{ height: 34 }}/>
              <IconButton><DarkModeOutlinedIcon  color="primary" /></IconButton>
            </Stack>
          </Stack>
        </Container>
      </header>
      <main className="main">
        {children}
      </main>
      <footer>
        <Container>
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
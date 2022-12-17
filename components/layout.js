import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Divider from '@mui/material/Divider';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

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
      <footer id="footer" className={styles.footer}>
        <Container>
          <Stack container direction="row" justifyContent="space-between">
            <nav>
              <List>
                <ListItem>
                  <Stack direction="column" spacing={0}>
                    <ListItemButton dense={true} component="a" href="/">Home</ListItemButton>
                    <ListItemButton dense={true} component="a" href="/product">Product</ListItemButton>
                    <ListItemButton dense={true} component="a" href="/pricing">Pricing</ListItemButton>
                    <ListItemButton dense={true} component="a" href="/resources">Resources</ListItemButton>
                    <ListItemButton dense={true} component="a" href="/about-us">About us</ListItemButton>
                  </Stack>
                </ListItem>
              </List>
            </nav>
            <nav>
              <List>
                <ListItem>
                  <Stack direction="column" spacing={0}>
                    <ListItemButton dense={true} component="a" href="https://github.com/sebastienbarbier/seven23">Github</ListItemButton>
                    <ListItemButton dense={true} component="a" href="https://seven23.readthedocs.io/en/latest/">Documentation</ListItemButton>
                    <ListItemButton dense={true} component="a" href="https://blog.seven23.io/">Blog</ListItemButton>
                    <ListItemButton dense={true} component="a" href="https://status.seven23.io/">Status</ListItemButton>
                    <ListItemButton dense={true} component="a" href="https://twitter.com/seven23_app">Twitter</ListItemButton>
                  </Stack>
                </ListItem>
              </List>
            </nav>
            <nav>
              <List>
                <ListItem>
                  <Stack direction="column" spacing={0}>
                    <ListItemButton dense={true} component="a" href="https://github.com/sebastienbarbier/seven23_webapp">Source code</ListItemButton>
                    <ListItemButton dense={true} component="a" href="https://github.com/sebastienbarbier/seven23_webapp/issues">Issue tracker</ListItemButton>
                  </Stack>
                </ListItem>
              </List>
            </nav>
            <Stack justifyContent="flex-end">
              <p style={{ fontSize: '0.9em', textAlign: 'right', fontStyle: 'italic', fontWeight: 300 }}>Developed by<br />
                <a href="https://sebastienbarbier.com">
                  <img src="/images/svg/sebastienbarbier_logo.svg" alt="sebastienbarbier logo" style={{ height: '1.4em' }} />
                </a>
              </p>
            </Stack>
          </Stack>
          <p style={{ textAlign: 'center', fontSize: '0.9em', paddingTop: 4, paddingBottom: 4 }}>2022 - Seven23 - <a href="/legals/">Terms of Service and Privacy Policy</a></p>
        </Container>
      </footer>
    </div>
  )
}
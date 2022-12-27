import React, { useState } from 'react';

import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const year = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>Seven23 - Budget app</title>
        <meta name="description" content="Fully manual budget app to track your expenses. Completely opensource, with privacy by design." />
      </Head>
      <header>
        <Container justifyContent="space-between" alignItems="center">
          <Stack container direction="row" justifyContent="space-between" alignItems="center">
            <a href="/" className={styles.title}>
              <h1><img src="/images/svg/seven23_logo.svg" alt="Seven23 logo" /> Seven23</h1>
            </a>
            <Stack direction="row" alignItems="center" spacing={2} display={{ xs: 'none', md: 'flex' }}>
              <Button href="/product">Product</Button>
              <Button href="/pricing">Pricing</Button>
              <Button href="/resources">Resources</Button>
              <Button href="/about-us">About us</Button>
            </Stack>

            <Box  display={{ xs: 'flex', md: 'none' }}>
              <IconButton onClick={() => setDrawerOpen(true) }>
                <MenuIcon color="primary" />
              </IconButton>
            </Box>

            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}>
              <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 20, paddingRight: 26  }}>
                <IconButton onClick={() => setDrawerOpen(false) }>
                  <CloseIcon />
                </IconButton>
              </Box>
              <nav>
                <List style={{ width: 300, maxWidth: '80vw'}}>
                  <ListItem>
                    <ListItemButton component="a" href="/">
                      <ListItemText primary="Home"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component="a" href="/product">
                      <ListItemText primary="Product"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component="a" href="/pricing">
                      <ListItemText primary="Pricing"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component="a" href="/resources">
                      <ListItemText primary="Resources"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component="a" href="/about-us">
                      <ListItemText primary="About us"/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Drawer>
          </Stack>
        </Container>
      </header>
      <main className="main">
        {children}
      </main>
      <footer id="footer" className={styles.footer}>
        <Container>
          <Grid container>
            <Grid item xs={6} sm={3}>
              <nav>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/">
                      <ListItemText primary="Home"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/product">
                      <ListItemText primary="Product"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/pricing">
                      <ListItemText primary="Pricing"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/resources">
                      <ListItemText primary="Resources"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/about-us">
                      <ListItemText primary="About us"/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
            <Grid item xs={6} sm={3}>
              <nav>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="https://github.com/sebastienbarbier/seven23">
                      <ListItemText primary="Github"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="https://seven23.readthedocs.io/en/latest/">
                      <ListItemText primary="Documentation"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="https://blog.seven23.io/">
                      <ListItemText primary="Blog"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="https://status.seven23.io/">
                      <ListItemText primary="Status"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="https://twitter.com/seven23_app">
                      <ListItemText primary="Twitter"/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
            <Grid item xs={6} sm={3}>
              <nav>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/terms/">
                      <ListItemText primary="Terms of Service"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton dense={true} component="a" href="/legals/">
                      <ListItemText primary="Legals & Copyright"/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
            <Grid item container xs={6} sm={3} alignItems="flex-end">
              <p style={{ fontSize: '0.9em', textAlign: 'right', fontStyle: 'italic', fontWeight: 300 }}>Developed by<br />
                <a href="https://sebastienbarbier.com">
                  <img src="/images/svg/sebastienbarbier_logo.svg" alt="sebastienbarbier logo" style={{ height: '1.4em' }} />
                </a>
              </p>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ textAlign: 'center', fontSize: '0.9em', paddingTop: 4, paddingBottom: 4 }}>{year} - Seven23</Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  )
}
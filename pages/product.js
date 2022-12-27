import Head from 'next/head'
import Link from 'next/link'

import { useEffect } from 'react'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import theme from '../components/theme';

const styles = {
  headline: {
    textAlign: 'center',
    fontSize: { xs: 30, sm: 45, md: 75},
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -1,
    paddingTop: 6,
    marginBottom: 2
  },
  subheadline: {
    fontSize: { xs: 16, sm: 18, md: 20},
    fontWeight: 400
  },
  small: {
    padding: '10px 20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    textAlign: 'center'
  },
  medium: {
    padding: '10px 20px 10px',
  },
  large: {
    padding: '10px 20px 10px',
  },
  title: {
    paddingTop: 14,
    borderTop: `${theme.palette.divider} solid 1px`,
  },
  wrapper: {
    position: 'relative', 
    paddingTop: 60, 
    marginBottom: 60,
    maxWidth: '1000px',
    margin: 'auto'
  },
  screen: {
    width: '70%',
    marginLeft: '15%',
    height: '100%',
  },
  tablet: {
    position: 'absolute',
    bottom: 20,
    right: '6%',//70,
    width: '33%'// 380
  },
  mobile: {
    position: 'absolute',
    bottom: 18,
    left: '13%', //145,
    width: '9%',//100,
  }
};

/*
One budget to rule them all, one budget to find them, one budget to bring them all, and in the app bind them.
- The Grey Accountants
*/

/*<p><strong>And more to come (or not)</strong>: 🔑 Two-factor authentication, 🗄 tags, 🖇 attached files, 👬👬 shared budget, 📊 public profile, 🌏 locations, 🐑 social networks, and 🇫🇷 multi-langage.</p>*/
export default function Product() {

  useEffect(() => {
    console.log('Start Observers');
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList = 'show';
      })

    }, options);

    observer.observe(document.getElementById('devices'));

  }, []);

  return (
    <Layout>
      <Container>
        <Typography variant="h1" sx={styles.headline}>What gets measured,<br/>gets managed.</Typography>
        <div style={styles.wrapper} id="devices" className={'hidden'}>
          <img src="/images/screenshots/1-xdr-dashboard.png" style={styles.screen} className="screen"/>
          <img src="/images/screenshots/5-ipad-report.png" style={styles.tablet} className="tablet"/>
          <img src="/images/screenshots/2-iphone-transactions.png" style={styles.mobile} className="mobile"/>
        </div>
        <style global jsx>{`
          #devices.hidden .screen { opacity: 0; }
          #devices.hidden .tablet { opacity: 0; margin-right: 20px; }
          #devices.hidden .mobile { opacity: 0; margin-left: 10px; }
          #devices.show .screen { opacity: 1; transition: all 0.8s ease-in-out; }
          #devices.show .tablet { opacity: 1; margin-right: 0; transition: all 0.8s ease-in-out 0.2s; }
          #devices.show .mobile { opacity: 1; margin-left: 0; transition: all 0.5s ease-in-out 0.4s; }
        `}</style>
        <Stack spacing={{xs: 2, sm: 6, md: 10 }} style={{ marginTop: theme.spacing(6), marginBottom: theme.spacing(12) }}>
          <Grid container justifyContent="space-around">
            <Grid item xs={5} sm={5} md={4} style={styles.title}>
              <Typography sx={styles.subheadline}>Write down each transaction to have an overview of your month.</Typography>
            </Grid>
            <Grid item xs={5} sm={5} md={4} style={styles.title}>
              <Typography sx={styles.subheadline}>Categorize them to quickly see where money goes.</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around">
            <Grid item xs={5} sm={5} md={4} style={styles.title}>
              <Typography sx={styles.subheadline}>Convert them all in a unique currency.</Typography>
            </Grid>
            <Grid item xs={5} sm={5} md={4} style={styles.title}>
              <Typography sx={styles.subheadline}>Synchronize between all your devices.</Typography>
            </Grid>
          </Grid>

        </Stack>
        <Stack spacing={12} style={{ marginTop: theme.spacing(6), marginBottom: theme.spacing(12) }}>

          <Grid container spacing={{ xs:1, sm:4, md: 8}} justifyContent="center">
            <Grid item xs={12}>
              <h2 style={{ textAlign: 'center' }}><FormatQuoteIcon style={{ marginRight: 8 }} fontSize="large"/>Keep it simple and stupid</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h3>Dashboard</h3>
              <p>Keep an eye on your latest spending, to be more aware and keep control.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h3>Transactions</h3>
              <p>A full list of transactions often allows you realise we underestimate small things.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h3>Categories</h3>
              <p>You might be spending more on beer than you think, find out quickly.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h3>Changes</h3>
              <p>Have a realistic exchange rate by keeping track of your exchanges.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h3>Report</h3>
              <p>Pick a date range, and see how things went.</p>
            </Grid>
          </Grid>

          {/* CAROUSEL, showing different page of the app */}
          <Grid container justifyContent="space-around" alignItems="center">
            
            <Grid item xs={12} md={5}>
              <img src="/images/screenshots/browser-changes.png" style={{ maxWidth: '50vw', width: '100%' }}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>Why manually tracking exchange rate ?</h3>
              <p>When exchanging currency at an ATM or an exchanger booth, the applied rate never really match our expectation and often include hidden fees. To provide an accurate exchange rate, manually write down each exchanges to let the application know the actual rate.</p>
              <p>All transactions can then be displayed in a currency of your choice, which can be especially helpful for those who travel frequently or need to track expenses in multiple currencies.</p>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-around">

            <Grid item xs={12} md={'auto'}>
              <h3>Privacy by design</h3>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p>We provides secure end-to-end encryption within an open source code base to protect the confidentiality of your data. This ensures that only you can access and read them.</p>
            </Grid>

          </Grid>


        </Stack>
        
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <h2 style={{ textAlign: 'center' }}>Other Features</h2>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Paper variant="outlined" style={styles.small}>
            👥 Multi-account
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Paper variant="outlined" style={styles.small}>
            💱 Convertor
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Paper variant="outlined" style={styles.small}>
            🌗 Dark mode
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Paper variant="outlined" style={styles.small}>
            📥 Import/export
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Paper variant="outlined" style={styles.small}>
            💚 Opensource
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Paper variant="outlined" style={styles.small}>
            👩‍💻 API access for developers
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={6} lg={6}>
            <Paper variant="outlined" style={styles.small}>
            🏠 Self-hostable
            </Paper>
          </Grid>


          <Grid item xs={6} sm={4} md={6} lg={6}>
            <Paper variant="outlined" style={styles.small}>
            🔁 Recurant transactions
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Paper variant="outlined" style={styles.small}>
            🔎 Search
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Paper variant="outlined" style={styles.small}>
            🏝️ Offline capacity
            </Paper>
          </Grid>
        </Grid>

        <Stack direcion="column" justifyContent="center" alignItems="center" spacing={2}  mt={theme.spacing(18)} mb={theme.spacing(6)}>
          <h2 style={{ marginBottom: 8 }}>Quickly find out if it works for you !</h2>
          <p style={{ textAlign: 'center' }}>We made it very easy to try our app - you can use it directly in your browser without needing to create an account.</p>
          <Button href="https://app.seven23.io" variant="contained" disableElevation>Try it now</Button>
        </Stack>
      </Container>
    </Layout>
  )
}

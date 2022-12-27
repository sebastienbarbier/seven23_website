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
    fontSize: 75,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: -1,
    paddingTop: 30,
    marginBottom: 20
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
    borderTop: `${theme.palette.divider} solid 1px`
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
        <h1 style={styles.headline}>Made for me, but<br/>could work for you too.</h1>
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
        <Stack spacing={10} style={{ marginTop: theme.spacing(6), marginBottom: theme.spacing(12) }}>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item xs={4} style={styles.title}>
              <Typography variant="h5">Write down each transaction to have an overview of your month.</Typography>
            </Grid>
            <Grid item xs={4} style={styles.title}>
              <Typography variant="h5">Categorize them to quickly see where money goes.</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item xs={4} style={styles.title}>
              <Typography variant="h5">Convert them all in a unique currency.</Typography>
            </Grid>
            <Grid item xs={4} style={styles.title}>
              <Typography variant="h5">Synchronize between all your devices.</Typography>
            </Grid>
          </Grid>

        </Stack>
        <Stack spacing={12} style={{ marginTop: theme.spacing(6), marginBottom: theme.spacing(12) }}>

          <Grid container spacing={8} justifyContent="center">
            <Grid item md={12} lg={12}>
              <h2 style={{ textAlign: 'center' }}><FormatQuoteIcon style={{ marginRight: 18 }} fontSize="large"/>What gets measured, gets managed</h2>
            </Grid>
            <Grid item md={4}>
              <h3>Dashboard</h3>
              <p>Keep an eye on your latest spending, to be more aware and keep control.</p>
            </Grid>
            <Grid item md={4}>
              <h3>Transactions</h3>
              <p>A full list of transaction often makes you realise you forget little things. No more.</p>
            </Grid>
            <Grid item md={4}>
              <h3>Categories</h3>
              <p>You might be spending more on beer than you think, find out quickly.</p>
            </Grid>
            <Grid item md={4}>
              <h3>Changes</h3>
              <p>Have a realistic exchange rate by keeping track of your exhanges.</p>
            </Grid>
            <Grid item md={4}>
              <h3>Report</h3>
              <p>Pick a range of date, and see how things went.</p>
            </Grid>
          </Grid>
          {/* CAROUSEL, showing different page of the app */}
          <Grid container spacing={8} justifyContent="center" alignItems="center">
            
            <Grid item md={5}>
              <img src="/images/screenshots/2-changes-browser.png" className=""/>
            </Grid>
            <Grid item md={6}>
              <h3>Why tracking manually exchange rate ?</h3>
              <p>When exchanging currency at an ATM or an exchanger booth, the applied rate never really match our expectation and often include hidden fees. To provide an accurate exchange rate, manually provide each exchange to let the application know how the actual rate.</p>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-around" spacing={2}>

            <Grid item md="auto">
              <h3>Privacy by design</h3>
            </Grid>
            <Grid item md={7} lg={7}>
              <p>We provides secure end-to-end encryption within an open source code base to protect the confidentiality of your data. This ensures that only you can access and read them.</p>
            </Grid>

          </Grid>

          <Grid container spacing={2}>

            <Grid item md={12} lg={12}>
              <h2 style={{ textAlign: 'center' }}>Other Features</h2>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              👥 Multi-account
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              💱 Convertor
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              🌗 Dark mode
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              📥 Import/export
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              💚 Opensource
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              👩‍💻 API access for developers
              </Paper>
            </Grid>

            <Grid item md={6} lg={6}>
              <Paper variant="outlined" style={styles.small}>
              🏠 Self-hostable
              </Paper>
            </Grid>


            <Grid item md={6} lg={6}>
              <Paper variant="outlined" style={styles.small}>
              🔁 Recurant transactions
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              🔎 Search
              </Paper>
            </Grid>

            <Grid item md={3} lg={3}>
              <Paper variant="outlined" style={styles.small}>
              🏝️ Offline capacity
              </Paper>
            </Grid>
          </Grid>

        </Stack>

        <Stack direcion="column" justifyContent="center" alignItems="center" spacing={2}  mt={theme.spacing(6)} mb={theme.spacing(6)}>
          <h2 style={{ marginBottom: 8 }}>Quickly find out if it works for you !</h2>
          <p style={{ textAlign: 'center' }}>We made it very easy to try our app - you can use it directly in your browser without needing to create an account.</p>
          <Button href="https://app.seven23.io" variant="contained" disableElevation>Try it now</Button>
        </Stack>
      </Container>
    </Layout>
  )
}

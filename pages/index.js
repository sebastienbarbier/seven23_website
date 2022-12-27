import Head from 'next/head'
import Link from 'next/link'

import * as React from 'react';
import Stack from '@mui/material/Stack';

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';Paper
import Paper from '@mui/material/Paper';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import DevicesIcon from '@mui/icons-material/Devices';
import SummarizeIcon from '@mui/icons-material/Summarize';

import Avatar from '@mui/material/Avatar';

import theme from '../components/theme';

const styles = {
  wrapper: {
    position: 'relative', 
    maxWidth: '40%',
  },
  tablet: {
    width: '100%'
  },
  mobile: {
    position: 'absolute',
    bottom: 18,
    right: 0,
    width: '26%',//100,
  },
  small: {
    padding: '10px 20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    textAlign: 'center'
  },
  large: {
    padding: '10px 20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 298,
    textAlign: 'center'
  },
};


export default function Home() {
  return (
    <Layout home>
      <Container>
        <section style={{ height: '70vh', maxHeight: 660, display: 'flex', alignItems: 'center' }}>
          <Stack direction="row-reverse" alignItems="center" justifyContent="space-between" spacing={4}>
            <div id="title_text">
              <Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                <Typography variant="h5" gutterBottom>Fully manual budget app to track personal expenses.<br />Completely <strong>opensource</strong>, with <strong>privacy by design</strong>.</Typography>
                <Button href="https://app.seven23.io" variant="contained" disableElevation>Launch app</Button>
                <Typography variant="subtitle2" gutterBottom>Try it now — No account needed</Typography> 
              </Stack>
            </div>
            <aside style={styles.wrapper}>
                <img
                    src="/images/screenshots/browser-transactions.png"
                    alt="Browser visual of Seven23"
                    style={styles.tablet} />
                <img
                    src="/images/screenshots/2-iphone-transactions.png"
                    alt="iPhone visual of Seven23"
                    style={styles.mobile} />
            </aside>
          </Stack>
        </section>
        {/* Responsive web application with offline capacity */}


        <Grid container spacing={2} mt={theme.spacing(4)}>

          <Grid item xs={12}>
            <p><strong>Seven23</strong> is a one person project design to answer the very simple question: <em>'How much did I spend in beers this month'</em>. Main idea is not to track your portfolio, how much you saved, or have left, but simply to understand where your money goes and identify potential cognitive biases.</p>
          </Grid>

          <Grid item xs={12} container direction="column" justifyContent="center" alignItems="center"  mt={theme.spacing(1)}>
            <Button href="/product" style={{float: 'right' }} variant="outlined" disableElevation>See all features</Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={theme.spacing(12)}>
          <Grid item xs={10}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={4}>
              <Avatar
                alt="Sébastien Barbier"
                src="/images/avatar/sebastienbarbier_profile_256.jpg"
                sx={{ width: 128, height: 128 }}
              />
              <div>
                <p><FormatQuoteIcon fontSize="large" style={{ float: 'left', marginRight: 10 }} />"I started this project in April 2011 as a way to track my expenses more efficiently. At the time, I was earning a relatively low salary of 723€ and needed to be mindful of my spending. This project began as a personal tool, but as I used it more and more, I realized that it could be helpful to others as well. As a result, I put in the time and effort to turn it into a SaaS application that could be used by a wider audience. I continue to use this tool on a daily basis and don't see myself stopping anytime soon.</p>
                <Typography variant="body2" display="block" gutterBottom>Sébastien Barbier, Founder.</Typography>
              </div>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center" style={{ marginTop: theme.spacing(4) }}>
              <Button href="/about-us" variant="outlined" disableElevation>More about us</Button>
            </Stack>
          </Grid>
        </Grid>
        <Stack direcion="column" justifyContent="center" alignItems="center" spacing={2}  mt={theme.spacing(12)} mb={theme.spacing(12)}>
          <h2 style={{ marginBottom: 8 }}>We made it very easy for you to try it.</h2>
          <p style={{ textAlign: 'center' }}>Our app is very easy to try out - you can use it directly in your browser without needing to create an account.<br/>If you like it, you can at any time sign up, select a subscription plan, and start syncing your data.</p>
          <Button href="https://app.seven23.io" variant="contained" disableElevation>Try it now</Button>
        </Stack>
      </Container>
    </Layout>
  )
}

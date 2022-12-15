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
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import DevicesIcon from '@mui/icons-material/Devices';
import SummarizeIcon from '@mui/icons-material/Summarize';

import Avatar from '@mui/material/Avatar';

import theme from '../components/theme';

const PHOTOS = []

export default function Home() {
  return (
    <Layout home>
      <Container>
        <section style={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={4}>
            <div id="title_text">
              <Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                <Typography variant="h5" gutterBottom>Fully manual budget app to track personal expenses.<br />Completely <strong>opensource</strong>, with <strong>privacy by design</strong>.</Typography>
                <Button href="https://app.seven23.io" variant="contained" disableElevation>Launch app</Button>
                <Typography variant="subtitle2" gutterBottom>Free Trial — No Credit Card Required</Typography> 
              </Stack>
            </div>
            <aside style={{maxWidth: '40%'}}>
                <img
                    src="/images/transactions-light.png"
                    alt="iPhone visual of Seven23" />
            </aside>
          </Stack>
        </section>
        {/* Responsive web application with offline capacity */}
        <Stack spacing={18}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <p>Monthly based transactions</p>
              Categorize your transactions and review as a monthly timeline to manage your budget. You can then review them per category to help understand where your money goes
            </Grid>
            <Grid item xs={6}>
              <p>Multi currency</p>
              Each transaction is registered using its original currency, then based on a list of past exchanges the app automatically convert them in the currency of your choice. You can switch currency as you wish.
            </Grid>
            <Grid item xs={4}>
              <EnhancedEncryptionIcon sx={{ fontSize: 60 }} />
              <p>End-to-end encryption with an opensource code base to guaranty confidentiality of your data.</p>
            </Grid>
            <Grid item xs={4}>
              <DevicesIcon sx={{ fontSize: 60 }} />
              <p>Responsive web application available on phone, tablet, or desktop. Can also be used offline then synced.</p>
            </Grid>
            <Grid item xs={4}>
              <SummarizeIcon sx={{ fontSize: 60 }} />
              <p>Browse and analyse your data to generate a report and compare different budgets.</p>
            </Grid>
            <Grid item xs={12} container direction="column" justifyContent="center" alignItems="center">
              <Button href="/product" style={{float: 'right' }} variant="outlined" disableElevation>See all features</Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={10}>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={4}>
                <Avatar
                  alt="Sébastien Barbier"
                  src="/images/avatar/sebastienbarbier_profile_256.jpg"
                  sx={{ width: 128, height: 128 }}
                />
                <div>
                  <p><FormatQuoteIcon fontSize="large" style={{ float: 'left', marginRight: 10 }} /> I started this project in April 2011 as I received a 723 euros salary which required me to track all expenses closly. It started as a side project, and  became a daily help on my financial tracking. This project could also help  friendsm and so time was invested to make it a saas version. I still use it  daily, and don't have plan to stop anytime soon. Expect it to last for ever.</p>
                  <Typography variant="body2" display="block" gutterBottom>Sébastien Barbier, Founder.</Typography>
                </div>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="center" style={{ marginTop: theme.spacing(4) }}>
                <Button variant="outlined" disableElevation>More about us</Button>
              </Stack>
            </Grid>
          </Grid>
          <Stack direcion="column" justifyContent="center" alignItems="center" spacing={2} style={{ paddingBottom: theme.spacing(12) }}>
            <h2 style={{ marginBottom: 8 }}>We made it very simple for you to try it.</h2>
            <p style={{ textAlign: 'center' }}>Our app is very easy to try out - you can use it directly in your browser without needing to create an account.<br/>If you like it, you can at any time sign up, select a subscription plan, and start syncing your data.</p>
            <Button href="https://app.seven23.io" variant="contained" disableElevation>Try it now</Button>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

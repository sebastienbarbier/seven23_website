import Head from 'next/head'
import Link from 'next/link'

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

import theme from '../components/theme';

const styles = {
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
  }
};


{/*<p><strong>And more to come (or not)</strong>: 🔑 Two-factor authentication, 🗄 tags, 🖇 attached files, 👬👬 shared budget, 📊 public profile, 🌏 locations, 🐑 social networks, and 🇫🇷 multi-langage.</p>*/}
export default function Product() {

  return (
    <Layout>
      <Container>

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

          <Grid container spacing={2} justifyContent="center">
            <Grid item md={12} lg={12}>
              <h2>What gets measured, gets managed</h2>
            </Grid>
            <Grid item md={3}>
              <h3>Dashboard</h3>
              <p>The application open on the dashboard which provide a quick view of the current situation.</p>
            </Grid>
            <Grid item md={3}>
              <h3>Report</h3>
              <p>Use the report view to analyse your spending for a specific date range.</p>
            </Grid>
            <Grid item md={3}>
              <h3>Exchange rate</h3>
              <p>When exchanging currency at an ATM or an exchanger shop, the applied rate never really match our expectation and often include hidden fees. To provide an accurate exchange rate, manually provide each exchange to let the application know how the actual rate.</p>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-around" spacing={2}>

            <Grid item md="auto">
              <h3>Privacy by design</h3>
            </Grid>
            <Grid item md={7} lg={7}>
              <p>We provides secure end-to-end encryption and an open source code base to protect the confidentiality of your data. This ensures that only you can access the communication and data within the application.</p>
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
              🎒 Integrated with Nomadlist
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

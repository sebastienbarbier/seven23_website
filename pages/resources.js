import Head from 'next/head'
import Link from 'next/link'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import TwitterIcon from '@mui/icons-material/Twitter';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HttpIcon from '@mui/icons-material/Http';

import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  icon: {
    width: 40,
    borderRadius: 4,
    marginRight: 10,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;'
  }
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

export default function Resources({ terms }) {
  return (
    <Layout>
      <Container>
        <h2>Resources</h2>

        <p>Everything you might be looking for as online resources from this project and which might be helpful.</p>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} lg={7}>
            <h3>Web application</h3>
            <p>The web application is the main way to interact with our backend.</p>
            <Stack spacing={2}>
              <Stack spacing={2} direction={{xs: 'column', lg: "row"}} alignItems="flex-start" justifyContent="flex-start">
                <Button href="https://app.seven23.io">
                  <img src="/images/icons/android-chrome-512x512.png" style={styles.icon} />Latest release (stable)
                </Button>
                <Button href="https://next.seven23.io">
                  <img src="/images/icons/android-chrome-512x512.png" style={styles.icon} />Next release (unstable)
                </Button>
              </Stack>
              <Stack direction={{xs: 'column', lg: "row"}} alignItems="flex-start" spacing={2}>
                <Button href="https://seven23.readthedocs.io/en/latest/">Documentation</Button>
                <Button href="https://github.com/sebastienbarbier/seven23" startIcon={<GitHubIcon />}>Code repository</Button>
                <Button href="https://github.com/sebastienbarbier/seven23/issues" startIcon={<BugReportIcon />}>Bug tracker</Button>
              </Stack>
            </Stack>
            <h3>Backend</h3>
            <p>To store and sync data, the application needs to connect to the backend.</p>
            <Stack spacing={2}>
              <Stack direction={{xs: 'column', lg: "row"}} alignItems="flex-start" spacing={2}>
                <Button href="https://api.seven23.io">api.seven23.io</Button>
                <Button href="https://seven23-server.readthedocs.io/en/latest/">Documentation</Button>
                <Button href="https://api.seven23.io/redoc/">Redoc</Button>
                <Button href="https://api.seven23.io/swagger/">Swagger</Button>
              </Stack>
              <Stack direction={{xs: 'column', lg: "row"}} alignItems="flex-start" spacing={2}>
                <Button href="https://github.com/sebastienbarbier/seven23_server" startIcon={<GitHubIcon />}>Code repository</Button>
                <Button href="https://github.com/sebastienbarbier/seven23_server/issues" startIcon={<BugReportIcon />}>Bug tracker</Button>
              </Stack>
            </Stack>

            <h3>Assets</h3>

            <Accordion style={{ boxShadow: 'None', '&:before': { display: 'none' } }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Logo and Icons</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container alignItems="flex-start" spacing={4} style={{ maxWidth: 400 }}>
                  <Grid item xs={12} sm={6}>
                    <a href="/images/svg/seven23.svg" download><img src="/images/svg/seven23.svg" alt="" /></a>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <a href="/images/svg/seven23_white.svg" download><img src="/images/svg/seven23_white.svg" alt="" style={{ background: '#333' }} /></a>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <a href="/images/svg/seven23_logo.svg" download><img src="/images/svg/seven23_logo.svg" alt="" /></a>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <a href="/images/svg/seven23_round.svg" download><img src="/images/svg/seven23_round.svg" alt="" /></a>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <a href="/images/svg/seven23_square.svg" download><img src="/images/svg/seven23_square.svg" alt="" /></a>
                  </Grid>
                  <Grid item xs={12} style={{ textAlign: 'center' }}><Typography variant="caption" gutterBottom>(Click to download)</Typography></Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>


          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} lg={4}>
            <h3>Around the project</h3>
            <h4>News feed</h4>
            <p>Latest news are share on the blog or on the  Twitter feed.</p>
            <Stack direction={{xs: 'column', lg: "row"}} alignItems="flex-start" spacing={0.5}>
              <Button href="https://blog.seven23.io">Blog</Button>
              <Button href="https://twitter.com/seven23_app" startIcon={<TwitterIcon />}>Twitter</Button>
            </Stack>
            <h4>System status</h4>
            <p>This page displays the live status of seven23's services</p>
            <Button href="https://status.seven23.io" startIcon={<HttpIcon />}>status.seven23.io</Button>
            <h4>Generate data set</h4>
            <p>Quickly generate a fake data set to import for testing purposes.</p>
            <Button href="https://generator.seven23.io" startIcon={<HttpIcon />}>generator.seven23.io</Button>
            <h4>About this website</h4>
            <p>This website is open source. View the code on GitHub.</p>
            <Button href="https://github.com/sebastienbarbier/seven23_website" startIcon={<GitHubIcon />}>Code repository</Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

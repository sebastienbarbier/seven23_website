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
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

import TwitterIcon from '@mui/icons-material/Twitter';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HttpIcon from '@mui/icons-material/Http';

export default function Resources({ terms }) {
  return (
    <Layout>
      <Container>
        <h2>Resources</h2>

        <p>Everything you might be looking for as online resources from this project and which might be helpful.</p>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs>
            <h3>Web application</h3>
            <p>The web application is the main way to interact with our backend.</p>
            <Button href="https://app.seven23.io">Launch app</Button>
            <Button href="https://next.seven23.io">Next release (unstable)</Button>
            <Button href="https://seven23.readthedocs.io/en/latest/">Documentation</Button><br/>
            <Button href="https://github.com/sebastienbarbier/seven23" startIcon={<GitHubIcon />}>Code repository</Button>
            <Button href="https://github.com/sebastienbarbier/seven23/issues" startIcon={<BugReportIcon />}>Bug tracker</Button>
            <h3>Backend</h3>
            <p>To store and sync data, the application needs to connect to the backend.</p>
            <Button href="https://api.seven23.io">api.seven23.io</Button>
            <Button href="https://seven23-server.readthedocs.io/en/latest/">Documentation</Button>
            <Button href="https://api.seven23.io/redoc/">Redoc</Button>
            <Button href="https://api.seven23.io/swagger/">Swagger</Button><br/>
            <Button href="https://github.com/sebastienbarbier/seven23_server" startIcon={<GitHubIcon />}>Code repository</Button>
            <Button href="https://github.com/sebastienbarbier/seven23_server/issues" startIcon={<BugReportIcon />}>Bug tracker</Button>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={4}>
            <h3>Around the project</h3>
            <h4>News feed</h4>
            <p>The latest news can be found on our blog or on our Twitter feed.</p>
            <Stack direction="row" spacing={0.5}>
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

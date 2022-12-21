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

export default function Resources({ terms }) {
  return (
    <Layout>
      <Container>
        <h2>Resources</h2>

        <p>Here is a list of online resources used for this project and which might be helpful. Seven23 is an open source project with privacy en transparency by design</p>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            <h3>Web application</h3>
            <p>The web application is the main way to interact with our backend.</p>
            <Button href="https://app.seven23.io">app.seven23.io</Button>
            <Button href="https://seven23.readthedocs.io/en/latest/">Documentation</Button>
            <Button href="https://github.com/sebastienbarbier/seven23">Code repository</Button>
            <Button href="https://github.com/sebastienbarbier/seven23/issues">Bug tracker</Button>
            <Button href="https://next.seven23.io">Next release (unstable)</Button>
            <Button href="https://github.com/sebastienbarbier/seven23/blob/main/CHANGELOG.md">Change log</Button>
          </Grid>
          <Grid item xs={6}>
            <h3>Backend</h3>
            <p>To store and sync data, the application needs to connect to the backend.</p>
            <Button href="https://api.seven23.io">api.seven23.io</Button>
            <Button href="https://seven23-server.readthedocs.io/en/latest/">Documentation</Button>
            <Button href="https://api.seven23.io/redoc/">Redoc</Button>
            <Button href="https://api.seven23.io/swagger/">Swagger</Button>
            <Button href="https://github.com/sebastienbarbier/seven23_server">Code repository</Button>
            <Button href="https://github.com/sebastienbarbier/seven23_server/issues">Bug tracker</Button>
          </Grid>

          <Grid item xs={4}>
            <h3>News feed</h3>
            <p>The latest news can be found on our blog or on our Twitter feed.</p>
            <Button href="https://blog.seven23.io">Blog</Button>
            <Button href="https://twitter.com/seven23_app">Twitter</Button>
          </Grid>

          <Grid item xs={4}>
            <h3>Generate data set</h3>
            <p>Quickly generate a fake data set to import into the app for testing purposes.</p>
            <Button href="https://generator.seven23.io">generator.seven23.io</Button>
          </Grid>

          <Grid item xs={4}>
            <h3>System status</h3>
            <p>This page displays the live status of seven23's services</p>
            <Button href="https://status.seven23.io">status.seven23.io</Button>
          </Grid>

          <Grid item xs={12}>
            <h3>About this website</h3>
            <p>This website is open source. View the code on GitHub.</p>
            <Button href="https://github.com/sebastienbarbier/seven23_website">Code repository</Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

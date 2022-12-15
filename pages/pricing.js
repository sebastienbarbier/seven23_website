import Head from 'next/head'
import Link from 'next/link'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { getTermsData } from '../lib/posts'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

export async function getStaticProps() {
  const terms = await getTermsData()
  return {
    props: {
      terms
    }
  }
}

export default function Pricing({ terms }) {
  return (
    <Layout>
      <Container>
        <h2>Pricing</h2>
        <Grid container spacing={2}>
          <Grid item md={12} lg={6} className="price">
            <h3>Self hosted</h3>
            <p>Install on your own server at <strong>no extra cost</strong> and use the <strong>official app</strong> to access it. We even provide a <strong>one-click install</strong> for a few cloud plateform to make the process easier.</p>
            <div>
                <p>0<span>€</span><small>/ forever</small></p>
                <Button href="https://seven23-server.readthedocs.io/en/latest/index.html">See documentation</Button>
            </div>
          </Grid>
          <Grid item md={12} lg={6} className="price">
            <h3>As a Service</h3>
            <p>If you do not want to be in change of your own instance, we provide an <strong>official version</strong> as this website. We will perform <strong>maintenance</strong> and <strong>backups</strong> for you in exchange of a <strong>yearly subscription</strong>.</p>
            <p className="trial_period">After a {terms.trial_period}-day trial period</p>
            <div>
                <p>{terms ? terms.products[0].price : '--'}<span>€</span><small>/ year</small></p>
            </div>
          </Grid>
        </Grid>

        <h2>We contribute back</h2>
        <p>10% goes directly to projects we love</p>

        <h2>FAQ</h2>
        <h3>Who is behind Seven23 ?</h3>
        <p>My name is <strong>Sébastien Barbier</strong>, I am a french developer who developed Seven23 as a <strong>side-project</strong> to help me track my expenses. After way too many years of work, as the application was taking shapes I decided to open it and build an hosting offer to help financing its development. <strong>I personnaly use it on daily basis</strong> so you can be sure <strong>I will take good care of it</strong>.</p>
        <h3>Can I connect and automatically sync my bank account ?</h3>
        <p><strong>No</strong>, this is the main request from users, but our philisophy is to keep the app fully manual.</p>
        <h3>Are my data encrypted ?</h3>
        <p>Confidential data are encrypted <strong>on your device</strong> when sended to our server using JSON Web Encryption (JWE), and in <strong>all communication</strong> using HTTPS. <strong>We do not have access to your data</strong>. However, they need to be stored <strong>unencrypted on your device</strong> to run in-app. Meaning if someone access your device, this person can access your data.</p>
        <h3>Can I help and constribute ?</h3>
        <p><strong>We love community feedback</strong> and are glad to review contributions of any size - from typos in the documentation to critical bug fixes - so don’t be shy!</p>
      </Container>
    </Layout>
  )
}

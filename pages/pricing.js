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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export async function getStaticProps() {
  const terms = await getTermsData()
  return {
    props: {
      terms
    }
  }
}

const FAQ = [
  {
    q: 'Can I connect and automatically sync my bank account ?',
    a: '<strong>No</strong>, this is the main request from users, but our philisophy is to keep the app fully manual.',
  },
  {
    q: 'Are my data encrypted ?',
    a: 'Confidential data are encrypted <strong>on your device</strong> when sended to our server using JSON Web Encryption (JWE), and in <strong>all communication</strong> using HTTPS. <strong>We do not have access to your data</strong>. However, they need to be stored <strong>unencrypted on your device</strong> to run in-app. Meaning if someone access your device, this person can access your data.',
  },
  {
    q: 'Can I help and constribute ?',
    a: '<strong>We love community feedback</strong> and are glad to review contributions of any size - from typos in the documentation to critical bug fixes - so don’t be shy!',
  }
];

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

        { FAQ.map((item) => {
          return <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography dangerouslySetInnerHTML={ {__html: item.q} }></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography dangerouslySetInnerHTML={ {__html: item.a} }></Typography>
            </AccordionDetails>
          </Accordion>
        })}

      </Container>
    </Layout>
  )
}

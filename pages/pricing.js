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
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import theme from '../components/theme';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
        <Grid container spacing={4} justifyContent="center"  sx={{ pt: 6, pb: 6}}>
          <Grid item md={12} lg={4}>
            <h2>Pricing</h2>
            <Paper variant="outlined" elevation={3} style={{ padding: '6px 20px', margin: '30px 0 0'}}>
              <Stack spacing={2} direciton="column" justifyContent="center">

                <p style={{ fontSize: 42, lineHeight: 0.7, marginBottom: 10, textAlign: 'center' }}>
                  {terms ? terms.products[0].price : '--'}<span>€</span>
                  <br/>
                  <small style={{ fontSize: 12, textTransform: 'uppercase', fontWeight: 600, opacity: 0.8}}>per year</small>
                </p>

                <Stack direction="column" spacing={0} divider={<Divider/>}>
                  <p style={{ display: 'inline', verticalAlign: 'bottom', alignItems: 'bottom' }}>
                     <CheckCircleOutlineIcon style={{ marginRight: 8, top: 5, position: 'relative' }} color="success" />
                     { terms.trial_period } days trial period, <span style={{ fontSize: '0.8em' }}>no credit card needed</span>
                  </p>
                  <p style={{ display: 'inline', verticalAlign: 'bottom'}}>
                    <CheckCircleOutlineIcon style={{ marginRight: 8, top: 5, position: 'relative' }} color="success" />
                    Multi device syncing
                  </p>
                  <p style={{ display: 'inline', verticalAlign: 'bottom'}}>
                    <CheckCircleOutlineIcon style={{ marginRight: 8, top: 5, position: 'relative' }} color="success" />
                    Encrypted data backup
                  </p>
                  <Stack style={{ paddingTop: theme.spacing(1), paddingBottom: theme.spacing(2) }}>
                    <p style={{ textAlign: 'center', fontWeight: 400 }}>All data are hosted in France</p>
                    <Stack 
                      spacing={3} 
                      direction="row" 
                      alignItems="center" 
                      justifyContent="center">
                      <p style={{ display: 'flex', alignItems: 'center'  }}>
                        <a href="https://clever-cloud.com"><img style={{ width: 120, marginRight: 7 }} src="/images/svg/clevercloud_mono_logo.svg"/></a>
                      </p>
                      <p style={{ display: 'flex', alignItems: 'center'  }}>
                        <a href="https://ovh.com"><img style={{ width: 120, marginRight: 7 }} src="/images/svg/ovh_mono_logo.svg"/></a>
                      </p>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>  
            </Paper>
            <p style={{ textAlign: 'center', fontSize: 14, opacity: 0.8, fontStyle: 'italic', marginTop: theme.spacing(2) }}>Subscription in handle directly in app</p>
          </Grid>
        </Grid>


        <h3>We contribute back</h3>
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

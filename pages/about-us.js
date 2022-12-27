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

import Avatar from '@mui/material/Avatar'

export default function AboutUs() {
  return (
    <Layout>
      <Container>
        <h2>About us</h2>
        <p>Seven23 is a one person project, open source and free to use under a permissive MIT licence. Our goal for the future is to keep it simple and running without issues.</p>
        
        <h3>Team</h3>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack>
              <Paper variant="outlined" style={{ padding: '18px 26px'}}>
                <Stack direction="row" spacing={4} alignItems="center">
                  <Avatar
                    alt="Sébastien Barbier"
                    src="/images/avatar/sebastienbarbier_profile_256.jpg"
                    sx={{ width: 80, height: 80 }}
                  />
                  <p style={{ fontSize: 18, fontWeight: 500 }}>Sébastien Barbier</p>
                </Stack>
              </Paper>
            </Stack>  
          </Grid>
        </Grid>

        <h3>Contributors</h3>
        <p>Thanks to the contributors who helped improving this project.</p>

        <h2>Contact</h2>
        <p>If you have any questions or need assistance, please don't hesitate to reach out to us. You can contact us by <a href="mailto:contact@seven23.io">email</a> or <a target="_blank" href="https://twitter.com/Seven23_app">twitter</a>, and we will do our best to get back to you as soon as possible.</p>
      </Container>
    </Layout>
  )
}

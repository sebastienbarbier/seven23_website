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
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Avatar from '@mui/material/Avatar'

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HttpIcon from '@mui/icons-material/Http';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function AboutUs() {
  return (
    <Layout>
      <Container>


        <h2>About us</h2>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4} style={{ paddingRight: 20 }}>
            <p>This project is not yet sustainable and fully maintained by volonteers. It is <strong>open source</strong>, and free to use under a permissive <strong>MIT licence</strong>.</p>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 12, sm: 4 }} alignItems={{ xs: 'flex-start', sm: 'center' }} >
                <Avatar
                  alt="Sébastien Barbier"
                  src="/images/avatar/sebastienbarbier_profile_256.jpg"
                  sx={{ width: 160, height: 160 }}
                  variant="rounded"
                />
                <Stack direction="column" spacing={0}>
                  <Typography variant="h6">Sébastien Barbier</Typography>
                  <Typography variant="subtitle2">Cofounder</Typography>
                  <p>Sébastien is a Cloud Software Architect from France currently based in Zurich.</p>
                  <Stack direction="row" spacing={1}>
                    <IconButton href="https://www.linkedin.com/in/sebbarbier/">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://twitter.com/SebBarbier">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton href="https://github.com/sebastienbarbier/">
                      <GitHubIcon />
                    </IconButton>
                    <IconButton href="https://sebastienbarbier.com">
                      <HttpIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
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

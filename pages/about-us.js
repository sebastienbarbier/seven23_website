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

import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar'

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HttpIcon from '@mui/icons-material/Http';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function AboutUs({contributors}) {

  return (
    <Layout>
      <Container>

        <h2>About us</h2>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <p>This project is not yet sustainable and fully maintained by volonteers. It is <strong>open source</strong>, and free to use under a permissive <strong>MIT licence</strong>.</p>
          </Grid>
        </Grid>

        <h3>Main contributors</h3>


        <Grid container spacing={4} justifyContent="center" sx={{ pb: 4 }}>
          <Grid item xs={12} md={7}>
            <Paper variant="outlined" sx={{ padding: { xs: 2, sm: 0 }}}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 4 }} alignItems={{ xs: 'flex-start', sm: 'center' }} >
                <Avatar
                  alt="Sébastien Barbier"
                  src="/images/avatar/sebastienbarbier_profile_256.jpg"
                  sx={{ width: 192, height: 192 }}
                  variant="rounded"
                />
                <Stack direction="column" spacing={0} sx={{ pt: {xs: 0, sm: 1}, pb: {xs: 0, sm: 1} }}>
                  <Box sx={{ pb: 1 }}>
                    <Typography variant="h6">Sébastien Barbier</Typography>
                    <Typography variant="subtitle2">Cofounder</Typography>
                  </Box>
                  <Typography variant="body2">Sébastien is a Cloud Software Architect from France currently based in Zurich.</Typography>
                  <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
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
            </Paper>
          </Grid>
        </Grid>

        <h3>Contributors</h3>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <p>Thanks to the contributors who helped improving this project.</p>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} md={7}>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              style={{ width: '100%' }}
            >
            { contributors.map(contributor => (
                <a href={contributor.html_url} sx={{ textAlign: 'center' }} style={{ textDecoration: 'none' }}>
                  <Paper variant="outlined" sx={{ padding: 2 }}  key={contributor.login}>
                    <Stack alignItems="center" spacing={1}>
                      <Avatar
                          alt={`Avatar for ${contributor.login}`}
                          src={contributor.avatar_url}
                          sx={{ width: 80, height: 80 }}
                          variant="rounded"
                        />
                      <Typography variant="subtitle2" component="p">{contributor.login}</Typography>
                    </Stack>
                  </Paper>
                </a>
            ))}
            </Stack>

          </Grid>
        </Grid>

        <h2>Contact</h2>
        <p>If you have any questions or need assistance, please don't hesitate to reach out to us. You can contact us by <a href="mailto:contact@seven23.io">email</a> or <a target="_blank" href="https://twitter.com/Seven23_app">twitter</a>, and we will do our best to get back to you as soon as possible.</p>
      </Container>
    </Layout>
  )
}

const IGNORE_USER = ['sebastienbarbier', 'dependabot[bot]']

// This function fetch all contributors from seven23 and seven23_server project, remove blacklisted one,
// merge the user whose contributed in both projects, and sort the final result by contributions.
AboutUs.getInitialProps = async (ctx) => {
   const responseSeven23 = await fetch('https://api.github.com/repos/sebastienbarbier/seven23/contributors');
    const contributorsSeven23 = await responseSeven23.json();

    const responseSeven23Server = await fetch('https://api.github.com/repos/sebastienbarbier/seven23_server/contributors');
    const contributorsSeven23Server = await responseSeven23Server.json();

    let contributors = [...contributorsSeven23, ...contributorsSeven23Server];

    // Remove myself and dependabot from contributors (sorry bot).
    contributors = contributors.filter(c => !IGNORE_USER.includes(c.login));

    contributors = contributors.reduce((acc, obj) => {
      if (!acc[obj.id]) {
        acc[obj.id] = obj;
      } else {
        acc[obj.id].contributions += obj.contributions;
      }
      return acc;
    }, {});

    contributors = Object.values(contributors);

    // sort by contributions
    contributors = contributors.sort((a, b) => b.contributions - a.contributions);

    return {
      contributors,
    };
}

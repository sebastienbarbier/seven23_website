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

export default function AboutUs() {
  return (
    <Layout>
      <Container>
        <h2>About us</h2>
        <p>Team</p>

        <p>Include an army of robots</p>

        <section>
          <h2>Contact</h2>
          <p>If any questions or any needs, you can reach to me by <a href="mailto:contact@seven23.io">email</a> or over <a target="_blank" href="https://twitter.com/Seven23_app">twitter</a>.</p>
        </section>

      </Container>
    </Layout>
  )
}

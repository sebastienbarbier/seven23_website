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
        <ul>
          <li>Application</li>
          <li>Next version</li>
          <li>Blog</li>
          <li>Twitter</li>
          <li>Client documentation</li>
          <li>Server documentation</li>
          <li>Client repository and bug tracker</li>
          <li>Server repository and bug tracker</li>
          <li>Generator</li>
          <li>Website repository</li>
          <li>Status page</li>
        </ul>
        <h3>Assets</h3>
        <p>Assets to download: logo, icon, etc.</p>
      </Container>
    </Layout>
  )
}

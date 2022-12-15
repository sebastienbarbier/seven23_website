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

export default function Product() {
  return (
    <Layout>
      <Container>
        <h2>Product</h2>
        <Grid container spacing={8}>
          <Grid item md={12} lg={6}>
                <h3>Monthly based transactions</h3>
                <p><strong>Categorize your transactions</strong> and review as a <strong>monthly timeline</strong> to manage your budget. You can then <strong>review them per category</strong> to help understand where your money goes</p>
                <img src="/images/01-transactions-desktop-light.png" alt="" />

          </Grid>
          <Grid item md={12} lg={6}>
                <h3>Multi currency</h3>
                <p>Each transaction is registered using <strong>its original currency</strong>, then based on a list of past exchanges the app <strong>automatically convert</strong> them in the currency of your choice. You can <strong>switch currency</strong> as you wish.</p>
                <img src="/images/01-change-desktop-light.png" alt="" />
          </Grid>

          <Grid item md={12} lg={4}>
                <h3>Privacy by design</h3>
                <p><strong>End-to-end encryption</strong> with an <strong>opensource</strong> code base to  guaranty confidentiality of your data..</p>
          </Grid>

          <Grid item md={12} lg={4}>
                <h3>Sync across devices</h3>
                <p>This is a web application which works on <strong>phone, tablet and desktop</strong>. Can also be used <strong>offline</strong> then synced.</p>
          </Grid>

          <Grid item md={12} lg={4}>
                <h3>Reporting</h3>
                <p><strong>Browse and analyse</strong> your data to generate a report and <strong>compare</strong> different budgets.</p>
          </Grid>
          
          <Grid item md={12} lg={12}>
                <p><strong>Also include</strong>: 👥 multi-account, 💱 Convertor, 🌗 dark mode, 📥 import/export, 💚 opensource, 👩‍💻 API access, 🏠 Self-hostable.</p>
                <p><strong>And more to come (or not)</strong>: 🔑 Two-factor authentication, 🗄 tags, 🖇 attached files, 👬👬 shared budget, 📊 public profile, 🌏 locations, 🐑 social networks, and 🇫🇷 multi-langage.</p>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

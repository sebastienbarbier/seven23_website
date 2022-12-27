import Head from 'next/head'
import Link from 'next/link'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import { getTermsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

import Container from '@mui/material/Container'

export async function getStaticProps() {
  const terms = await getTermsData()
  return {
    props: {
      terms
    }
  }
}

export default function Legals({ terms }) {
  return (
    <Layout>
      <Container>

        <h2>Legals & Copyright</h2>

        <h3>Author</h3>

        <p>Mr Sebastien BARBIER<br />
        Contact : contact@sebastienbarbier.com</p>

        <h3>Hosting</h3>

        <p>Clever Cloud SAS<br />
        3 rue de l'Allier<br />
        44000 Nantes, France.<br />
        Website : www.clever-cloud.com<br />
        General support (commercial and other requests): +33 2 85 52 07 69<br />
        Technical support: support@clever-cloud.com.</p>

        <h3>Licence</h3>

        <p>Application and website is licensed under a MIT licence.</p>

        { terms ? <div dangerouslySetInnerHTML={{__html: terms.terms_and_conditions}}></div> : <div></div> }
      </Container>
    </Layout>
  )
}

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

export default function Terms({ terms }) {
  return (
    <Layout>
      <Container>

        { terms ? <div dangerouslySetInnerHTML={{__html: terms.terms_and_conditions}}></div> : <div></div> }
      </Container>
    </Layout>
  )
}

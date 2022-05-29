import Head from 'next/head'
import Link from 'next/link'

import * as React from 'react';
import Stack from '@mui/material/Stack';

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import { getTermsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

import Container from '@mui/material/Container';

export async function getStaticProps() {
  const terms = await getTermsData()
  return {
    props: {
      terms
    }
  }
}

const PHOTOS = [
    {
        "small": "images/screenshots/small/01-dashboard-desktop-light.png",
        "large": "images/screenshots/large/01-dashboard-desktop-light.png",
        "alt": "Seven23 dashboard desktop"
    },
    {
        "small": "images/screenshots/small/01-dashboard-mobile-light.png",
        "large": "images/screenshots/large/01-dashboard-mobile-light.png",
        "alt": "Seven23 dashboard mobile"
    },
    {
        "small": "images/screenshots/small/01-transactions-desktop-light.png",
        "large": "images/screenshots/large/01-transactions-desktop-light.png",
        "alt": "Seven23 transactions desktop"
    },
    {
        "small": "images/screenshots/small/01-transactions-mobile-light.png",
        "large": "images/screenshots/large/01-transactions-mobile-light.png",
        "alt": "Seven23 transactions mobile"
    },
    {
        "small": "images/screenshots/small/01-categories-desktop-light.png",
        "large": "images/screenshots/large/01-categories-desktop-light.png",
        "alt": "Seven23 categories desktop"
    },
    {
        "small": "images/screenshots/small/01-categories-mobile-light.png",
        "large": "images/screenshots/large/01-categories-mobile-light.png",
        "alt": "Seven23 categories mobile"
    },
    {
        "small": "images/screenshots/small/01-change-desktop-light.png",
        "large": "images/screenshots/large/01-change-desktop-light.png",
        "alt": "Seven23 change desktop"
    },
    {
        "small": "images/screenshots/small/01-change-mobile-light.png",
        "large": "images/screenshots/large/01-change-mobile-light.png",
        "alt": "Seven23 change mobile"
    },
    {
        "small": "images/screenshots/small/01-report-desktop-light.png",
        "large": "images/screenshots/large/01-report-desktop-light.png",
        "alt": "Seven23 report desktop"
    },
    {
        "small": "images/screenshots/small/01-report-mobile-light.png",
        "large": "images/screenshots/large/01-report-mobile-light.png",
        "alt": "Seven23 report mobile"
    }
]

export default function Home({ terms }) {
  return (
    <Layout home>
      <section id="features">
          <h2>Features</h2>
          <ul>
              <li>
                  <h3>Monthly based transactions</h3>
                  <p><strong>Categorize your transactions</strong> and review as a <strong>monthly timeline</strong> to manage your budget. You can then <strong>review them per category</strong> to help understand where your money goes</p>
                  <img src="/images/01-transactions-desktop-light.png" alt="" />
              </li>
              <li>
                  <h3>Multi currency</h3>
                  <p>Each transaction is registered using <strong>its original currency</strong>, then based on a list of past exchanges the app <strong>automatically convert</strong> them in the currency of your choice. You can <strong>switch currency</strong> as you wish.</p>
                  <img src="/images/01-change-desktop-light.png" alt="" />
              </li>
              <li>
                  <h3>Privacy by design</h3>
                  <p><strong>End-to-end encryption</strong> with an <strong>opensource</strong> code base to  guaranty confidentiality of your data..</p>
              </li>
              <li>
                  <h3>Sync across devices</h3>
                  <p>This is a web application which works on <strong>phone, tablet and desktop</strong>. Can also be used <strong>offline</strong> then synced.</p>
              </li>
              <li>
                  <h3>Reporting</h3>
                  <p><strong>Browse and analyse</strong> your data to generate a report and <strong>compare</strong> different budgets.</p>
              </li>
              <li>
                  <p><strong>Also include</strong>: 👥 multi-account, 💱 Convertor, 🌗 dark mode, 📥 import/export, 💚 opensource, 👩‍💻 API access, 🏠 Self-hostable.</p>
                  <p><strong>And more to come</strong>: 🔑 Two-factor authentication, 🗄 tags, 🖇 attached files, 👬👬 shared budget, 📊 public profile, 🌏 locations, 🐑 social networks, and 🇫🇷 multi-langage.</p>
              </li>
          </ul>
      </section>
      <section id="gallery">
          <h2>Gallery</h2>
          <div className="gallery">

            <input type="radio" name="gallery" id="no_gallery" defaultChecked onChange={() => ''} />
            <div className="gallery_list">

              <ul className="thumbnails">
                { PHOTOS.map((photo, index) => (
                  <li key={index}>
                      <label htmlFor={`gallery-${index}`}>
                         <img src={ photo.small } alt={ photo.alt } />
                      </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gallery_fullscreen">
              <header>
                <label htmlFor="no_gallery">
                  <svg height="32px" version="1.1" viewBox="0 0 512 512" width="32px"><path className="svgFillWhite" d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
                </label>
              </header>
              <ul>
                { PHOTOS.map((photo, index) => (
                  <li key={index}>
                      <input type="radio" name="gallery" id={`gallery-${index}`} />
                      <div className="viewer">
                        <img src={photo.large} alt={ photo.alt } />
                        <div className="previous">
                        {(() => {
                          if (index != 0) return <label htmlFor={`gallery-${index-1}`}></label>
                        })()}
                        </div>
                        <div className="next">
                          {(() => {
                            if (index != PHOTOS.length-1) return <label htmlFor={`gallery-${index+1}`}></label>
                          })()}
                        </div>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
        </div>
      </section>
      <section id="pricing">
          <h2>Pricing</h2>
          <ul>
              <li>
                  <h3>Self hosted</h3>
                  <p>Install on your own server at <strong>no extra cost</strong> and use the <strong>official app</strong> to access it. We even provide a <strong>one-click install</strong> for a few cloud plateform to make the process easier.</p>
                  <div>
                      <p>0<span>€</span><small>/ forever</small></p>
                      <a href="https://seven23-server.readthedocs.io/en/latest/index.html">See documentation</a>
                  </div>
              </li>
              <li>
                  <h3>As a Service</h3>
                  <p>If you do not want to be in change of your own instance, we provide an <strong>official version</strong> as this website. We will perform <strong>maintenance</strong> and <strong>backups</strong> for you in exchange of a <strong>yearly subscription</strong>.</p>
                  <p className="trial_period">After a {terms.trial_period}-day trial period</p>
                  <div>
                      <p>{terms ? terms.products[0].price : '--'}<span>€</span><small>/ year</small></p>
                  </div>
              </li>
          </ul>
      </section>
      <section id="faq">
          <h2>FAQ</h2>
          <h3>Who is behind Seven23 ?</h3>
          <p>My name is <strong>Sébastien Barbier</strong>, I am a french developer who developed Seven23 as a <strong>side-project</strong> to help me track my expenses. After way too many years of work, as the application was taking shapes I decided to open it and build an hosting offer to help financing its development. <strong>I personnaly use it on daily basis</strong> so you can be sure <strong>I will take good care of it</strong>.</p>
          <h3>Can I connect and automatically sync my bank account ?</h3>
          <p><strong>No</strong>, this is the main request from users, but our philisophy is to keep the app fully manual.</p>
          <h3>Are my data encrypted ?</h3>
          <p>Confidential data are encrypted <strong>on your device</strong> when sended to our server using JSON Web Encryption (JWE), and in <strong>all communication</strong> using HTTPS. <strong>We do not have access to your data</strong>. However, they need to be stored <strong>unencrypted on your device</strong> to run in-app. Meaning if someone access your device, this person can access your data.</p>
          <h3>Can I help and constribute ?</h3>
          <p><strong>We love community feedback</strong> and are glad to review contributions of any size - from typos in the documentation to critical bug fixes - so don’t be shy!</p>
      </section>
      <section id="contact">
          <h2>Contact</h2>
          <p>If any questions or any needs, you can reach to me by <a href="mailto:seven23@sebastienbarbier.com">email</a> or over <a target="_blank" href="https://twitter.com/SebBarbier">twitter</a>.</p>
      </section>
    </Layout>
  )
}

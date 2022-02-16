import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getTermsData() {
  let response = await fetch('https://seven23.io/api/init')
  let json = await response.json()
  return json
}

import * as React from 'react'
import type { HeadFC } from 'gatsby'
import '../styles/global.css'

import { createClient } from '@supabase/supabase-js'
import { Database } from 'lib/database.types'

const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
const IndexPage = () => {
  return null
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

interface Database {
  public: {
    Tables: {
      movies: {
        Row: {} // The data expected to be returned from a "select" statement.
        Insert: {} // The data expected passed to an "insert" statement.
        Update: {} // The data expected passed to an "update" statement.
      }
    }
  }
}

import { User } from '@supabase/supabase-js'
import { PageProps } from 'gatsby'

export type PageAuthProps = PageProps & {
  user: User
}

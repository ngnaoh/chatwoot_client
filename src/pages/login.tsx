import { GetServerDataProps } from 'gatsby'
import React from 'react'

const Login = () => {
  return <div>login</div>
}

export default Login

export async function getServerData(context: GetServerDataProps) {
  console.log('context', context)

  return {
    status: 200, // The HTTP status code that should be returned
    props: {}, // Will be passed to the page component as "serverData" prop
    headers: {}, // HTTP response headers for this page
  }
}

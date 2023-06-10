'use-strict'

import { CreatePageArgs } from 'gatsby'

exports.createPages = async ({ actions }: CreatePageArgs) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/',
    toPath: '/login/',
    exactPath: true,
    isPermanent: false,
    redirectInBrowser: true,
  })
}

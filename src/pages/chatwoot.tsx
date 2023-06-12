import { HeadFC } from 'gatsby'
import React, { FC } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import withAuth from '../HoCs/withAuth'
import ChatwootContainer from '../containers/ChatwootContainer'
import { PageAuthProps } from '../utils/types'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'

const Chatwoot: FC<PageAuthProps> = ({ user, ...props }) => {
  if (user) {
    return <ChatwootContainer user={user} {...props} />
  }
  return null
}

export default withAuth(Chatwoot)

export const Head: HeadFC = () => <title>Chat page</title>

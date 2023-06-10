import {
  Avatar,
  ChatContainer,
  Conversation,
  ConversationHeader,
  ConversationList,
  ConversationProps,
  EllipsisButton,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  Search,
  Sidebar,
  TypingIndicator,
  VideoCallButton,
  VoiceCallButton,
} from '@chatscope/chat-ui-kit-react'
import { HeadFC } from 'gatsby'
import React, { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'

const zoeIco = 'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'
const lillyIco = 'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'

const conversations: ConversationProps[] = [
  {
    name: 'Lilly',
    lastSenderName: 'Lilly',
    unreadCnt: 3,
  },
]

const Chatwoot = () => {
  const [messageInputValue, setMessageInputValue] = useState('')
  return (
    <main
      style={{
        height: '100vh',
        position: 'relative',
      }}>
      <MainContainer responsive>
        <Sidebar position='left' scrollable={false}>
          <Search placeholder='Search...' />
          <ConversationList>
            {conversations.map((conv) => (
              <Conversation
                name={conv.name}
                lastSenderName={conv.name}
                info='Yes i can do it for you'>
                <Avatar src={lillyIco} status='available' />
              </Conversation>
            ))}
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={zoeIco} name='Zoe' />
            <ConversationHeader.Content userName='Zoe' info='Active 10 mins ago' />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <EllipsisButton orientation='vertical' />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList typingIndicator={<TypingIndicator content='Zoe is typing' />}>
            <MessageSeparator content='Saturday, 30 November 2019' />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'single',
              }}>
              <Avatar src={zoeIco} name='Zoe' />
            </Message>
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'single',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'first',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'normal',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'normal',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'last',
              }}>
              <Avatar src={zoeIco} name='Zoe' />
            </Message>
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'first',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'normal',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'normal',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'last',
              }}
            />

            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'first',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'last',
              }}>
              <Avatar src={zoeIco} name='Zoe' />
            </Message>
          </MessageList>
          <MessageInput
            placeholder='Type message here'
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
          />
        </ChatContainer>
      </MainContainer>
    </main>
  )
}

export default Chatwoot

export const Head: HeadFC = () => <title>Chat page</title>

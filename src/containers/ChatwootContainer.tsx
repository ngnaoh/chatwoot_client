import React, { useState } from 'react'
import {
  Avatar,
  Button,
  ChatContainer,
  Conversation,
  ConversationHeader,
  ConversationList,
  ConversationProps,
  EllipsisButton,
  ExpansionPanel,
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
import { navigate } from 'gatsby'
import { supabase } from '../services/supabase'
import { PageAuthProps } from '../utils/types'

const zoeIco = 'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'
const lillyIco = 'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'

const conversations: ConversationProps[] = [
  {
    name: 'Lilly',
    lastSenderName: 'Lilly',
    unreadCnt: 3,
  },
]

type ChatwootContainerProps = PageAuthProps & {}

const ChatwootContainer = ({ user }: ChatwootContainerProps) => {
  const [messageInputValue, setMessageInputValue] = useState('')

  const signOut = () => {
    supabase.auth.signOut().then(() => {
      navigate('/sign-in')
    })
  }

  console.log(user)

  return (
    <main className='h-screen relative'>
      <MainContainer responsive>
        <Sidebar position='left' scrollable={false}>
          <ExpansionPanel title={user.email}>
            <div className='flex justify-between'>
              <Avatar src={zoeIco} name={user.email} />
              <Button onClick={signOut} border>
                Sign Out
              </Button>
            </div>
          </ExpansionPanel>
          <Search placeholder='Search...' />
          <ConversationList>
            {conversations.map((conv, index) => (
              <Conversation
                key={index}
                name={conv.name}
                lastSenderName={conv.name}
                unreadCnt={conv.unreadCnt}
                active={conv.active}
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

export default ChatwootContainer

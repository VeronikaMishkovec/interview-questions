import React from 'react'
import { Collapse } from 'antd'
import { data } from './data'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import './styles.scss'

export const App = () => {
  const { Panel } = Collapse
  const { Header, Footer, Sider, Content } = Layout

  // const text = (text) => return {}

  const renderQuestions = data.map((item) => {
    return (
      <Panel header={`${item.id}.  ${item.title}`} key={item.id}>
        <div dangerouslySetInnerHTML={{ __html: item.text }} />
      </Panel>
    )
  })

  return (
    <Layout>
      <Header className={'header'}>
        Вопросы к собеседованию React и React Native
      </Header>
      <Content>
        <Collapse>{renderQuestions}</Collapse>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  )
}

export default App

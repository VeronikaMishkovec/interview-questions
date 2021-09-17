import React from 'react'
import { Collapse } from 'antd'
import { data } from './data'
import 'antd/dist/antd.css';

export const App = () => {
  const { Panel } = Collapse

  const renderQuestions = data.map((item) => {
    return (
      <Panel header={item.title} key={item.id}>
        <p>{item.text}</p>
      </Panel>
    )
  })

  return <Collapse defaultActiveKey={['1']}>{renderQuestions}</Collapse>
}

export default App

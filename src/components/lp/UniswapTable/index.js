import React from 'react'
import { Table } from 'antd'
import data from './data.json'

const columns = [
  {
    title: 'Item',
    dataIndex: 'actionName',
    key: 'actionName',
    className: 'bg-transparent text-gray-6',
  },
  {
    title: ' ',
    dataIndex: 'progress',
    key: 'progress',
    className: 'text-right bg-transparent text-gray-6',
    render: (text) => {
      return (
        <div className="progress">
          <div
            className={`progress-bar ${text.color}`}
            style={{ width: `${text.value}%` }}
            role="progressbar"
          />
        </div>
      )
    },
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    className: 'text-right bg-transparent text-gray-6',
    render: (text) => <span className="font-weight-bold">{text}</span>,
  },
]

const UniswapTable = () => {
  return (
    <div className="table-responsive text-nowrap">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default UniswapTable

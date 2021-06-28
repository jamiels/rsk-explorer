import React from 'react'
import { Table } from 'antd'
import data from './data.json'

const columns = [
  {
    dataIndex: 'avatar',
    key: 'avatar',
    className: 'bg-transparent text-gray-6 width-50',
    render: (text) => {
      return (
        <div>
          <div className="vb__utils__avatar">
            <img src={text} alt="User avatar" />
          </div>
        </div>
      )
    },
  },
  {
    title: 'Block Height',
    dataIndex: 'blockHeight',
    key: 'blockHeight',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'Block Hash',
    dataIndex: 'blockHash',
    key: 'blockHash',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'Transaction Count',
    dataIndex: 'transactionCount',
    key: 'transactionCount',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'Miner',
    dataIndex: 'miner',
    key: 'miner',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'Difficulty',
    dataIndex: 'difficulty',
    key: 'difficulty',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    dataIndex: 'action',
    key: 'action',
    className: 'bg-transparent text-right',
    render: () => {
      return (
        <div>
          <button type="button" className="btn btn-primary mr-2">
            <i className="fe fe-plus-circle" />
          </button>
          <button type="button" className="btn btn-light">
            <i className="fe fe-settings text-blue" />
          </button>
        </div>
      )
    },
  },
]

const BlocksTable = () => {
  return (
    <div className="table-responsive text-nowrap">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default BlocksTable

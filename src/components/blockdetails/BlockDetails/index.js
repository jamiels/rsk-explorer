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
    title: 'Block Hash',
    dataIndex: 'userName',
    key: 'userName',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return (
        <div>
          <div>{text.name}</div>
          <div className="text-gray-4">{text.position}</div>
        </div>
      )
    },
  },
  {
    title: 'Transactions',
    dataIndex: 'location',
    key: 'location',
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
        <div className="text-nowrap">
          <button type="button" className="btn btn-light">
            <span className="text-blue">Add</span>
          </button>
        </div>
      )
    },
  },
]

const BlockDetailsPanel = () => {
  return (
    <div>
      <div className="text-nowrap text-dark font-size-50 font-weight-bold">
        3,470,356 <sup className="text-uppercase text-gray-6 font-size-30">block</sup>
      </div>
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}

export default BlockDetailsPanel

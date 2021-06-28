import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeaderTabbed2 from '@vb/widgets/Headers/CardHeaderTabbed2'
import BlocksTable from 'components/blocks/BlocksTable'

const Blocks = () => {
  return (
    <div>
      <Helmet title="Blocks" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-top card-top-primary">
            <div className="card-header py-0">
              <HeadersCardHeaderTabbed2 data={{ title: 'Blocks' }} />
            </div>
            <div className="card-body">
              <BlocksTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blocks

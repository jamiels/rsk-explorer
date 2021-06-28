import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeaderTabbed2 from '@vb/widgets/Headers/CardHeaderTabbed2'
import TablesBootstrap2 from '@vb/widgets/TablesBootstrap/2'
import BlockDetailsPanel from 'components/blockdetails/BlockDetails'

const BlockDetails = () => {
  return (
    <div>
      <Helmet title="Block Details" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-body">
              <BlockDetailsPanel />
            </div>
            <div className="card-header py-0">
              <HeadersCardHeaderTabbed2 data={{ title: 'Block Transactions' }} />
            </div>
            <div className="card-body">
              <TablesBootstrap2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockDetails

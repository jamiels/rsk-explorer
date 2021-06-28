import React from 'react'
import { Helmet } from 'react-helmet'
import WidgetsTables5 from '@vb/widgets/WidgetsTables/5'
import HeadersCardHeaderTabbed2 from '@vb/widgets/Headers/CardHeaderTabbed2'
import TablesBootstrap2 from '@vb/widgets/TablesBootstrap/2'

const AddressDetails = () => {
  return (
    <div>
      <Helmet title="Address Details" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-body">
              <WidgetsTables5 />
            </div>
            <div className="card-header py-0">
              <HeadersCardHeaderTabbed2 data={{ title: 'Account Transactions' }} />
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

export default AddressDetails

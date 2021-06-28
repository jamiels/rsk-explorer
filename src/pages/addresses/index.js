import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'

const Addresses = () => {
  return (
    <div>
      <Helmet title="Addresses" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Addresses' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addresses

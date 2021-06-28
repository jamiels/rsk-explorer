import React from 'react'
import { Helmet } from 'react-helmet'
import CryptoCryptoList from '@vb/widgets/Crypto/CryptoList'
import CryptoCryptoChart from '@vb/widgets/Crypto/CryptoChart'

const Prices = () => {
  return (
    <div>
      <Helmet title="Prices" />
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <div className="card-body">
              <CryptoCryptoList />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="card-placeholder">
            <div className="card-body">
              <CryptoCryptoChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prices

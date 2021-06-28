import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import UniswapTable from 'components/lp/UniswapTable'

const LiquidityPools = () => {
  return (
    <div>
      <Helmet title="Liquidity Pools" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Liquidity Pools' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Uniswap' }} />
            </div>
            <div className="card-body">
              <UniswapTable />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'PancakeSwap' }} />
            </div>
            <div className="card-body">
              <UniswapTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiquidityPools

import React from 'react'
import { Helmet } from 'react-helmet'
import TransactionDensityChart from 'components/dashboard/TransactionDensity'
import BlocksTable from 'components/dashboard/BlocksTable'
import TransactionTable from 'components/dashboard/TransactionTable'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import HashrateChart from 'components/dashboard/HashRate'
import BTCLockedChart from 'components/dashboard/BTCLocked'


const Dashboard = () => {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <TransactionDensityChart />
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <HashrateChart />
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <BTCLockedChart />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Blocks' }} />
            </div>
            <div className="card-body">
              <BlocksTable />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Transactions' }} />
            </div>
            <div className="card-body">
              <TransactionTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import TransactionsTable from 'components/transactions/TransactionsTable'

const Transactions = () => {
  return (
    <div>
      <Helmet title="Transactions" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Transactions' }} />
            </div>
            <div className="card-body">
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions

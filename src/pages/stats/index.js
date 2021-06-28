import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import ChartsChartistjs1 from '@vb/widgets/ChartsChartistjs/1'
import ChartsChartistjs3 from '@vb/widgets/ChartsChartistjs/3'
import ChartsChartistjs4 from '@vb/widgets/ChartsChartistjs/4'
import ChartsChartistjs2 from '@vb/widgets/ChartsChartistjs/2'
import ChartsChartistjs5 from '@vb/widgets/ChartsChartistjs/5'

const Stats = () => {
  return (
    <div>
      <Helmet title="Stats" />
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Uncles' }} />
            </div>
            <div className="card-body">
              <ChartsChartistjs1 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Block Times' }} />
            </div>
          </div>
          <div className="card-placeholder">
            <div className="card-body">
              <ChartsChartistjs3 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Difficulty' }} />
            </div>
          </div>
          <div className="card-placeholder">
            <div className="card-body">
              <ChartsChartistjs4 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Gas Spending' }} />
            </div>
            <div className="card-body">
              <ChartsChartistjs4 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Transaction Density' }} />
            </div>
            <div className="card-body">
              <ChartsChartistjs2 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Block Propagation' }} />
            </div>
            <div className="card-body">
              <ChartsChartistjs5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats

import React from 'react';
import pieChart from '../assets/pie-chart.svg';
import dropdown from '../assets/dropdown.svg';
import '../styles/APIRequests.css';
import trendUp from '../assets/trend-up.svg';

const APIRequests: React.FC = () => {
  return (
    <div className="api-requests">
      <div className="api-requests-chart">
        <img src={pieChart} alt="API requests chart" />
      </div>

      <div className="api-requests-text">
        <div className="api-requests-header">
          <h3 className="api-requests-title">API Requests hits</h3>
          <img src={dropdown} alt="Options" className="api-requests-dropdown" />
        </div>

        <div className="api-requests-body">
          <div className="api-requests-stats-group">
            <div className="api-requests-stats-label">Latency</div>
            <div className="api-requests-stats-value">
              3000 rq/sec
              <div className="api-requests-stats-change">
              <img src={trendUp} alt="Cloud Cost chart" />
                <span className="api-requests-stats-change-value">3.4%</span>
              </div>
    
            </div>
          </div>
          {/* <div className="api-requests-stats-change">
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default APIRequests; 
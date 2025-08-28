import React from 'react';
import chartMini from '../assets/chart-mini.svg';
import dropdown from '../assets/dropdown.svg';
import '../styles/CloudCost.css';
import trendUp from '../assets/trend-up.svg';

const CloudCost: React.FC = () => {
  return (
    <div className="cloud-cost">
      <div className="cloud-cost-header">
        <p className="cloud-cost-title">Cloud Cost</p>
        <img src={dropdown} alt="Cloud Cost chart" />
      </div>
      
      <div className="cloud-cost-content">
        <div>
          <div className="cloud-cost-stats-value">$ 2,024</div>
          <div className="cloud-cost-stats-change">
          <img src={trendUp} alt="Cloud Cost chart" />

            <span className="cloud-cost-stats-change-value">40%</span>
            <span className="cloud-cost-stats-change-text">less vs last month</span>
          </div>
        </div>
        
        <div className="cloud-cost-chart">
          <img src={chartMini} alt="Cost trend chart" />
        </div>
      </div>
    </div>
  );
};

export default CloudCost; 
import React from 'react';
import CloudCost from './CloudCost';
import APIRequests from './APIRequests';
import heroImg from '../assets/hero.svg';

const HeroSection: React.FC = () => {
  return (
    <div style={{ height: '100%', paddingBottom: '70px' }} >
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-12 lg:mb-0">
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-12" style={{ fontSize: '46px', whiteSpace: 'nowrap' }}>
              Revolutionizing Traditional Pipelines
            </h2>

            <div className="text-black">
              <div className="text-5xl md:text-8xl mb-4" style={{ fontWeight: '100' }}>From</div>
              <div className="text-5xl md:text-8xl mb-2" style={{ fontWeight: '100' }}>Development <span className="text-5xl md:text-8xl font-bold">to</span></div>
              <div className="text-5xl md:text-8xl" style={{ fontWeight: '100' }}>Deployment</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex hero-img" style={{
            justifyContent: 'flex-end',
          }}>
            <div className="relative">
              <img src={heroImg} alt="Developer working" className="w-full rounded-3xl" />

              <div className="absolute z-10 -top-16" style={{ left: '-50px' }}>
                <CloudCost />
              </div>

              <div className="absolute z-10 -bottom-24" style={{ right: '0px' }}>
                <APIRequests />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 
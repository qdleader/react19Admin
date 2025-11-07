/**
 * 中间地图部分
 */
import React, { useState, useEffect } from 'react';
import { getMapOption } from '../modules/echartMap';
import CEcharts from './common/CEcharts';
import './CMap.scss';

const CMap: React.FC = () => {
  const [mapOption, setMapOption] = useState<any>({});

  useEffect(() => {
    setMapOption(getMapOption());
  }, []);

  return (
    <div className="map" id="map">
      <div className="map-content">
        <CEcharts option={mapOption} />
      </div>
    </div>
  );
};

export default CMap;


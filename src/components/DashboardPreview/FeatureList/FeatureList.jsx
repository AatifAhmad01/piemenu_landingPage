import React from 'react';
import FeatureItem from './FeatureItem/FeatureItem';

const FeatureList = ({ features }) => {
    return (
        <div className='space-y-4'>
            {features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
            ))}
        </div>
    );
};

export default FeatureList;

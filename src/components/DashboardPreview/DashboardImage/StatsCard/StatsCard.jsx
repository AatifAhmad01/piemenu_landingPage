import React from 'react';

const StatsCard = ({ stat }) => {
    const { value, label, color, position } = stat;

    return (
        <div className={`${position} bg-white rounded-lg shadow-lg p-4 border border-gray-100`}>
            <div className="text-center">
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
            </div>
        </div>
    );
};

export default StatsCard;

import React, { useState } from 'react'
import './Card.css'

const customPriorityLabels = {
    '0': 'No Priority',
    '1': 'Low',
    '2': 'Medium',
    '3': 'High',
    '4': 'Urgent'
};

const Card = ({ ticket }) => {
    const { id, title, priority, tag } = ticket;
    const [priorityData, setPriority] = useState(customPriorityLabels[priority] || priority);
    return (
        <div className="Card">
            <div className="card-text">
                <p className='card-id'>{id}</p>
                <p className='card-title'>{title}</p>
                <div className="card-details">
                    <p>{priorityData}</p>
                    <p className='card-tag'>{tag}</p>
                </div>
            </div>
        </div>
    );
};

export default Card
import React, { useState } from 'react'
import Card from '../Card/Card'
import './LabelColumn.css'

const customPriorityLabels = {
    '0': 'No Priority',
    '1': 'Low',
    '2': 'Medium',
    '3': 'High',
    '4': 'Urgent'
};

const LabelColumn = ({ label, tickets, Ordering }) => {
    const [labeldata, setLabeldata] = useState(customPriorityLabels[label] || label);

    return (
        <div className="LabelColumn">
            <p className='label-name'>{labeldata}</p>
            {tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
};

export default LabelColumn
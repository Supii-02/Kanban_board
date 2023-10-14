import React from 'react';
import LabelColumn from '../LabelColumn/LabelColumn';
import './Board.css';

const Boards = ({ Grouping, Ordering, tickets, users }) => {
    let groupedTickets = {};

    if (Grouping === 'user') {
        groupedTickets = tickets.reduce((grouped, ticket) => {
            const userName = users.find(user => user.id === ticket.userId)?.name;
            if (!grouped[userName]) {
                grouped[userName] = [];
            }
            grouped[userName].push(ticket);
            return grouped;
        }, {});
    } else {
        tickets.forEach((ticket) => {
            const groupKey = ticket[Grouping.toLowerCase()];
            if (!groupedTickets[groupKey]) {
                groupedTickets[groupKey] = [];
            }
            groupedTickets[groupKey].push(ticket);
        });
    }

    return (
        <div className="Board">
            {Object.keys(groupedTickets).map((groupKey) => (
                <LabelColumn
                    key={groupKey}
                    label={groupKey}
                    tickets={groupedTickets[groupKey]}
                    Ordering={Ordering}
                />
            ))}
        </div>
    );
};

export default Boards;

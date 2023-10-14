import React, { useEffect, useState } from 'react'
import Boards from '../Board/Boards'
import ParentDropdown from '../Dropdown/ParentDropdown'


const Dashboard = () => {
    const [Grouping, setGrouping] = useState('status');
    const [Ordering, setOrdering] = useState('priority');
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment', {
                method: 'GET'
            })
            const data = await res.json();
            const { tickets, users } = data;
            setTickets(tickets);
            setUsers(users);
        }
        fetchdata();
    }, [])

    const handleGrouping = (item) => {
        setGrouping(item);
    };

    const handleOrdering = (item) => {
        setOrdering(item);
    };

    return (
        <div className="dashboard-container">
            <ParentDropdown
                DropdownGrouping={handleGrouping}
                DropdownOrdering={handleOrdering}
            />
            <Boards Grouping={Grouping} Ordering={Ordering} tickets={tickets} users={users} />
        </div>
    );
};

export default Dashboard
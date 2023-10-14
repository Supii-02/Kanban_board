import React, { useState } from 'react';
import './Dropdown.css'

const ChildDropdown = ({ DropdownGrouping, DropdownOrdering }) => {
    const [Grouping, setGrouping] = useState(null);
    const [Ordering, setOrdering] = useState(null);

    const handleDropdown1Select = (item) => {
        setGrouping(item);
        DropdownGrouping(item); // Pass selected item1 to the parent
    };

    const handleDropdown2Select = (item) => {
        setOrdering(item);
        DropdownOrdering(item); // Pass selected item2 to the parent
    };

    return (
        <div className="nested-dropdown">
            <div className="nested-dropdown-item">
                <label className='dropdown-label'>Grouping</label>
                <select className='dropdown-select' onChange={(e) => handleDropdown1Select(e.target.value)}>
                    <option className='dropdown-option' value="status">Status</option>
                    <option className='dropdown-option' value="user">User</option>
                    <option className='dropdown-option' value="priority">Priority</option>
                </select>
            </div>
            <div className="nested-dropdown-item">
                <label className='dropdown-label'>Ordering</label>
                <select className='dropdown-select' onChange={(e) => handleDropdown2Select(e.target.value)}>
                    <option className='dropdown-option' value="priority">Priority</option>
                    <option className='dropdown-option' value="title">Title</option>
                </select>
            </div>
        </div>
    );
};

export default ChildDropdown;

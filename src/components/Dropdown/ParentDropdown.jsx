import React, { useState } from 'react';
import ChildDropdown from './ChildDropdown';
import './Dropdown.css'

const ParentDropdown = ({ DropdownGrouping, DropdownOrdering }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-wrapper">
            <button className="dropdown-button" onClick={toggleDropdown}>
                Display
            </button>
            {isOpen && (
                <ChildDropdown
                    DropdownGrouping={DropdownGrouping}
                    DropdownOrdering={DropdownOrdering}
                />
            )}
        </div>
    );
};

export default ParentDropdown;

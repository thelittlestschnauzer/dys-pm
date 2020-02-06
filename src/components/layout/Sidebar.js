import React from 'react';
import { FaChevronCircleDown, FaInbox, FaClipboardList, FaCalendarWeek} from 'react-icons/fa';


export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaClipboardList />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaCalendarWeek />
        </span>
        <span>Next 7 Days</span>
      </li>
    </ul>

    <div className="sidebar__middle">
      <span><FaChevronCircleDown /></span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">
      Projects will be listed here
    </ul>
    Click to add new project
  </div>
);

import React from 'react';
import { FaChevronCircleDown, FaInbox, FaClipboardList, FaCalendarWeek} from 'react-icons/fa';


export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li data-testid="inbox" className="inbox">
        <span className="sidebar__icons">
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li data-testid="today" className="today">
        <span>
          <FaClipboardList />
        </span>
        <span>Today</span>
      </li>
      <li data-testid="next_7" className="next_7">
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

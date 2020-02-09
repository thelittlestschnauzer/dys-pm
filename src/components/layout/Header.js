import React from 'react';
import { FaBattleNet } from 'react-icons/fa';

export const Header = () => { 

return <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>
      <div className="settings">
        <ul>
          <li data-testid="quick-add-task-action" className="settings__add">+</li>
          <li data-testid="dark-mode-action" className="settings__dark-mode">
            <FaBattleNet />
          </li>
        </ul>
      </div>
    </nav>
  </header>
};


  

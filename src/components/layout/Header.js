import React from 'react';

export const Header = () => { 
  const x = 1;
  return <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>
      <div className="settings">
        <ul>
          <li>+</li>
          <li>Nav item</li>
        </ul>
      </div>
    </nav>
  </header>
};


  


import React from 'react';

const BrickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brick" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12h8"></path>
    <path d="M12 4v16"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <path d="M16 8h4"></path>
    <path d="M16 16h4"></path>
  </svg>
);

export default BrickIcon;

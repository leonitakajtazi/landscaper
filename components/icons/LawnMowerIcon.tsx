
import React from 'react';

const LawnMowerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mower" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
    <path d="M6 18l-1 0"></path>
    <path d="M15 15l-11 0"></path>
    <path d="M4 15l4 -11l4 2l0 3"></path>
    <path d="M12 12l2 0"></path>
    <path d="M8 11l-1 2"></path>
    <path d="M7 13l-3 4"></path>
    <path d="M19 19a4 4 0 0 1 -4 -4"></path>
  </svg>
);

export default LawnMowerIcon;

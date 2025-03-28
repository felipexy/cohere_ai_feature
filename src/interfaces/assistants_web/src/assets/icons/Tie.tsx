import * as React from 'react';
import { SVGProps } from 'react';

import { cn } from '@/utils';

export const Tie: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
    <svg 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    <path d="M6.314,18.022l5,4.707a1,1,0,0,0,1.372,0l5-4.707a1,1,0,0,0,.28-.985L15.091,6.212,17.8,2.6A1,1,0,0,0,17,1H7a1,1,0,0,0-.8,1.6L8.909,6.212,6.034,17.037A1,1,0,0,0,6.314,18.022ZM15,3,13.5,5h-3L9,3ZM10.769,7h2.462l2.649,9.975L12,20.627,8.12,16.975Z" />
  </svg>
);


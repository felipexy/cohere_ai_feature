import * as React from 'react';
import { SVGProps } from 'react';

import { cn } from '@/utils';

export const Note: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    <path
      d="M17.08 107.39V6.58h94.87v99.47H33.97c-.88 0-1.63.62-1.79 1.48c-.68 3.69-2.91 12.97-8.31 12.97c-2.91 0-6.79-3.66-6.79-13.11z"
      fill="none"
    />
    <g
      fill="none"
      stroke="currentColor"
      stroke-width="3.865"
      stroke-linecap="round"
      stroke-miterlimit="10"
    >
      <path d="M33.34 28.42H94.5" />
      <path d="M33.34 43.05H94.5" />
      <path d="M33.34 57.68H94.5" />
      <path d="M33.34 72.3H94.5" />
      <path d="M33.34 86.93h26.15" />
    </g>
    <path
      d="M120.96 104.98h-7.18V6.83c0-1.56-1.27-2.83-2.83-2.83H17.06c-1.56 0-2.83 1.27-2.83 2.83v99.46c-.01 4.83-.87 17.71 14.29 17.71h80.85c11.49 0 13.15-12.4 13.36-17.18c.05-1.01-.76-1.84-1.77-1.84zm-102.72 1.31V8.01h91.51v96.96h-76c-.86 0-1.59.61-1.75 1.45c-.66 3.59-2.84 12.64-8.1 12.64c-4.13 0-5.66-3.56-5.66-12.77z"
      fill="currentColor"
    />
  </svg>
);

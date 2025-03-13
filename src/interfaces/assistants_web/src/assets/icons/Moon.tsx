import * as React from 'react';
import { SVGProps } from 'react';

import { IconKind } from '@/components/UI';
import { cn } from '@/utils';

type Props = {
  kind?: IconKind;
} & SVGProps<SVGSVGElement>;

export const Moon: React.FC<Props> = ({ className, kind, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    {kind === 'default' ? (
      <path
        d="M29.4426 18.7762C28.635 21.4124 27.0166 23.7267 24.8176 25.3899C22.8869 26.843 20.5895 27.7292 18.1831 27.9491C15.7767 28.169 13.3567 27.7139 11.1947 26.6348C9.03261 25.5557 7.2141 23.8954 5.94324 21.8402C4.67238 19.785 3.99948 17.4163 4.00006 14.9999C3.99137 12.1795 4.90826 9.43408 6.61006 7.18491C8.27323 4.9859 10.5876 3.36746 13.2238 2.55991C13.3976 2.50641 13.5826 2.50128 13.759 2.54509C13.9355 2.58889 14.0966 2.67997 14.2252 2.80852C14.3537 2.93707 14.4448 3.09823 14.4886 3.27467C14.5324 3.45111 14.5273 3.63616 14.4738 3.80991C13.8974 5.71669 13.849 7.74415 14.334 9.67624C14.8189 11.6083 15.8189 13.3727 17.2275 14.7812C18.6361 16.1898 20.4004 17.1898 22.3325 17.6748C24.2646 18.1597 26.292 18.1114 28.1988 17.5349C28.3726 17.4814 28.5576 17.4763 28.734 17.5201C28.9105 17.5639 29.0716 17.655 29.2002 17.7835C29.3287 17.9121 29.4198 18.0732 29.4636 18.2497C29.5074 18.4261 29.5023 18.6112 29.4488 18.7849L29.4426 18.7762Z"
        fill="inherit"
      />
    ) : (
      <path
        d="M26.1925 15.7786C26.0642 15.65 25.9034 15.5588 25.7272 15.5148C25.551 15.4707 25.3662 15.4755 25.1925 15.5286C23.2857 16.105 21.2583 16.1533 19.3262 15.6684C17.3941 15.1835 15.6298 14.1834 14.2212 12.7749C12.8126 11.3663 11.8126 9.60198 11.3277 7.66989C10.8427 5.7378 10.8911 3.71034 11.4675 1.80356C11.521 1.62981 11.5261 1.44477 11.4823 1.26832C11.4385 1.09188 11.3475 0.930721 11.2189 0.802171C11.0904 0.67362 10.9292 0.582545 10.7528 0.538741C10.5763 0.494936 10.3913 0.500059 10.2175 0.553558C7.58131 1.36111 5.26695 2.97955 3.60378 5.17856C2.14929 7.10963 1.26209 9.40802 1.04186 11.8155C0.821618 14.223 1.27707 16.6442 2.35704 18.8072C3.437 20.9701 5.0987 22.789 7.15544 24.0596C9.21218 25.3302 11.5825 26.0021 14 25.9998C16.8205 26.0085 19.5658 25.0916 21.815 23.3898C24.014 21.7266 25.6325 19.4123 26.44 16.7761C26.4929 16.603 26.4978 16.4187 26.4542 16.2431C26.4106 16.0674 26.3202 15.9069 26.1925 15.7786ZM20.6125 21.7923C18.4945 23.3876 15.8714 24.1642 13.2262 23.9789C10.581 23.7937 8.09178 22.6592 6.2167 20.7843C4.34162 18.9094 3.20692 16.4202 3.02149 13.775C2.83606 11.1299 3.61237 8.50676 5.20753 6.38856C6.24678 5.01613 7.59036 3.90362 9.13252 3.13856C9.04467 3.75509 9.0004 4.37705 9.00002 4.99981C9.00366 8.44651 10.3745 11.751 12.8117 14.1882C15.2488 16.6254 18.5533 17.9962 22 17.9998C22.624 17.9996 23.2473 17.9553 23.865 17.8673C23.0993 19.4097 21.9859 20.7533 20.6125 21.7923Z"
        fill="inherit"
      />
    )}
  </svg>
);

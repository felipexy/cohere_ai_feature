import * as React from 'react';
import { SVGProps } from 'react';

import { IconKind } from '@/components/UI';
import { cn } from '@/utils';

type Props = {
  kind?: IconKind;
} & SVGProps<SVGSVGElement>;

export const Setttings: React.FC<Props> = ({ className, kind, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    {kind === 'default' ? (
      <path
        d="M25.0001 14.2701C25.0051 14.0901 25.0051 13.9101 25.0001 13.7301L26.8651 11.4001C26.9628 11.2777 27.0305 11.1341 27.0627 10.9808C27.0948 10.8276 27.0905 10.6689 27.0501 10.5176C26.7438 9.36849 26.2865 8.26513 25.6901 7.23631C25.6119 7.1017 25.5034 6.9872 25.3732 6.90192C25.243 6.81664 25.0947 6.76292 24.9401 6.74506L21.9751 6.41506C21.8517 6.28506 21.7267 6.16006 21.6001 6.04006L21.2501 3.06756C21.2321 2.91282 21.1782 2.76443 21.0926 2.63422C21.0071 2.50401 20.8924 2.39557 20.7576 2.31756C19.7288 1.72162 18.6254 1.26512 17.4763 0.960057C17.325 0.919632 17.1663 0.915313 17.013 0.947446C16.8597 0.979579 16.7161 1.04727 16.5938 1.14506L14.2701 3.00006C14.0901 3.00006 13.9101 3.00006 13.7301 3.00006L11.4001 1.13881C11.2777 1.04102 11.1341 0.973329 10.9808 0.941196C10.8276 0.909063 10.6689 0.913382 10.5176 0.953807C9.36849 1.26009 8.26513 1.71741 7.23631 2.31381C7.1017 2.39196 6.9872 2.50046 6.90192 2.63067C6.81664 2.76087 6.76292 2.90919 6.74506 3.06381L6.41506 6.03381C6.28506 6.15797 6.16006 6.28297 6.04006 6.40881L3.06756 6.75006C2.91282 6.76806 2.76443 6.82196 2.63422 6.90747C2.50401 6.99298 2.39557 7.10772 2.31756 7.24256C1.72174 8.27151 1.26485 9.37486 0.958807 10.5238C0.918553 10.6752 0.914436 10.834 0.946787 10.9872C0.979139 11.1405 1.04705 11.2841 1.14506 11.4063L3.00006 13.7301C3.00006 13.9101 3.00006 14.0901 3.00006 14.2701L1.13881 16.6001C1.04102 16.7224 0.973329 16.866 0.941196 17.0193C0.909063 17.1726 0.913382 17.3312 0.953807 17.4826C1.26009 18.6316 1.71741 19.735 2.31381 20.7638C2.39196 20.8984 2.50046 21.0129 2.63067 21.0982C2.76087 21.1835 2.90919 21.2372 3.06381 21.2551L6.02881 21.5851C6.15297 21.7151 6.27797 21.8401 6.40381 21.9601L6.75006 24.9326C6.76806 25.0873 6.82196 25.2357 6.90747 25.3659C6.99298 25.4961 7.10772 25.6045 7.24256 25.6826C8.27151 26.2784 9.37486 26.7353 10.5238 27.0413C10.6752 27.0816 10.834 27.0857 10.9872 27.0533C11.1405 27.021 11.2841 26.9531 11.4063 26.8551L13.7301 25.0001C13.9101 25.0051 14.0901 25.0051 14.2701 25.0001L16.6001 26.8651C16.7224 26.9628 16.866 27.0305 17.0193 27.0627C17.1726 27.0948 17.3312 27.0905 17.4826 27.0501C18.6318 26.7443 19.7352 26.287 20.7638 25.6901C20.8984 25.6119 21.0129 25.5034 21.0982 25.3732C21.1835 25.243 21.2372 25.0947 21.2551 24.9401L21.5851 21.9751C21.7151 21.8517 21.8401 21.7267 21.9601 21.6001L24.9326 21.2501C25.0873 21.2321 25.2357 21.1782 25.3659 21.0926C25.4961 21.0071 25.6045 20.8924 25.6826 20.7576C26.2784 19.7286 26.7353 18.6253 27.0413 17.4763C27.0816 17.3249 27.0857 17.1662 27.0533 17.0129C27.021 16.8596 26.9531 16.716 26.8551 16.5938L25.0001 14.2701ZM14.0001 19.0001C13.0112 19.0001 12.0445 18.7068 11.2222 18.1574C10.4 17.608 9.7591 16.8271 9.38066 15.9135C9.00222 14.9998 8.9032 13.9945 9.09613 13.0246C9.28906 12.0547 9.76526 11.1638 10.4645 10.4645C11.1638 9.76526 12.0547 9.28906 13.0246 9.09613C13.9945 8.9032 14.9998 9.00222 15.9135 9.38066C16.8271 9.7591 17.608 10.4 18.1574 11.2222C18.7068 12.0445 19.0001 13.0112 19.0001 14.0001C19.0001 15.3261 18.4733 16.5979 17.5356 17.5356C16.5979 18.4733 15.3261 19.0001 14.0001 19.0001Z"
        fill="inherit"
      />
    ) : (
      <path
        d="M16.0001 10.0001C14.8134 10.0001 13.6533 10.352 12.6666 11.0112C11.6799 11.6705 10.9109 12.6076 10.4568 13.704C10.0027 14.8003 9.88383 16.0067 10.1153 17.1706C10.3469 18.3345 10.9183 19.4036 11.7574 20.2427C12.5965 21.0818 13.6656 21.6533 14.8295 21.8848C15.9934 22.1163 17.1998 21.9975 18.2962 21.5433C19.3925 21.0892 20.3296 20.3202 20.9889 19.3335C21.6482 18.3468 22.0001 17.1867 22.0001 16.0001C21.9984 14.4093 21.3657 12.8841 20.2409 11.7592C19.116 10.6344 17.5908 10.0017 16.0001 10.0001ZM16.0001 20.0001C15.2089 20.0001 14.4356 19.7655 13.7778 19.3259C13.12 18.8864 12.6073 18.2617 12.3045 17.5308C12.0018 16.7999 11.9226 15.9956 12.0769 15.2197C12.2313 14.4438 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4438 12.2313 15.2197 12.0769C15.9956 11.9226 16.7999 12.0018 17.5308 12.3045C18.2617 12.6073 18.8864 13.12 19.3259 13.7778C19.7655 14.4356 20.0001 15.2089 20.0001 16.0001C20.0001 17.0609 19.5786 18.0783 18.8285 18.8285C18.0783 19.5786 17.0609 20.0001 16.0001 20.0001ZM27.0001 16.2701C27.0051 16.0901 27.0051 15.9101 27.0001 15.7301L28.8651 13.4001C28.9628 13.2777 29.0305 13.1341 29.0627 12.9808C29.0948 12.8276 29.0905 12.6689 29.0501 12.5176C28.7443 11.3683 28.287 10.2649 27.6901 9.23631C27.6119 9.1017 27.5034 8.9872 27.3732 8.90192C27.243 8.81664 27.0947 8.76292 26.9401 8.74506L23.9751 8.41506C23.8517 8.28506 23.7267 8.16006 23.6001 8.04006L23.2501 5.06756C23.2321 4.91282 23.1782 4.76443 23.0926 4.63422C23.0071 4.50401 22.8924 4.39557 22.7576 4.31756C21.7286 3.72174 20.6253 3.26485 19.4763 2.95881C19.3249 2.91855 19.1662 2.91444 19.0129 2.94679C18.8596 2.97914 18.716 3.04705 18.5938 3.14506L16.2701 5.00006C16.0901 5.00006 15.9101 5.00006 15.7301 5.00006L13.4001 3.13881C13.2777 3.04102 13.1341 2.97333 12.9808 2.9412C12.8276 2.90906 12.6689 2.91338 12.5176 2.95381C11.3685 3.26009 10.2651 3.71741 9.23631 4.31381C9.1017 4.39196 8.9872 4.50046 8.90192 4.63067C8.81664 4.76087 8.76292 4.90919 8.74506 5.06381L8.41506 8.03381C8.28506 8.15797 8.16006 8.28297 8.04006 8.40881L5.06756 8.75006C4.91282 8.76806 4.76443 8.82196 4.63422 8.90747C4.50401 8.99298 4.39557 9.10772 4.31756 9.24256C3.72174 10.2715 3.26485 11.3749 2.95881 12.5238C2.91855 12.6752 2.91444 12.834 2.94679 12.9872C2.97914 13.1405 3.04705 13.2841 3.14506 13.4063L5.00006 15.7301C5.00006 15.9101 5.00006 16.0901 5.00006 16.2701L3.13881 18.6001C3.04102 18.7224 2.97333 18.866 2.9412 19.0193C2.90906 19.1726 2.91338 19.3312 2.95381 19.4826C3.25954 20.6318 3.71689 21.7352 4.31381 22.7638C4.39196 22.8984 4.50046 23.0129 4.63067 23.0982C4.76087 23.1835 4.90919 23.2372 5.06381 23.2551L8.02881 23.5851C8.15297 23.7151 8.27797 23.8401 8.40381 23.9601L8.75006 26.9326C8.76806 27.0873 8.82196 27.2357 8.90747 27.3659C8.99298 27.4961 9.10772 27.6045 9.24256 27.6826C10.2715 28.2784 11.3749 28.7353 12.5238 29.0413C12.6752 29.0816 12.834 29.0857 12.9872 29.0533C13.1405 29.021 13.2841 28.9531 13.4063 28.8551L15.7301 27.0001C15.9101 27.0051 16.0901 27.0051 16.2701 27.0001L18.6001 28.8651C18.7224 28.9628 18.866 29.0305 19.0193 29.0627C19.1726 29.0948 19.3312 29.0905 19.4826 29.0501C20.6318 28.7443 21.7352 28.287 22.7638 27.6901C22.8984 27.6119 23.0129 27.5034 23.0982 27.3732C23.1835 27.243 23.2372 27.0947 23.2551 26.9401L23.5851 23.9751C23.7151 23.8517 23.8401 23.7267 23.9601 23.6001L26.9326 23.2501C27.0873 23.2321 27.2357 23.1782 27.3659 23.0926C27.4961 23.0071 27.6045 22.8924 27.6826 22.7576C28.2784 21.7286 28.7353 20.6253 29.0413 19.4763C29.0816 19.3249 29.0857 19.1662 29.0533 19.0129C29.021 18.8596 28.9531 18.716 28.8551 18.5938L27.0001 16.2701ZM24.9876 15.4576C25.0088 15.8189 25.0088 16.1812 24.9876 16.5426C24.9727 16.79 25.0502 17.0341 25.2051 17.2276L26.9788 19.4438C26.7753 20.0906 26.5147 20.7181 26.2001 21.3188L23.3751 21.6388C23.129 21.6661 22.9019 21.7837 22.7376 21.9688C22.4969 22.2394 22.2407 22.4957 21.9701 22.7363C21.7849 22.9006 21.6674 23.1278 21.6401 23.3738L21.3263 26.1963C20.7257 26.5111 20.0982 26.7717 19.4513 26.9751L17.2338 25.2013C17.0564 25.0595 16.8359 24.9824 16.6088 24.9826H16.5488C16.1875 25.0038 15.8252 25.0038 15.4638 24.9826C15.2164 24.9677 14.9723 25.0452 14.7788 25.2001L12.5563 26.9751C11.9095 26.7715 11.282 26.5109 10.6813 26.1963L10.3613 23.3751C10.334 23.129 10.2164 22.9019 10.0313 22.7376C9.76069 22.4969 9.50442 22.2407 9.26381 21.9701C9.09947 21.7849 8.87233 21.6674 8.62631 21.6401L5.80381 21.3251C5.48905 20.7244 5.22843 20.0969 5.02506 19.4501L6.79881 17.2326C6.95369 17.0391 7.0312 16.795 7.01631 16.5476C6.99506 16.1862 6.99506 15.8239 7.01631 15.4626C7.0312 15.2152 6.95369 14.971 6.79881 14.7776L5.02506 12.5563C5.22859 11.9095 5.4892 11.282 5.80381 10.6813L8.62506 10.3613C8.87108 10.334 9.09822 10.2164 9.26256 10.0313C9.50317 9.76069 9.75944 9.50442 10.0301 9.26381C10.2159 9.09937 10.334 8.8717 10.3613 8.62506L10.6751 5.80381C11.2757 5.48905 11.9032 5.22843 12.5501 5.02506L14.7676 6.79881C14.961 6.95369 15.2052 7.0312 15.4526 7.01631C15.8139 6.99506 16.1762 6.99506 16.5376 7.01631C16.785 7.0312 17.0291 6.95369 17.2226 6.79881L19.4438 5.02506C20.0906 5.22859 20.7181 5.4892 21.3188 5.80381L21.6388 8.62506C21.6661 8.87108 21.7837 9.09822 21.9688 9.26256C22.2394 9.50317 22.4957 9.75944 22.7363 10.0301C22.9006 10.2152 23.1278 10.3327 23.3738 10.3601L26.1963 10.6738C26.5111 11.2744 26.7717 11.9019 26.9751 12.5488L25.2013 14.7663C25.0449 14.9614 24.9673 15.2081 24.9838 15.4576H24.9876Z"
        fill="inherit"
      />
    )}
  </svg>
);

import React from 'react';

export const SvgEmptyAvatar = props => (
  <svg width={30} height={30} {...props} viewBox="0 0 30 30">
    <defs>
      <circle id="EmptyAvatar_svg__a" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#FFF" xlinkHref="#EmptyAvatar_svg__a" />
      <circle
        cx={15}
        cy={15}
        r={14.5}
        fill="#000"
        fillOpacity={0.1}
        stroke="#000"
        strokeLinejoin="square"
        strokeOpacity={0.2}
      />
      <path
        fill="#FFFFFE"
        d="M21.472 22.135c0-3.53-2.792-6.392-6.236-6.392S9 18.604 9 22.135c0 .074.008.146.01.219h12.451c.003-.073.011-.145.011-.22"
      />
      <path
        stroke="#4D4E4C"
        strokeWidth={0.614}
        d="M21.472 22.135c0-3.53-2.792-6.392-6.236-6.392S9 18.604 9 22.135c0 .074.008.146.01.219h12.451c.003-.073.011-.145.011-.22z"
      />
      <path
        fill="#FFFFFE"
        d="M19.564 11.935c0 2.45-1.938 4.436-4.328 4.436-2.39 0-4.327-1.986-4.327-4.436S12.846 7.5 15.236 7.5c2.39 0 4.328 1.986 4.328 4.435"
      />
      <path
        stroke="#4D4E4C"
        strokeWidth={0.614}
        d="M19.564 11.935c0 2.45-1.938 4.436-4.328 4.436-2.39 0-4.327-1.986-4.327-4.436S12.846 7.5 15.236 7.5c2.39 0 4.328 1.986 4.328 4.435z"
      />
    </g>
  </svg>
);

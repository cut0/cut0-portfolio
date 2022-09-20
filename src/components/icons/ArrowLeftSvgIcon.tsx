import { FC, SVGAttributes } from "react";

type ArrowLeftSvgIcon = SVGAttributes<SVGElement> & {
  title: string;
};

export const ArrowLeftSvgIcon: FC<ArrowLeftSvgIcon> = ({
  title,
  fill = "currentColor",
  ...svgProps
}) => {
  return (
    <svg
      id="_x32_"
      version="1.1"
      viewBox="0 0 512 512"
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y="0px"
      {...svgProps}
    >
      <title>{title}</title>
      <g>
        <path
          d="M469.672,213.675H145.324L275.68,84.727c16.623-16.438,16.767-43.253,0.329-59.866
		c-16.438-16.624-43.243-16.767-59.867-0.328L12.566,225.901C4.52,233.863,0,244.691,0,256.003c0,11.312,4.52,22.13,12.566,30.093
		l203.576,201.368c16.624,16.438,43.428,16.304,59.867-0.33c16.438-16.613,16.294-43.417-0.329-59.855L145.324,298.322h324.347
		c23.374,0,42.328-18.945,42.328-42.319C512,232.62,493.045,213.675,469.672,213.675z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
};
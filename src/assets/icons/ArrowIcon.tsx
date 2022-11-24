import React, { Ref } from "react";

function _IconArrow(
  props: React.SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>
) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49511 3.42182C8.36383 3.29055 8.18578 3.2168 8.00013 3.2168C7.81448 3.2168 7.63643 3.29055 7.50516 3.42182L3.42182 7.50516C3.14846 7.77852 3.14846 8.22174 3.42182 8.4951C3.69519 8.76847 4.1384 8.76847 4.41177 8.4951L7.2998 5.60707V12.0835C7.2998 12.4701 7.61321 12.7835 7.9998 12.7835C8.3864 12.7835 8.69981 12.4701 8.69981 12.0835V5.60642L11.5885 8.4951C11.8619 8.76847 12.3051 8.76847 12.5784 8.4951C12.8518 8.22174 12.8518 7.77852 12.5784 7.50516L8.49511 3.42182Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const IconArrow = React.forwardRef(_IconArrow);

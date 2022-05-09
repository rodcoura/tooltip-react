import { useState } from 'react';
import * as React from 'react';
import './Tooltip.css';

export enum TooltipType {
  INSTANT = 1,
  TIMED = 2,
  DELAYED = 3,
}

type PropTypes = {
  type?: TooltipType;
  time?: number;
  position?: string;
  msg: string;
  children: JSX.Element;
};

const Tooltip = (props: PropTypes) => {
  const DEFAULT_TIME = 500;
  const [showing, showTooltip] = useState(false);

  const show = () => {
    switch (props.type) {
      case TooltipType.INSTANT:
      default:
        showTooltip(true);
        break;
      case TooltipType.TIMED:
        showTooltip(true);
        setTimeout(() => showTooltip(false), props.time || DEFAULT_TIME);
        break;
      case TooltipType.DELAYED:
        setTimeout(() => showTooltip(true), props.time || DEFAULT_TIME);
        break;
    }
  };

  const hide = () => {
    switch (props.type) {
      case TooltipType.INSTANT:
      default:
        showTooltip(false);
        break;
      case TooltipType.TIMED:
        break;
      case TooltipType.DELAYED:
        setTimeout(() => showTooltip(false), props.time || DEFAULT_TIME);
        break;
    }
  };

  return (
    <div className="tt-wrapper" onMouseEnter={show} onMouseLeave={hide}>
      {props.children}
      {showing && (
        <div className={`tt-msg tt-position ${props.position || 'top'}`}>
          {props.msg}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

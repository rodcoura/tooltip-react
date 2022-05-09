import * as React from 'react';
import './style.css';
import Tooltip, { TooltipType } from './Tooltip';

export default function App() {
  return (
    <div className="App">
      <Tooltip msg="Here is the tooltip" position='top' type={TooltipType.DELAYED}>
        <h1>
          H1 with top DELAYED
        </h1>
      </Tooltip>
      <br/>
      <Tooltip msg="Here is the tooltip" position='right'>
        <button type='button'>
          Button with right tooltip
        </button>
      </Tooltip>
      
      <Tooltip msg="Here is the tooltip" position='top' type={TooltipType.TIMED} time={2000}>
        <button type='button'>
          Button with top tooltip TIMED
        </button>
      </Tooltip>

      <Tooltip msg="Here is the tooltip" position='bottom'>
        <button type='button'>
          Button with bottom tooltip
        </button>
      </Tooltip>

      <Tooltip msg="Here is the tooltip" position='left'>
        <button type='button'>
          Button with left tooltip
        </button>
      </Tooltip>
    </div>
  );
}

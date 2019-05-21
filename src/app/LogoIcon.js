import React from 'react';

class Icon extends React.Component
{
  constructor(props) { super(props); }

  //Override
  render()
  {
    const MAIN_COLOR = "white";
    const BACK_COLOR = "var(--color-background)";

    return (
      <svg id={this.props.id} className={this.props.className} style={this.props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24" viewBox="0 0 24 24">
        <g transform="translate(12, 12)">
          <circle cx="2" cy="0" r="8" fill={MAIN_COLOR}/>
          <circle cx="2" cy="0" r="5" fill={BACK_COLOR}/>
          <path d="M 0 0 -6 6 A 8 8 0 0 1 -6 -6 Z" fill={BACK_COLOR}/>

          <line x1="3" y1="1" x2="-5" y2="-7" stroke={BACK_COLOR} strokeWidth="3"/>
          <line x1="3" y1="-1" x2="-5" y2="7" stroke={BACK_COLOR} strokeWidth="3"/>

          <line x1="1" y1="1" x2="-9" y2="-9" stroke={MAIN_COLOR} strokeWidth="3"/>
          <line x1="1" y1="-1" x2="-9" y2="9" stroke={MAIN_COLOR} strokeWidth="3"/>

          <line x1="-5" y1="-9" x2="-10" y2="-9" stroke={BACK_COLOR} strokeWidth="3"/>
          <line x1="-5" y1="9" x2="-10" y2="9" stroke={BACK_COLOR} strokeWidth="3"/>
        </g>
      </svg>
    );
  }
}
export default Icon;

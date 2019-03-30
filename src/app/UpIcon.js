import React from 'react';

class Icon extends React.Component
{
  constructor(props) { super(props); }

  //Override
  render()
  {
    return (
      <svg id={this.props.id} className={this.props.className} style={this.props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
      </svg>
    );
  }
}
export default Icon;

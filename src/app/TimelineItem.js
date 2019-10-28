import React from 'react';
import Style from './TimelineItem.css';

class TimelineItem extends React.Component
{
  constructor(props) { super(props); }

  //Override
  render()
  {
    return (
      <div id={this.props.id}
        className={Style.timeline_item_container +
          " " + this.props.className}
        style={this.props.style}>
            <div class="content grow">
                <h2>{this.props.header}</h2>
                <p>{this.props.content}</p>
            </div>
      </div>
    );
  }
}
export default TimelineItem;

import React from 'react';
import Style from './Timeline.css';
import TimelineItem from './TimelineItem.js';

const TIMELINEITEMS = [
  {title:"Summer 2018", content:"Finite Automata. Andrew and his gang bring his prototype to life!"},
  {title:"Fall 2018", content:"Regular Expressions. Seth joins and sort of helps"},
  {title:"Winter 2019", content: "Pushdown Automata"},
  {title:"Spring 2019", content: "Context-free Grammar"},
];

class Timeline extends React.Component
{
  constructor(props) { super(props); }

  renderTimelineItem(header="Untitled", content="None", index) {
    if(index % 2 == 1) {
      return <TimelineItem className="left" header={header} content={content}/>
    }
    else {
      return <TimelineItem className="right" header={header} content={content}/>
    }
  }
  //Override
  render()
  {
    return (
      <div id={this.props.id}
        className={Style.timeline_container +
          " " + this.props.className}
        style={this.props.style}>
            {TIMELINEITEMS.map((e, index) => this.renderTimelineItem(e.title, e.content, index))}
      </div>
    );
  }
}
export default Timeline;

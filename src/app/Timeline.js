import React from 'react';
import Style from './Timeline.css';

class Timeline extends React.Component
{
  constructor(props) { super(props); }

  //Override
  render()
  {
    return (
      <div id={this.props.id}
        className={Style.timeline_container +
          " " + this.props.className}
        style={this.props.style}>
        <div>
          <label>An intuitive web app to help you explore what it means to be computable. Experiment and construct formal languages from finite automata to Turing machines with real-time analysis and error checking. From its humble beginnings as a small tool built by a determined CSE 105 homework group at UC San Diego inspired by JFLAP, it has continued to still be developed by the students, for the students.</label>
        </div>
      </div>
    );
  }
}
export default Timeline;

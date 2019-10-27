import React from 'react';
import Style from './Timeline.css';
import TimelineItem from './TimelineItem.js';

const TIMELINEITEMS = [
  {title:"Spring 2018", content:"Andrew Kuo is taking CSE 105 and finds that the old JFLAP application is unintuitive, outdated, and difficult to use. Inspired to make a better tool for visualizing and testing automata, he builds a prototype with React.js for a new PWA called, FLAPJS"},
  {title:"Summer 2018", content:"Professor Mia Minnes takes a great interest into FLAPJS and works with Andrew to gather a team of talented engineers (Lixuan Lang, Maya Bello, Noah Solomon, David Osuna, and Xuanqiang \"Erik\" Zhao). Together, they fully implement DFAs, NFAs, testing, importing/exporting, and other basic functionality in time for use in Fall Quarter!"},
  {title:"Fall 2018", content:"FLAPJS is now being used as a pedagogical tool in UCSD's Theory of Computation course (CSE 105) for homework and studying, so work is put in to improve the user exprience. A bug reporting system as well as new algorithms for finding/removing unreachable or redundant states and converting between NFAs and DFAs are provided. FLAPJS also takes on two new members (Ravneet Dhanjal and Seth D'Agostino)." },
  {title:"Winter 2019", content: "Plans are made for FLAPJS to provide more than just finite automata, but also provide multiple modules relevant to CSE 105 and potentially other CSE courses. A module system is created for FLAPJS and the engineers design, develop, and deploy the Pushdown Automata and Regular Expression modules. Secondly, Finite Automata are fully fleshed out with a newly redesigned step-by-step mode for debugging machines."},
  {title:"Spring 2019", content: "FLAPJS works to deliver on feedback received after being the tool for CSE 105 for the last few quarters. After taking on two new talented engineers (Jacob Chazen and Jimmy Dang), it undergoes a menu redesign, gets a cool new logo, and color themes. Unit testing and linting is implemented, which brings to light bugs in the RE and PDA module that get fixed. Work is also being done for a Context Free Grammar module to be released some time in the future..."},
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

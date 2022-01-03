import React from 'react';
import Button from '../shared/Button';

export default function Home(props) {
  // placeholder for logo, need help, login button, hamburger icon for menu
  // placeholder for title, sub-title, custom element such as dropdown
  // get started sectionw ith arrow button
  return (
    <div className="mainContainer">
      <div className="rowContainer">
        <div className="columnContainer">logo goes here</div>
        <div className="columnContainer">need help goes here</div>
        <div className="columnContainer">login button goes here</div>
        <div className="columnContainer">menu icon goes here</div>
      </div>
      <div className="rowContainer">
        <div className="columnContainer">
          <div className="rowContainer">title goes here</div>
          <div className="rowContainer">subtitle goes here</div>
          <div className="rowContainer">dropdown goes here</div>
          <div className="rowContainer">
            Get started <br />
            <Button />
          </div>
        </div>
        <div className="columnContainer">image goes here</div>
      </div>
    </div>
  );
}

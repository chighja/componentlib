import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/trello/board';
import Surprise from './components/surprise/surprise';
import RateCalculator from './components/rate-calculator/rate-calculator';
import LiveSearch from './components/character-search/live-search';
import peaks from './peaks.json';

ReactDOM.render(
  <div>
    <Board />
    <Surprise />
    <RateCalculator />
    <LiveSearch characters={peaks} />
  </div>,
  document.getElementById('root')
);

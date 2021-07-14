import React from 'react';

import boardStyle from './Board.module.scss';

// "Dynamic", React inline stylings
import { boardStyles } from './BoardStyles';

const Board = (props) => {

  const sortFieldsAsc = (first, second) => {
    if(first > second) {
      return 1;
    }

    if(first < second) {
      return -1;
    }

    // Equal
    return 0;
  }

  const sortFieldsDesc = (first, second) => {
    return -sortFieldsAsc(first, second);
  }



  const handleDiceClick = () => {
    props.moves.rollDice();
  }


  const displayTokens = (fieldId) => {

    let playerIndexes = [];

    for(let i = 0; i < props.G.tokenPositions.length; i++) {
      if(props.G.tokenPositions[i] === fieldId) {
        playerIndexes.push(i);
      }
    }

    if(playerIndexes === []) return '';

    return playerIndexes.map(playerIndex =>
      <p>{`Player ${playerIndex}`}</p>  
    );
  }



  const CornerFields = props.G.fields
    .filter(field => (field % 10) === 0)
    .map((field, i) =>
      <div style={boardStyles.corners[i]}>{field} {displayTokens(field)}</div>
    )

  const BottomFields = props.G.fields
    .filter(field => field < 10 && (field % 10) !== 0)
    .sort(sortFieldsDesc)
    .map(field =>
      <div>{field} {displayTokens(field)}</div>  
    )

  const LeftFields = props.G.fields
    .filter(field => (field > 10 && field < 20) && (field % 10) !== 0)
    .sort(sortFieldsDesc)
    .map(field =>
      <div>{field} {displayTokens(field)}</div>
    )

  const TopFields = props.G.fields
    .filter(field => (field > 20 && field < 30) && (field % 10) !== 0)
    .map(field =>
      <div>{field} {displayTokens(field)}</div>
    )

  const RightFields = props.G.fields
    .filter(field => (field > 30 && field < 40) && (field % 10) !== 0)
    .map(field =>
      <div>{field} {displayTokens(field)}</div>
    )

  const Dice = props.G.dice.map(die =>
    <div className={boardStyle.die}>
      <p>{die}</p>
    </div>
  )
  
  return (
    <div className={boardStyle.board}>
      <div className={boardStyle.container}>
        {CornerFields}

        <div className={`${boardStyle.bottom} ${boardStyle.row}`}>
          {BottomFields}
        </div>

        <div className={`${boardStyle.left} ${boardStyle.column}`}>
          {LeftFields}
        </div>

        <div className={`${boardStyle.top} ${boardStyle.row}`}>
          {TopFields}
        </div>

        <div className={`${boardStyle.right} ${boardStyle.column}`}>
          {RightFields}
        </div>

        <div className={boardStyle.cardsTop}>
          <p>Community Chest</p>
        </div>

        <div className={boardStyle.cardsBottom}>
          <p>Chance</p>
        </div>

        <div className={boardStyle.center}>
          <p>Monopoly</p>
        </div>

        <div className={boardStyle.dice} onClick={handleDiceClick}>
          {Dice}
        </div>
      </div>
    </div>
  )
}

export default Board;
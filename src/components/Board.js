import React from 'react';

import boardStyle from './Board.module.scss';

const Board = (props) => {

  const CornerFields = props.G.fields
    .filter(field => (field % 10) === 0)
    .map(field =>
      <div>{field}</div>
    )

  const BottomFields = props.G.fields
    .filter(field => field < 10 && (field % 10) !== 0)
    .map(field =>
      <div>{field}</div>  
    )

  const LeftFields = props.G.fields
    .filter(field => (field > 10 && field < 20) && (field % 10) !== 0)
    .map(field =>
      <div>{field}</div>
    )

  const TopFields = props.G.fields
    .filter(field => (field > 20 && field < 30) && (field % 10) !== 0)
    .map(field =>
      <div>{field}</div>
    )

  const RightFields = props.G.fields
    .filter(field => (field > 30 && field < 40) && (field % 10) !== 0)
    .map(field =>
      <div>{field}</div>
    )
  
  return (
    <div className={boardStyle.board}>
      <div>Corner Fields: {CornerFields}</div>
      <div>Bottom Fields: {BottomFields}</div>
      <div>Left Fields: {LeftFields}</div>
      <div>Top Fields: {TopFields}</div>
      <div>Right Fields: {RightFields}</div>
    </div>
  )
}

export default Board;
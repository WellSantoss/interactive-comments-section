import React from 'react';
import Score from '../Score/Score.js';
import { WrapperComment, StyledComment } from './style.js';

export default function Comment() {
  return (
    <WrapperComment>
      <Score />
      <StyledComment>comentario</StyledComment>
    </WrapperComment>
  );
}

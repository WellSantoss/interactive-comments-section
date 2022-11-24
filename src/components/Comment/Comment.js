import React from 'react';
import replyIcon from '../../assets/icon-reply.svg';
import plusIcon from '../../assets/icon-plus.svg';
import minusIcon from '../../assets/icon-minus.svg';
import { CommentWrapper, CommentHeader, CommentScore } from './style.js';

export default function Comment(props) {
  const comment = props.comment;

  return (
    <CommentWrapper>
      <CommentScore>
        <button>
          <img src={plusIcon} alt="plus" />
        </button>
        <span>{comment.score}</span>
        <button>
          <img src={minusIcon} alt="minus" />
        </button>
      </CommentScore>
      <div>
        <CommentHeader>
          <img
            src={require(`../../assets/avatars/${comment.user.image.webp}`)}
            alt={comment.user.username}
          />
          <strong>{comment.user.username}</strong>
          <span>{comment.createdAt}</span>
          <button>
            <img src={replyIcon} alt="replay" />
            Reply
          </button>
        </CommentHeader>
        <p>{comment.content}</p>
      </div>
    </CommentWrapper>
  );
}

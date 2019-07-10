import React from 'react';
import {
  StyledPost,
  StyledPostHeader,
  StyledPostContent,
  StyledPostComments,
} from './styles';

function PostHeader({ author, date }) {
  return (
    <StyledPostHeader>
      <img src={author.avatar} alt={author.name} />
      <div>
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </StyledPostHeader>
  );
}

function PostContent({ content }) {
  return <StyledPostContent>{content}</StyledPostContent>;
}

function PostComments({ comments }) {
  return (
    <StyledPostComments>
      <hr />
      {comments.map(comment => (
        <div>
          <img src={comment.author.avatar} alt={comment.author.name} />
          <p>
            <strong>{comment.author.name}</strong> {comment.content}
          </p>
        </div>
      ))}
    </StyledPostComments>
  );
}

export default function Post({ author, date, content, comments }) {
  return (
    <StyledPost>
      <PostHeader author={author} date={date} />
      <PostContent content={content} />
      {comments.length > 0 ? <PostComments comments={comments} /> : null}
    </StyledPost>
  );
}

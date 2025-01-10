import { useState } from "react";

function PostCard({ post, goToPost }) {
  return (
    <div className="PostCard" onClick={() => goToPost(post && post.id)}>
      <div className="card-image">{post && <img src={post.imageUrl} />}</div>
      <div className="title">{post && post.title}</div>
      <div className="description">{post && post.text.slice(0, 15)}</div>
    </div>
  );
}

export default PostCard;

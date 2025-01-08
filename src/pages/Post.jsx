import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { IoCloseOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

function Post() {
  const [post, setPost] = useState({});
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");

  const navigation = useNavigate();

  const { post_id } = useParams();
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchPost();
  }, []);
  async function fetchPost() {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:3000/api/public/posts/${post_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setPost(data.post);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  async function addComment() {
    if (token === null) {
      alert("Log in or Sign up to comment");
      return;
    }
    if (commentText === "") {
      alert("Comment text cannot be empty");
      return;
    }
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:3000/api/public/posts/${post_id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ commentText }),
        }
      );
      const data = await res.json();

      if (res.ok) {
      }
      setLoading(false);
      navigation(0);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  if (loading)
    return (
      <div
        className="loading"
        style={{ textAlign: "center", marginTop: "25px" }}
      >
        Loading...
      </div>
    );
  console.log({ post });
  return (
    <div className="Post">
      <div className="post-content">
        <div className="back" onClick={() => navigation("/")}>
          <IoArrowBack />
        </div>
        <div className="title">
          <div>{post.title}</div>
          <div className="time">{new Date(post.timestamp).toDateString()}</div>
        </div>
        <div className="post-author">
          <h4>By Afro Cinema</h4>
        </div>
        {post && post.imageUrl !== "" && (
          <div className="image">
            <img src={post.imageUrl} />
          </div>
        )}
        <p className="post-text">{post.text}</p>
        <div className="comments">
          <div className="comment-section-header">
            <h4>{`Comments 
              ${post && post.comments && post.comments.length}`}</h4>
            <button onClick={() => addComment()}>Add comment</button>
          </div>
          <div className="comment-textarea">
            <textarea
              onChange={(e) => setCommentText(e.target.value)}
              maxLength="100"
            ></textarea>
          </div>
          {post && post.comments && post.comments.length > 0 ? (
            post.comments.map((comment, i) => (
              <div key={i} className="comment">
                <div className="comment-username">{comment.username}</div>
                <div className="comment-text">{comment.commentText}</div>
              </div>
            ))
          ) : (
            <div style={{ fontSize: "1rem", fontWeight: "300" }}>
              No comments
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import PostCard from "./PostCard";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    fetchAllPosts();
  }, []);
  async function fetchAllPosts() {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_PROD_URL}/api/public/posts`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setPosts(data.posts);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function goToPost(id) {
    navigation("/posts/" + id);
  }
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <div className="Posts">
      <div className="section-heading">Posts</div>
      <div className="posts-div">
        {posts && posts.length > 0 ? (
          posts.map((post, i) => (
            <PostCard key={i} post={post} goToPost={goToPost} />
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "5px" }}>
            No blog posts
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;

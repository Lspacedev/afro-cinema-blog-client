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

      const res = await fetch("http://localhost:3000/api/public/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setPosts(data.posts);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function goToPost(id) {
    console.log({ id });
    navigation("/posts/" + id);
  }
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="Posts">
      <div className="section-heading">Posts</div>
      <div className="posts-div">
        {posts &&
          posts.length > 0 &&
          posts.map((post, i) => (
            <PostCard key={i} post={post} goToPost={goToPost} />
          ))}
      </div>
    </div>
  );
}

export default Posts;

"use client";

import { useState, useEffect } from "react";
import { fetchMorePosts } from "../actions"; 

export default function ClientPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleLoadMore = async () => {
    const newPosts = await fetchMorePosts(posts.length); 
    setPosts([...posts, ...newPosts]);
  };

  return (
    <div>
      <h3>Client Side Posts (with Server Action)</h3>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
      <button onClick={handleLoadMore}>Load More Posts</button>
    </div>
  );
}
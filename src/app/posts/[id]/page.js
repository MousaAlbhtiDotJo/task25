// app/posts/[id]/page.jsx
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  const post = posts.find((p) => p.id == resolvedParams.id);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.content.substring(0, 50),
  };
}

export default async function PostPage({ params }) {
  const resolvedParams = await params;

  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  });
  const posts = await res.json();
  
  const post = posts.find((p) => p.id == resolvedParams.id);

  if (!post) {
    return notFound(); 
  }

  return (
    <main style={{ padding: "20px", maxWidth: "600px" }}>
      <h1 style={{ color: "darkblue" }}>{post.title}</h1>
      <p style={{ lineHeight: "1.6", fontSize: "18px" }}>{post.content}</p>
      
      <br />
      <a href="/" style={{ color: "red", textDecoration: "underline" }}>
        Back to Home
      </a>
    </main>
  );
}
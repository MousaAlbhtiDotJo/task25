import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${resolvedParams.id}`);
    if (!res.ok) return { title: "Post Not Found" };
    const post = await res.json();
    
    return {
      title: post.title,
      description: post.body.substring(0, 50),
    };
  } catch (error) {
    return { title: "Error" };
  }
}

export default async function PostPage({ params }) {
  const resolvedParams = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${resolvedParams.id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return notFound();
  }
  
  const post = await res.json();

  return (
    <main style={{ padding: "20px", maxWidth: "600px" }}>
      <h1 style={{ color: "darkblue" }}>{post.title}</h1>
      <p style={{ lineHeight: "1.6", fontSize: "18px" }}>{post.body}</p>
      
      <br />
      <a href="/" style={{ color: "red", textDecoration: "underline" }}>
        Back to Home
      </a>
    </main>
  );
}
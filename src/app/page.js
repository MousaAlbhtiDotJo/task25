import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store'
  });
  
  const posts = await res.json();

  return (
    <main style={{ padding: "20px" }}>
      <h1>My Awesome Blog</h1>
      
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>            
            <br />
            <Link href={`/posts/${post.id}`} style={{ color: "blue", textDecoration: "underline" }}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
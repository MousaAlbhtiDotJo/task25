import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    return <div>Failed to load blog posts...</div>;
  }

  const posts = await res.json();

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#333", borderBottom: "2px solid #ccc", paddingBottom: "10px" }}>
        My Awesome Blog 📝
      </h1>
      
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #eee", padding: "15px", marginBottom: "15px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#0056b3", textTransform: "capitalize" }}>{post.title}</h3>
            <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>            
            <br />
            <Link href={`/posts/${post.id}`} style={{ color: "white", backgroundColor: "#0056b3", padding: "8px 12px", textDecoration: "none", borderRadius: "4px", fontSize: "14px" }}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

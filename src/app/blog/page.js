export const revalidate = 60; 

export default async function BlogPage() {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  
  const posts = await res.json();

  return (
    <main style={{ padding: '20px' }}>
      <h1>blog</h1>
      <ul>
        {posts.map((item)=>(
            <li key={item.id}>{item.title}</li>
        ))}
        
      </ul>
    </main>
  );
}
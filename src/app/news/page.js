import ClientPosts from "../components/ClientPosts";
export default async function NewsPage() {
  



    
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    cache: 'no-store'
  });

  const news = await res.json();

  return (
    <div>
    <ClientPosts/>
    <main style={{ padding: '20px' }}>
      <h1>latest news (SSR)</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
    </div>
  );
}
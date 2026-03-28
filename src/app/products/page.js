// app/products/page.jsx

export default async function ProductsPage() {
  
  const res = await fetch('https://fakestoreapi.com/products?limit=3', {
    cache: 'force-cache'
  });

  const products = await res.json();

  return (
    <main style={{ padding: '20px' }}>
      <h1>the products </h1>
      <ul>
       {products.map((item)=>{
        
       return <li key={item.id}>{item.title}</li>

       })}
        
      </ul>
    </main>
  );
}
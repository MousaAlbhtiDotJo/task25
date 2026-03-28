export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    return <div>Failed to load products</div>;
  }

  const products = await res.json();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

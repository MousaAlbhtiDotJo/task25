
let posts = [
  { id: 1, title: "next.js", content: "learn next." },
  { id: 2, title: "node.js", content: "learn node" }
];

export async function GET() {
  return Response.json(posts);
}

export async function POST(request) {
  const body = await request.json();

  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content
  };

  posts.push(newPost);

  return Response.json(newPost, { status: 201 });
}
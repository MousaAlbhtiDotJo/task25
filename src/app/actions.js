"use server";

export async function fetchMorePosts(currentCount) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${currentCount}&_limit=5`);
  const data = await res.json();
  return data;
}
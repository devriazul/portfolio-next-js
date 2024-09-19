// services/api.js

export async function fetchProjects() {
  const response = await fetch('https://api.devriazul.com/api/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function fetchProjectById(id) {
  const response = await fetch(`https://api.devriazul.com/api/projects/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
}

export async function fetchBlogs() {
  const response = await fetch('https://api.devriazul.com/api/blogs');
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
}

export async function fetchBlogById(id) {
  const response = await fetch(`https://api.devriazul.com/api/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
}

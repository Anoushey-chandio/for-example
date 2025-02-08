// app/blog/page.tsx
import Link from 'next/link';

const blogData = [
  {
    title: 'First Blog Post',
    description: 'This is a short description for the first blog post.',
    slug: 'first-blog-post', // This slug will match the dynamic route
  },
  {
    title: 'Second Blog Post',
    description: 'A short description for the second blog post.',
    slug: 'second-blog-post',
  },
];

const BlogList = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      {blogData.map((post) => (
        <div key={post.slug} className="mb-8">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-lg mb-4">{post.description}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

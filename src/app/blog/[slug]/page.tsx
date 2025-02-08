// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface BlogPost {
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
}

const blogData: BlogPost[] = [
  {
    title: 'First Blog Post',
    description: 'This is a short description for the first blog post.',
    content: 'This is the full content of the first blog post...',
    image: '/images/Rectangle 13.png',
    slug: 'first-blog-post',
  },
  {
    title: 'Second Blog Post',
    description: 'A short description for the second blog post.',
    content: 'Here is the full content of the second blog post...',
    image: '/images/Rectangle 13.png',
    slug: 'second-blog-post',
  },
];

// Fetch blog data based on slug
const fetchBlogPost = (slug: string) => {
  return blogData.find((post) => post.slug === slug) || null;
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blogPost = fetchBlogPost(slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg">{blogPost.content}</p>
    </div>
  );
};

export default BlogPostPage;

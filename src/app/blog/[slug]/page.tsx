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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
    image: '/images/Rectangle 13.png',
    slug: 'first-blog-post',
  },
  {
    title: 'Second Blog Post',
    description: 'A short description for the second blog post.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
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
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">{blogPost.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{blogPost.description}</p>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="w-full h-auto rounded-lg shadow-lg mb-8"
      />
      <div className="space-y-6 text-gray-800">
        <p className="text-lg leading-relaxed">{blogPost.content}</p>
        <p className="text-sm text-gray-500 italic">This is a dummy paragraph for testing the content length.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur purus ut felis pharetra, eget vehicula turpis faucibus. Sed egestas mauris ac urna pharetra, vel venenatis lorem tempor.</p>
        <p className="text-lg">Nunc tincidunt, nulla eu fermentum consequat, neque justo interdum felis, sit amet tincidunt magna neque at libero. Nam auctor, sem ac porttitor condimentum, mi nunc scelerisque felis, ut accumsan erat purus ut orci.</p>
      </div>
    </div>
  );
};

export default BlogPostPage;


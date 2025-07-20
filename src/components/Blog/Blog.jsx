import "./Blog.css";

const BlogCard = ({ imageSrc, title, description }) => {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        <a href="#" className="blog-card-link">
          Read more <img src="./src/assets/images/read-more-arrow.png" alt="Read more arrow" />
        </a>
      </div>
    </article>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      imageSrc: "./src/assets/images/blog-solar-panel.png",
      title: "The Silent Power Behind Energy Stability: Why IT Operations are the Real MVPs",
      description: "Explore how IT operations quietly underpin energy stability, blending domain expertise technology...",
    },
    {
      imageSrc: "./src/assets/images/blog-windmill.png",
      title: "Green IT: How Sustainable Practices are Reshaping Energy Operations",
      description: "Discover how IT can lead the charge in ESG alignment and sustainability while optimizing energy operations...",
    },
    {
      imageSrc: "./src/assets/images/blog-team.png",
      title: "The Secret to Success: Why People Matter More Than Ever in IT Outsourcing",
      description: "Learn how a people-first approach transforms organizational success and client relationships...",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <p className="blog-subtitle">BLOG</p>
          <h2 className="blog-title">Insights That Matter: Thought Leadership From Skedara.</h2>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} imageSrc={post.imageSrc} title={post.title} description={post.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

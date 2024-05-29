const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Discover Your Style</h1>
          <p className="mb-5 text-lg">
            Explore our latest collection of fashion trends, accessories, and more. Find the perfect look for every occasion and make a statement wherever you go.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

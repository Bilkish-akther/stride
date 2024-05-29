const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0 lg:ml-6"
          alt="Shop Image"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">Welcome to Our Shop!</h1>
          <p className="py-6 text-lg text-gray-700">
            Discover the best products at unbeatable prices. Our mission is to provide 
            high-quality items that meet your needs and exceed your expectations. Enjoy 
            a seamless shopping experience with a wide range of products, fast shipping, 
            and excellent customer service.
          </p>
          <button className="btn btn-primary btn-lg">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;

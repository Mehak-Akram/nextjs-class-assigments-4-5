export default function myComponents() {
  return (
    <div>
      <section id="hero" className="main-heading">
        <h1>WELCOME TO MY BLOGS</h1>
      </section>
      <section id="blogs" className="blog-section">
        <div className="blogContainer">
          <div className="imageContainer"></div>
          <h1 className="title">Tips for Balancing Work, Life, and Learning</h1>
          <p className="description">
            Balancing work, personal life, and ongoing education can be
            challenging.
          </p>
          <a href="blog_1">
            <button className="action_btn2">know More</button>
          </a>
        </div>

        <div className="blogContainer">
          <div className="imageContainer2"></div>
          <h1 className="title"> How to Cultivate a Lifelong Learning Habit</h1>
          <p className="description">
            How to Cultivate a Lifelong Learning Habit.
          </p>
          <a href="blog_2">
            <button className="action_btn2">know More</button>
          </a>
        </div>

        <div className="blogContainer">
          <div className="imageContainer3"></div>
          <h1 className="title">
            AI in Daily Life: How Artificial Intelligence is Transforming
            Everyday Tasks:
          </h1>
          <p className="description">
            AI is increasingly integrated into everyday life 
          </p>
          <a href="blog_3">
            <button className="action_btn2">know More</button>
          </a>
        </div>
        <div className="blogContainer">
          <div className="imageContainer4"></div>
          <h1 className="title">
            Top 5 Superfoods to Boost Your Immune System
          </h1>
          <p className="description">
            Superfoods are nutrient-rich foods that provide health
          </p>
          <a href="blog_4">
            <button className="action_btn2">know More</button>
          </a>
        </div>
        <div className="blogContainer">
          <div className="imageContainer5"></div>
          <h1 className="title">
            How to Mix Paint Colors: Achieving Vibrancy and Depth
          </h1>
          <p className="description">
            Achieving the perfect color that create depth in your paintings.
          </p>
          <a href="blog_5">
            <button className="action_btn2">know More</button>
          </a>
        </div>
        <div className="blogContainer">
          <div className="imageContainer6"></div>
          <h1 className="title">How to Set Goals and Actually Achieve Them</h1>
          <p className="description">
            Setting and achieving goals requires a structured approach.
          </p>
          <a href="blog_6">
            <button className="action_btn2">know More</button>
          </a>
        </div>
      </section>
    </div>
  );
}

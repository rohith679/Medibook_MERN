import React, { useState, useEffect } from "react";
import mainImage from "../images/homepage.jpg";
import aboutImage from "../images/aboutimg.jpg";

const MainAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Review Data
  const reviews = [
    { text: "Excellent service and great doctors!" },
    { text: "Booking was fast and easy!" },
    { text: "Very satisfied with the consultation." },
    { text: "Convenient and reliable platform." },
    { text: "Highly recommend for timely appointments!" },
    { text: "Had a great experience from start to finish!" },
    { text: "Booking was so straightforward and quick." },
    { text: "The website is so easy to use." },
  ];

  // Review slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Styles
  const sectionStyles = {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    flex: 1,
  };

  const headingStyles = {
    fontSize: "2.5rem",
    color: "hsl(45, 100%, 72%)",
  };

  const aboutHeadingStyles = {
    color: "hsl(45, 100%, 72%)",
    marginBottom: "1rem",
  };

  const imageStyles = {
    flex: 1,
    width: "100%",
    height: "auto",
  };

  const sectionMarginStyles = {
    margin: "6rem auto", // Increased margin for spacing between sections
  };

  const reviewSectionStyles = {
    marginTop: "6rem", // Increased space above reviews
    marginBottom: "6rem", // Added space below reviews to avoid mixing with the footer
    textAlign: "center",
  };

  const reviewContainerStyles = {
    overflow: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  };

  const reviewBoxWrapperStyles = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentIndex * 33.33}%)`, // Moves the boxes
    width: `${reviews.length * 33.33}%`, // Adjusts width to fit all reviews
  };

  const reviewBoxStyles = {
    flex: "1 0 20%", // Reduced box width
    padding: "1.5rem",
    borderRadius: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
    color: "#fff",
    border: "2px solid hsl(45, 100%, 72%)",
    margin: "0 0.5rem",
  };

  const reviewHeadingStyles = {
    color: "hsl(45, 100%, 72%)",
    marginBottom: "2rem",
    fontSize: "1.5rem",
  };

  const reviewTextStyles = {
    fontStyle: "italic",
  };

  const reviewNameStyles = {
    marginTop: "0.5rem",
    fontWeight: "bold",
  };

  // Increased margin to avoid mixing between image and text in "About Us"
  const aboutImageWrapperStyles = {
    flex: 1,
    marginRight: "3rem", // Added space between image and text
  };

  return (
    <>
      {/* Main Section */}
      <section style={{ ...sectionStyles, ...sectionMarginStyles }}>
        <div style={contentStyles}>
          <h1 style={headingStyles}>
            Expert Care,
            <br />
            Just an Appointment Away
          </h1>
          <p>
            Welcome to our doctor appointment booking platform, where your
            well-being is our priority. Schedule appointments with ease and get
            access to trusted healthcare professionals right from your home.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={mainImage} alt="main" style={imageStyles} />
        </div>
      </section>

      {/* About Us Section */}
      <section style={sectionMarginStyles}>
        <h2 className="page-heading about-heading" style={aboutHeadingStyles}>
          About Us
        </h2>
        <div style={sectionStyles}>
          <div style={aboutImageWrapperStyles}>
            <img src={aboutImage} alt="about" style={imageStyles} />
          </div>
          <div style={contentStyles}>
            <p>
              This platform is designed to simplify the process of booking
              appointments with doctors, ensuring that you receive timely and
              effective healthcare. We aim to make healthcare accessible by
              providing a seamless online experience where you can connect with
              experienced professionals across various specialties. Whether you
              need a general consultation or specialized care, our platform is
              here to help you manage your health efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={reviewSectionStyles}>
        <h2 style={reviewHeadingStyles}>Our Customer Reviews</h2>
        <div style={reviewContainerStyles}>
          <div style={reviewBoxWrapperStyles}>
            {reviews.concat(reviews).map((review, index) => (
              <div key={index} style={reviewBoxStyles}>
                <p style={reviewTextStyles}>"{review.text}"</p>
                <p style={reviewNameStyles}>- User</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainAbout;

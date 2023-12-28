import styles from "./Reviews.module.scss";
import { useEffect, useState, useRef } from "react";
import Review from "./Review";

const reviews = [
  {
    text: "The e-commerce fashion store I frequent offers an extensive range of styles at various price points. The site is user-friendly, making it easy to navigate and find specific items. They provide detailed size guides and customer reviews, which helped me pick the right size and understand the product quality before purchasing. Returns were hassle-free, and their customer service was prompt and helpful.",
    name: "Anna",
  },
  {
    text: "I've had a great experience with an online electronics store. Their website is well-organized, featuring comprehensive product descriptions and user reviews that aided my decision-making process. The range of products available is impressive, and they offer competitive prices. Shipping was quick and reliable, and their customer service promptly resolved any issues I had with a purchase.",
    name: "Mark",
  },
  {
    text: "The online jewelry retailer I use offers stunning pieces and ensures authenticity with proper certifications. They provide detailed information about each item, including metal purity and gemstone quality, along with high-resolution images that showcase the jewelry from multiple angles. The purchasing process was secure, and the jewelry arrived beautifully packaged and exactly as described.",
    name: "Kate",
  },
  {
    text: "This e-commerce fashion platform has been my go-to for both basics and statement pieces. The variety of styles caters to different tastes, and the size guide is accurate, ensuring I get the right fit every time. Their shipping is prompt, and I've always received my orders in excellent condition. It's my one-stop-shop for fashion!",
    name: "Elizabeth",
  },
  {
    text: "This online electronics store is my go-to for all tech needs. The website is easy to navigate, and the detailed product specifications help me make informed decisions. They have competitive prices and regularly offer deals. Shipping is reliable, and the customer service team is efficient in addressing any concerns.",
    name: "John",
  },
];

export default function Reviews() {
  const [reviewsRender, setReviewsRender] = useState(
    reviews.map((review) => {
      return <Review key={review.name} text={review.text} name={review.name} />;
    })
  );
  const [right, setRight] = useState(0);
  const firstRender = useRef(false);
  const [count, setCount] = useState(0);
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    if (!firstRender.current) {
      const interval = setInterval(() => {
        setRight((current) => current + 50);
      }, 1000);
      setCarousel(interval);
    }

    firstRender.current = true;
  }, [firstRender]);

  useEffect(() => {
    setTimeout(() => {
      setCount((current) => current + 1);
      setReviewsRender([
        ...reviewsRender,
        <Review
          key={count}
          text={reviews[count % 5].text}
          name={reviews[count % 5].name}
        />,
      ]);
    }, 5500);
  }, [count, reviewsRender]);

  return (
    <div
      className={styles.reviewsContainer}
      onTouchStart={() => {
        clearInterval(carousel);
      }}
      onTouchEnd={() => {
        const interval = setInterval(() => {
          setRight((current) => current + 50);
        }, 1000);
        setCarousel(interval);
      }}
    >
      <div className={styles.outerContainer}>
        <div
          style={{ right: `${right}px` }}
          className={styles.innerContainer}
          onMouseEnter={() => {
            setTimeout(() => {
              clearInterval(carousel);
            }, 500);
          }}
          onMouseLeave={() => {
            const interval = setInterval(() => {
              setRight((current) => current + 50);
            }, 1000);
            setCarousel(interval);
          }}
        >
          {reviewsRender}
        </div>
      </div>
    </div>
  );
}

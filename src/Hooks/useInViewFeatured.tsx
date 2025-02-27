import React from 'react';
import { Link } from 'react-router-dom';
import useInView from './useInView.tsx';

const FeaturedClasses = () => {
  const { ref: otherRef, inView: otherVisible } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="other-lessons">
      <div className="other-lessons-inner">
        <div className={`other-image-container slide-left ${otherVisible ? 'show' : ''}`}>
          <img 
            src="https://i.imgur.com/pcXgQqk.jpeg" 
            alt="Music Student Singing" 
          />
        </div>
        <div 
          className={`other-text-container slide-right ${otherVisible ? 'show' : ''}`}
          ref={otherRef}
        >
          <div className="class-box">
            <h1>FEATURED</h1>
            <p>
              We also offer acting classes, adult dance classes, company classes, and classes at Goddard School of Franklin!
            </p>
            <Link to="/classes/featured" className="learn-more">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;

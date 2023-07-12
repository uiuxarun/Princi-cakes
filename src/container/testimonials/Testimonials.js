import React from 'react';
import './Testimonials.css';
import Subheading from '../../component/Subheading/Subheading';
import { images, data } from '../../constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialsCard = ({ review: { title, subTitle,imgUrl,description } }) => (
  <div className="testimonial_content">
    <p>{subTitle}</p>
    <div className="profile">
      <img src={imgUrl} alt="" />
      <div className="profile_description">
        <h5>{title}</h5>
        <h6>{description}</h6>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="testimonial_head" id='Reviews'>
    <Subheading Subheading1="What people say" subheading2="Testimonials" />
    <div className="testimonial_sub-head">
      <div className="testimonial_head1">
        <div className="review_part1">
          <img style={{width:'12%', marginBottom:'2rem'}} src={images.quote} alt="" />
          <h2>What <span>People</span> Say <span>About</span> Us</h2>
          <p>More than 200+ monthly visitors on Princi cakes store</p>
        </div>
        <div className="review_part2">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop 
            autoPlay
            interval={3000}
            transitionTime={1000}
            emulateTouch
            showIndicators={true}>
            <TestimonialsCard review={data.reviews[0]} />
            <TestimonialsCard review={data.reviews[1]} />
            <TestimonialsCard review={data.reviews[2]} />
            <TestimonialsCard review={data.reviews[3]} />
            <TestimonialsCard review={data.reviews[4]} />
            <TestimonialsCard review={data.reviews[5]} />
            <TestimonialsCard review={data.reviews[6]} />
            <TestimonialsCard review={data.reviews[7]} />
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;

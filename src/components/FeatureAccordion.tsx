import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide, SplideProps } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/FeatureAccordion.css';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureAccordionProps {
  features: Feature[];
  imagePosition?: 'left' | 'right';
}

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({
  features,
  imagePosition = 'right',
}) => {
  const contentRef = useRef<Splide>(null);
  const mediaRef = useRef<Splide>(null);

  useEffect(() => {
    const contentSplide = contentRef.current?.splide;
    const mediaSplide = mediaRef.current?.splide;
    if (contentSplide && mediaSplide) {
      contentSplide.sync(mediaSplide);
    }
  }, [features]);

  const contentOptions: SplideProps['options'] = {
    direction: 'ttb',
    height: 168,
    perPage: 1,
    pagination: false,
    arrows: false,
    drag: false,
    wheel: true,
    speed: 500,
  };

  const mediaOptions: SplideProps['options'] = {
    type: 'fade',
    perPage: 1,
    pagination: false,
    arrows: false,
    drag: false,
    speed: 500,
  };

  return (
    <section className={`tt-feature-accordion ${imagePosition === 'left' ? 'tt-align-left' : 'tt-align-right'}`}>
      <Splide
        ref={contentRef}
        options={contentOptions}
        className="tt-accordion-content-slider splide"
      >
        <div className="splide__track">
          <ul className="splide__list splide-vertical">
            {features.map((feature, index) => (
              <SplideSlide tag="li" key={index} className="splide__slide">
                <div className="accordion-content-wrap">
                  <h3 className="heading-default">{feature.title}</h3>
                  <div className="accordion-text-wrap">
                    <div>{feature.description}</div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </ul>
        </div>
      </Splide>

      <Splide
        ref={mediaRef}
        options={mediaOptions}
        className="tt-accordion-media-slider splide"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {features.map((feature, index) => (
              <SplideSlide tag="li" key={index} className="splide__slide splide-accordion">
                <div className="accordion-media-wrap">
                  <img src={feature.image} alt={feature.title} className="accordion-media" />
                </div>
              </SplideSlide>
            ))}
          </ul>
        </div>
      </Splide>
    </section>
  );
};

export default FeatureAccordion; 
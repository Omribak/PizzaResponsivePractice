import React from 'react';
import styled from 'styled-components';

const SpecialsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SpecialsTitle = styled.h1`
  font-family: 'Dancing Script';
  font-size: 4rem;
  font-weight: bold;
  color: red;
  margin-left: 3.5rem;
`;

const SpecialsContent = styled.p`
  font-weight: bold;
  width: 30vw;
  background-color: rgb(168, 164, 164, 0.1);
  padding: 2rem;
  border-radius: 10px;
`;

const SpecialsImage = styled.img`
  width: 30%;
  height: 70vh;
  border-radius: 40px;
  margin-top: 2rem;
`;

export default function Specials() {
  return (
    <SpecialsContainer>
      <div>
        <SpecialsTitle>Launch Specials</SpecialsTitle>
        <SpecialsContent className="specials-content">
          At our pizza restaurant, we're excited to introduce our latest launch
          specials that promise to elevate your dining experience. Discover a
          tantalizing array of flavors crafted with the finest ingredients,
          showcasing a perfect blend of tradition and innovation. From
          mouthwatering specialty pizzas with unique toppings to delightful
          appetizers that set the stage for an unforgettable meal, our launch
          specials cater to every palate. Immerse yourself in the culinary
          journey as we present limited-time offers that celebrate the artistry
          of pizza-making. Join us and savor these exclusive creations that
          bring a burst of freshness and excitement to your dining table. It's
          more than just a meal; it's a celebration of flavor and a warm
          invitation to experience the best of our culinary expertise.
        </SpecialsContent>
      </div>
      <SpecialsImage
        src="specials-launch-img-small.jpg"
        className="specials-image"
      />
    </SpecialsContainer>
  );
}

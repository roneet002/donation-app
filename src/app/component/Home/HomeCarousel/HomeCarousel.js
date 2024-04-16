"use client"
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "./HomeCarousel.css";
import Image from "next/image";
import data from '../../../../../public/Items.json';






const HomeCarousel = () => {
    
  return (
    <>
     <section className="hero-section hero-section-full-height">
        <div className="container-fluid">
    <Carousel id="hero-slide" fade="true">

        {data.bootstrap && data.bootstrap.map((item)=>{
return(
<Carousel.Item key={item.id}>
      <Image
                      src={item.imageUrl}
                      alt={item.name}
                      className="carousel-image img-fluid"
                      fill
                      sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover', // cover, contain, none
                        }}
                      priority
                    />
        <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end">
                      <h1>{item.title}</h1>

                      <p>{item.body}</p>
        </Carousel.Caption>
      </Carousel.Item>
)

        })}
    </Carousel>

        </div>
      </section>
    </>
  );
};

export default HomeCarousel;

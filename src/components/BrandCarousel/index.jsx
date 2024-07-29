import React from 'react';
import './styles.css';

const BrandCarousel = () => {
    const totalBrands = 33;
    const brands = Array.from({ length: totalBrands }, (_, index) => ({
        id: index + 1,
        src: `/marcas/${index + 1}.webp`,
    }));

    return (
        <section id='marcas' className='bg-base pb-10'>
            <h2 className='text-center pb-8 pt-12 text-2xl md:text-4xl text-gray-700 font-bold'>Marcas</h2>
            <div className="marquee mb-16">
                <div className="flex items-center animate-scroll grayscale hover:grayscale-0 transition-all cursor-pointer ">
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            src={brand.src}
                            alt={`Marca ${brand.id}`}
                            className="h-20 w-20 object-contain  "
                            loading='lazy'
                        />
                    ))}
                    {brands.map((brand, index) => (
                        <img
                            key={`duplicate-${index}`}
                            src={brand.src}
                            alt={`Brand ${brand.id}`}
                            className="h-20 w-20 object-contain"
                            loading='lazy'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
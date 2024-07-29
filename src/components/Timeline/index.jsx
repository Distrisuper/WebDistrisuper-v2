import React, { useState, useEffect, useRef } from 'react';

const Timeline = ({ data }) => {
    const [selectedYear, setSelectedYear] = useState(null);
    const refs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const midPoint = window.innerHeight / 2;
            let closestYear = null;
            let minDistance = Number.MAX_VALUE;

            refs.current.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const distance = Math.abs(rect.top + rect.height / 2 - midPoint);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestYear = data[index].year;
                    }
                }
            });

            setSelectedYear(closestYear);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [data]);

    return (
        <div className='flex justify-center md:justify-end items-center'>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }} className='w-3/4'>
                <div style={{ position: 'absolute', left: '50%', height: '100%', width: '2px', backgroundColor: '#ccc' }} />
                {data.map((item, index) => {
                    refs.current[index] = refs.current[index] || React.createRef();

                    return (
                        <div key={item.year} ref={refs.current[index]} className="my-4 md:my-[40px] relative w-full">
                            <div className='flex items-center relative justify-center sm:justify-normal'>
                                <div style={{
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: selectedYear === item.year ? '#00AEEF' : '#ccc',
                                    margin: '0 10px'
                                }} />
                                <div style={{ fontSize: selectedYear === item.year ? '56px' : '32px', fontWeight: selectedYear === item.year ? 'bold' : 'normal', color: selectedYear === item.year ? '#00AEEF' : '#ccc' }}>
                                    {item.year}
                                </div>
                            </div>
                            {selectedYear === item.year && (
                                <div style={{
                                    position: 'absolute',
                                    padding: '20px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #ccc',
                                    borderBottom: '3px solid #1B9FC6',
                                    borderRadius: '5px',
                                    textAlign: 'left',
                                    zIndex: 50
                                }}
                                    className='w-[300px] -inset-x-12 md:inset-x-1/2 md:top-0 md:-translate-x-1/2 mx-6 md:mx-0 md:w-[500px] border-b-4 border-b-secondary'
                                >
                                    <p className='text-balance text-lg text-gray-700 text-center'>{item.text}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;

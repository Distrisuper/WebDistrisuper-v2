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
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [data]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {data.map((item, index) => {
                refs.current[index] = refs.current[index] || React.createRef();

                return (
                    <div key={item.year} ref={refs.current[index]} style={{ margin: '20px 0', position: 'relative' }}>
                        <div style={{ fontSize: '24px', fontWeight: selectedYear === item.year ? 'bold' : 'normal' }}>
                            {item.year}
                        </div>
                        {selectedYear === item.year && (
                            <div style={{
                                position: 'absolute',
                                left: `${index % 2 === 0 ? '100px' : '-400px'}`,
                                top: '0',
                                padding: '10px'
                            }}
                                className='w-[300px] border bg-white border-b-4 border-b-secondary'
                            >
                                <p>{item.text}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;

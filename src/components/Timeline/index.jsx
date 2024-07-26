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
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <div style={{ position: 'absolute', left: '50%', height: '100%', width: '2px', backgroundColor: '#ccc' }} />
            {data.map((item, index) => {
                refs.current[index] = refs.current[index] || React.createRef();

                return (
                    <div key={item.year} ref={refs.current[index]} style={{ margin: '40px 0', position: 'relative', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                                left: '50%',
                                transform: 'translateX(-50%)',
                                top: '0px',
                                padding: '20px',
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderBottom: '3px solid #1B9FC6',
                                borderRadius: '5px',
                                width: '500px',
                                textAlign: 'left'
                            }}
                                className='border-b-4 border-b-secondary'
                            >
                                <p className='text-balance text-lg text-gray-700 text-center'>{item.text}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;

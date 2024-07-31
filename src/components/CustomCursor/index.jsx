// CustomCursor.js
import React, { useEffect, useRef, useState } from 'react';
// import './styles.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (cursorRef.current && cursorInnerRef.current) {
            const { x, y } = mousePosition;

            // Move the outer cursor
            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;

            // Move the inner cursor with delay
            const delay = 0.2; // seconds
            const moveInnerCursor = () => {
                cursorInnerRef.current.style.left = `${x}px`;
                cursorInnerRef.current.style.top = `${y}px`;
            };

            // Move the inner cursor with a slight delay
            setTimeout(moveInnerCursor, delay * 1000);
        }
    }, [mousePosition]);

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-inner" ref={cursorInnerRef} />
        </>
    );
};

export default CustomCursor;

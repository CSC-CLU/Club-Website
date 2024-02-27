import React, { useState, useEffect, useRef } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
    const [animate, setAnimate] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.25, // Adjust this threshold as needed
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`profile ${animate ? 'animate' : ''}`}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
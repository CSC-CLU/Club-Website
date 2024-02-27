import React, { useState, useEffect, useRef } from 'react';

interface FadeInUpProps {
    children: React.ReactNode;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children }) => {
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
        <div ref={elementRef} className={`fade-in-up ${animate ? 'animate' : ''}`}>
            {children}
        </div>
    );
};

export default FadeInUp;
// components/AnimatedWrapper.tsx
'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface AnimatedWrapperProps {
    children: React.ReactNode;
    delay?: number;
}

export const AnimatedWrapper = ({ children, delay = 0 }: AnimatedWrapperProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className="relative overflow-hidden">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
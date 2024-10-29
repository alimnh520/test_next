'use client'

import { useEffect } from 'react';
import styles from '../about/style.module.css';

const TextAnimation = ({ text }) => {
    useEffect(() => {
        const letters = document.querySelectorAll('.letter');

        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = 1; // Fade in
                letter.style.transform = 'scale(0.5)'; // Shrink
            }, index * 300); // 300 milliseconds delay per letter
        });
    }, [text]);

    return (
        <div className={styles.textAnimation}>
            {text.split(' ').map((word, index) => (
                <span key={index}>
                    {word.split('').map((letter, letterIndex) => (
                        <span key={letterIndex} className={`letter ${styles.letter}`}>
                            {letter}
                        </span>
                    ))}
                    {/* Add a space after each word */}
                    <span> </span>
                </span>
            ))}
        </div>
    );
};


export default TextAnimation;

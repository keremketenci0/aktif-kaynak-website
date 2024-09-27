// react
import React from 'react';

// styles
import styles from '@/components/ui/button/ButtonDecode.module.css';

interface btnDecodeProps {
    text: string;
}

export const ButtonDecode: React.FC<btnDecodeProps> = ({ text }) => {
    return (
        <button className={`${styles.ButtonDecode}`}>
            <span>
                {text}
            </span>
        </button>
    );
};
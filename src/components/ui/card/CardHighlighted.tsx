// react
import React from 'react';

// styles
import styles from '@/components/ui/card/CardHighlighted.module.css';

// components ui
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"

interface CardHighlightedProps {
    divClass?: string;
    cardClass?: string;
    cardType: string;

    icon?: React.ReactNode;
    title?: React.ReactNode;
    titleClass?: string;
    content?: React.ReactNode;
    contentClass?: string;
    description?: React.ReactNode;
    descriptionClass?: string;
    footer?: React.ReactNode;
    footerClass?: string;
}

export const CardHighlighted: React.FC<CardHighlightedProps> = ({ divClass, cardClass, cardType, icon, title, titleClass, content, contentClass, description, descriptionClass, footer, footerClass }) => {
    return (
        <div className={`${divClass} ${styles[`${cardType}CardHighlighted`]}`}>
            <Card className={`${cardClass} ${styles[`${cardType}CardHighlighted2`]}`}>
                <CardHeader>
                    {icon && (
                        <CardTitle className={titleClass}>
                            {icon}
                        </CardTitle>
                    )}
                    {title && (
                        <CardTitle className={titleClass}>
                            {title}
                        </CardTitle>
                    )}
                </CardHeader>
                <div>
                    {description && (
                        <div className={`text-sm text-slate-400 ${descriptionClass}`}>
                            {description}
                        </div>
                    )}
                    {content && (
                        <CardContent className={contentClass}>
                            {content}
                        </CardContent>
                    )}
                </div>

                {footer && (
                    <div className={footerClass}>
                        <CardFooter>
                            {footer}
                        </CardFooter>
                    </div>
                )}
            </Card>
        </div>
    );
};

"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react';

interface SmoothScrollLinkProps {
    href: string;
    children: React.ReactNode;
}

function smoothScroll(target: HTMLElement) {
    const startPosition = document.documentElement.scrollTop;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const scrollY = easeInOutCubic(progress, startPosition, distance, duration);

        window.scrollTo(0, scrollY);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    };

    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    };

    requestAnimationFrame(step);
}

export default function Button({ href, children }: SmoothScrollLinkProps) {
    const router = useRouter()
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (window.location.pathname === "/") {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScroll(targetElement);
            }
        } else {
            router.push("/" + href, { scroll: true })
        }
    };

    return (
        <Link href={href} onClick={handleClick} className="scroll-link">
            {children}
        </Link>
    );
}

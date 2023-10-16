import { useState, useEffect } from 'react';
import { breakpoints } from '../config/variable';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};

export const useMediaQueryXS = () => useMediaQuery(breakpoints.xs);
export const useMediaQuerySM = () => useMediaQuery(breakpoints.sm);
export const useMediaQueryMD = () => useMediaQuery(breakpoints.md);
export const useMediaQueryLG = () => useMediaQuery(breakpoints.lg);
export const useMediaQueryXL = () => useMediaQuery(breakpoints.xl);
export const useMediaQueryXXL = () => useMediaQuery(breakpoints.xxl);

export default useMediaQuery;

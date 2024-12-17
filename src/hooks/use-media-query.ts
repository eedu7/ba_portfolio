'use client';

import * as React from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState<boolean>(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    React.useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;

        const mediaQueryList = window.matchMedia(query);

        const onChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener('change', onChange);
        setMatches(mediaQueryList.matches); // Initial check

        return () => mediaQueryList.removeEventListener('change', onChange);
    }, [query]);

    return matches;
};

export default useMediaQuery;

import * as React from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState<boolean>(() => matchMedia(query).matches);

    React.useEffect(() => {
        const mediaQueryList = matchMedia(query);

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

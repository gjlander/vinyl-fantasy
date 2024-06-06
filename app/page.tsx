import { AlbumGrid, Hero } from '@/lib/components';
import { Suspense } from 'react';
export default function Home() {
    // console.log(newArrivals.length);

    return (
        <>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <AlbumGrid limit={12} />
            </Suspense>
        </>
    );
}

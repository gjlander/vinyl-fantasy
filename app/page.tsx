import { AlbumGrid, Hero, AlbumGridSkeleton } from '@/lib/components';
import { Suspense } from 'react';
export default function Home() {
    // console.log(newArrivals.length);

    return (
        <>
            <Hero />
            <Suspense fallback={<AlbumGridSkeleton length={12} />}>
                <AlbumGrid limit={12} />
            </Suspense>
        </>
    );
}

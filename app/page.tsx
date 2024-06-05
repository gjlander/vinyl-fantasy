import { newArrivals } from '@/lib/data';
import { AlbumGrid, Hero } from '@/lib/components';
export default function Home() {
    // console.log(newArrivals.length);

    return (
        <>
            <Hero />
            <AlbumGrid albums={newArrivals} />
        </>
    );
}

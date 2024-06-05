import { newArrivals } from '@/lib/data';
import { AlbumCard } from '@/lib/components';
const AlbumGrid = ({ albums }) => {
    return (
        <div className='albums-wrapper'>
            {albums.map((album) => {
                return <AlbumCard key={album.id} {...album} />;
            })}
        </div>
    );
};
export default AlbumGrid;

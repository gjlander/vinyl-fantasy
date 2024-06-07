import { getAlbums } from '@/lib/data';
import { AlbumCard } from '@/lib/components';
const AlbumGrid = async ({ limit = 12 }: components.AlbumGridProps) => {
    const albums = await getAlbums(limit);
    return (
        <div className='albums-wrapper'>
            {albums.map((album) => {
                return <AlbumCard key={album.id} album={album} />;
            })}
        </div>
    );
};
export default AlbumGrid;

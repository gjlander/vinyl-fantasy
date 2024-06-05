import { allAlbums } from '@/lib/data';
import { AlbumGrid } from '@/lib/components';
const Albums = () => {
    return <AlbumGrid albums={allAlbums} />;
};
export default Albums;

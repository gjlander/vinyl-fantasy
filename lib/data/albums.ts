import { prisma } from '@/utils';

const allAlbums = await prisma.albums.findMany();

const newArrivals = await prisma.albums.findMany({ take: 12 });

const getAlbums = async (limit: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const albums = await prisma.albums.findMany({ take: limit });
    return albums;
};
const getAlbumById = async (id: string) => {
    const album = await prisma.albums.findUnique({ where: { id: +id } });
    return album;
};

export { allAlbums, newArrivals, getAlbums, getAlbumById };

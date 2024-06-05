import { prisma } from '@/utils';

const allAlbums = await prisma.albums.findMany();

const newArrivals = await prisma.albums.findMany({ take: 12 });

export { allAlbums, newArrivals };

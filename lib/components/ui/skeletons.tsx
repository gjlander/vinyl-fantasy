import Image from 'next/image';

const DEFAULT_IMG = '/assets/blank-profile-picture-g07f413129_640.png';

const CardSkeleton = () => {
    return (
        <div className='card w-96 glass'>
            <figure className='overflow-hidden'>
                <div className='w-[384px] h-[384px]' />
            </figure>
            <div className='card-body p-5'>
                <div className='skeleton h-3 my-1 w-full'></div>
                <div className='skeleton h-3 my-1 w-full'></div>
                <div className='skeleton h-3 my-1 w-full'></div>
                <div className='flex'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className='skeleton h-3 w-16'></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AlbumGridSkeleton = ({ length = 12 }: { length: number }) => {
    return (
        <div className='albums-wrapper'>
            {Array.from({ length }).map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
};

export { CardSkeleton, AlbumGridSkeleton };

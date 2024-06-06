import Image from 'next/image';
import { getAlbumById } from '@/lib/data';
import { GenreMap } from '@/lib/components';
import { Spotify } from 'react-spotify-embed';
const DEFAULT_IMG = '/assets/blank-profile-picture-g07f413129_640.png';

const Album = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const album = await getAlbumById(id);
    if (!album) {
        return <div>Oops!</div>;
    }
    const {
        title,
        artist,
        year,
        genre,
        sleeve,
        media,
        price,
        comment,
        img_url,
        format,
        spotify_url,
    } = album;
    const formattedPrice = price!.toNumber().toFixed(2);
    return (
        <div className='m-5 sm:m-10 md:m-[5em] flex flex-col sm:flex-row justify-center w-100'>
            <div className='mb-0 h-full sm:sticky sm:top-20 overflow-visible shadow-none bg-transparent'>
                <Image
                    className='sm:max-h-[250px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[600px] rounded-xl -z-1'
                    width={450}
                    height={450}
                    src={img_url || DEFAULT_IMG}
                    alt='A lizard'
                />
            </div>

            <div className='sm:ml-5 md:ml-8 lg:ml-12 sm:mt-12 w-full sm:w-1/2'>
                <span className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                    {title}
                </span>
                <h2 className='text-3xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2'>
                    {artist}
                </h2>
                <h2 className='text-xl font-semibold mt-1'>{year}</h2>
                <h2 className='text-l'>
                    <i className='font-normal'>{format}</i>
                </h2>
                <GenreMap genres={genre} />
                <h2 className='text-xl mt-3'>
                    Sleeve: <b className='font-semibold'>{sleeve}</b>
                </h2>
                <h2 className='text-xl'>
                    Media: <b className='font-semibold'>{media}</b>
                </h2>
                <h1 className='text-4xl lg:text-6xl font-bold mt-2 mb-4'>
                    ${formattedPrice}
                </h1>

                <div className='w-full max-w-full sm:max-w-xs md:max-w-full'>
                    <textarea
                        // isReadOnly
                        // label='Additional notes'
                        // variant='bordered'
                        // labelPlacement='inside'
                        placeholder=''
                        defaultValue={comment || 'Wow!'}
                        // value={value}
                    />
                    <div className='my-4 flex gap-4 justify-center'>
                        <button
                            color='warning'
                            // variant='shadow'
                            // endContent={<FiShoppingCart />}
                            className='w-full h-14 text-lg font-semibold active:bg-default-400 active:shadow-default-300 active:text-white '
                        >
                            Add to cart
                        </button>
                        {/* {inWishlist ? (
                            <RemoveWishBtn
                                id={singleAlbum.sys.id}
                                setInWishlist={setInWishlist}
                            />
                        ) : (
                            <Button
                                color='warning'
                                variant='shadow'
                                startContent={<FiPlus />}
                                className='w-full h-14 text-lg font-semibold'
                                onClick={handleAddToWishlist}
                            >
                                Add to Wishlist
                            </Button>
                        )} */}
                    </div>
                    {/* <Divider className='my-4' /> */}
                    {spotify_url && (
                        <div
                            className='rounded-xl overflow-hidden'
                            aria-label='component wrapper'
                        >
                            {/* w/o this div, the Spotify player gets ugly white corners in dark mode */}
                            <Spotify
                                link={spotify_url}
                                className='w-full h-[600px] shadow-2xl'
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Album;

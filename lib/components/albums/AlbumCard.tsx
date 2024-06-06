import Image from 'next/image';
const AlbumCard = ({ album }: components.AlbumCardProps) => {
    const { title, artist, year, price, img_url } = album;
    const formattedPrice = price.toNumber().toFixed(2);
    return (
        <div className='card w-96 glass'>
            <figure>
                <Image src={img_url} alt={title} width={384} height={384} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>
                    {artist}, {year}
                </p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>
                        {formattedPrice}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;

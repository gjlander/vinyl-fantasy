const AlbumCard = ({ id, title, artist, year, img_url, format, price }) => {
    return (
        <div className='card w-96 glass'>
            <figure>
                <img src={img_url} alt='car!' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>
                    {artist}, {year}
                </p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>{price}</button>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;

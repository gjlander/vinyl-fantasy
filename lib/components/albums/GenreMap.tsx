const GenreMap = ({ genres }: { genres: string[] }) => {
    if (!genres || !genres.length) return; //added this line here
    const result = genres.map((item) => {
        return (
            <span className='badge mr-2 my-1' key={`${item}`}>
                {`${item}`}
            </span>
        );
    });
    return result;
};
export default GenreMap;
//Maps an array and returns each item as a pretty, small compact grey chip. Used in the search page and the album page

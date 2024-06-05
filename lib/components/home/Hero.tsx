const Hero = () => {
    return (
        <div
            className='hero min-h-screen'
            style={{
                backgroundImage:
                    'url(https://www.thomann.de/blog/wp-content/uploads/2222/09/vinylblog_header_770x425.jpg)',
            }}
        >
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-md'>
                    <h1 className='mb-5 text-5xl font-bold'>Vinyl Fantasy</h1>
                    <p className='mb-5'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

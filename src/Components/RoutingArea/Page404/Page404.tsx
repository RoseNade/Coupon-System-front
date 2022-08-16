import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404 flex-top-center">
            <h1>Page not found</h1>
            <iframe 
            
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/NQPTVHISuyk?start=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>

            </iframe>
        </div>
    );
}

export default Page404;

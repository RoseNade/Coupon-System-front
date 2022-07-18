import "./EmptyView.css";
interface EmptyViewProps {
    msg: string;
}

function EmptyView(props: EmptyViewProps): JSX.Element {
    return (
        <div className="EmptyView flex-top-center">
            <h2>{props.msg}</h2>

            <iframe

            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/fvtQYsckLxk" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>

            </iframe>
        </div>
    );
}

export default EmptyView;

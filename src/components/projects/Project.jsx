export default function Project({ image, title, description, link }) {
    return (
        <div className="project">
            <img src={image} alt={title} />
            <a className="caption-a" href={link} target="_blank" >
                <div className="caption">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <span className="visit-btn">Visit</span>
                </div>
            </a>
        </div>
    )
}
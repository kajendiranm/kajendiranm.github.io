export default function SocialIcon({ name, link, color }) {
    return (
        <a href={link} target="_blank">
            <i className={`bi bi-${name}`} style={{color: color}}></i>
        </a>
    )
}
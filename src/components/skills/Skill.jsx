export default function Skill({ skill, image}) {
    return (
        <div className="skill">
            <img src={image} alt={skill} />
            <p>{skill}</p>
        </div>
    )
}
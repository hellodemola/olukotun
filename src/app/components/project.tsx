import { IProject } from "../records/projects";

interface IEachProject {
    e: IProject
}

export default function Project ({ e }: IEachProject) {
    return (
    <div id="project"  className="pod">
        <a href={e.link} target="_blank">
        <p>{e.company}</p>
        <h3>{e.application}</h3>
        {e.content.map((each, n) => (
        <p className="content" key={n}>{each}</p>
        ))}
        <button>

        Read more
        &#10149;

        </button>
        </a>
    </div>
    )
}
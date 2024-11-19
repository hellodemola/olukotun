import Link from "next/link";
import Landing from "../components/landing";
import { projects } from "../records/projects";

export default function Project () {
    return (
        <main>
           <Landing />
           <div className="showCase">
            <Link href="/">
            &#x21f1;
              Back
            </Link>
           <div id="projects" className="pod">
           <h6>{projects[0].company}</h6>
           <h4 className="">{projects[0].application}</h4>
           
            {projects[0].content.map((each, n) => (
                <p className="content my-2" key={n}>{each}</p>
            ))}

            {projects[0].assets?.map((each, n) => (
                 <img className="w-full" src={each} key={n} alt="" />
            ))}
           </div>
           </div>
        </main>
    )
}
'use client'

import Landing from "./components/landing";
import Project from "./components/project";
import { brands } from "./records/brands";
import { certs } from "./records/certs";
import { projects } from "./records/projects";


export default function Home() {

  return (
    <main>
     <Landing />
      <div className="showCase slideUp">
        <h5 className="title">Projects</h5>
        {projects.map((e, index) => (
          <Project key={index} e={e} />
        ))}

        <h5 className="title">Ceritifications</h5>
        <div id="cert" className="cert">
        {certs.map((e, index) => (
        <img className="w-full" src={e?.media || `https://static.scrum.org/web/badges/badge-09173b39-cedf-4321-88b6-ce0acdfb5a70.svg`} key={index} alt="" />
        ))}
        </div>

        <h5 className="title">Brands</h5>

        <div id="brands" className="brands">
        {brands.map((e, index) => (
        <img className="w-full" src={e.media} key={index} alt="" />
        ))}
        </div>

        <div>
        <img className="w-full" src="/headshot.jpg" alt="" />
        </div>
      </div>
    </main>
  );
}

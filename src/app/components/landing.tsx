import { profile } from "../records/profile";

export default function Landing () {
  const { name, description, role } = profile;
    return (
        <div className="info">
        <div>
        <h1 className="slideUp">{name}</h1>
        <h2 className="slideUp">{role}</h2>
        <div className="content fadeIn">
        <img className="w-full my-4" src="/headshot.jpg" alt="" />
        {description.map((p, index) => (
        <p key={index} className="my-2"> {p}</p>
        ))}
        </div>
  
        <nav className="fadeIn">
          <a href="#project">
          <button>01 Projects</button>
          </a>
          <a href="#cert">
          <button>02 Certifications</button>
          </a>
          <a href="#brands">
          <button>03 Brands</button>
          </a>
        </nav>
        </div>
  
  
        <div className="my-4 slideUp">
          <a href="mailto:demolaspace1@gmail.com">Contact Ade</a>
        </div>
        </div>
    )
}
import { profile } from "../records/profile";

export default function Landing () {
  const { name, description, role } = profile;
    return (
        <div className="info">
        <div>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <div className="content">
        <img className="w-full my-4" src="/headshot.jpg" alt="" />
        {description.map((p, index) => (
        <p key={index} className="my-2"> {p}</p>
        ))}
        </div>
  
        <nav>
          <button>01 Projects</button>
          <button>02 Certifications</button>
          <button>03 Brands</button>
        </nav>
        </div>
  
  
        <div className="my-4">
          <a href="mailto:demolaspace1@gmail.com">Contact Ademola</a>
        </div>
        </div>
    )
}
import LinkSVG from "@/public/svg/LinkSVG";
import GitHubSVG from "@/public/svg/GitHubSVG";

export default function Card({
  name,
  role,
  description,
  img,
  techStack,
  github_url,
  deployed_url,
}) {
  return (
    <div className="card card-compact bg-primary text-white flex sm:max-w-[375px] md:max-w-none shadow-xl hover:bg-opacity-70 transition ease-in-out">
      <figure>
        <img src={img} alt={name} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title w-60">{name}</h2>
        <div className="-mr-4 mt-[1px] absolute top-60 right-16">
          {deployed_url ? <LinkSVG href={deployed_url} /> : <div />}
        </div>
        <div className="absolute mt-3 top-52 right-4">
          {github_url ? <GitHubSVG href={github_url} /> : <div />}
        </div>
        <p className="font-semibold">
          {role.length === 1 ? "Role: " : "Roles: "}
          {role.join(", ")}
        </p>
        <p className="mb-3">{description}</p>
        <div className="card-actions text-tertiary">
          <p>{techStack.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}

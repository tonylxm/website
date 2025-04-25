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
    <div className="card card-compact bg-primary text-white flex flex-col sm:max-w-[375px] md:max-w-none shadow-xl hover:bg-opacity-70 transition ease-in-out h-full">
      <figure>
        <img src={img} alt={name} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{name}</h2>
          <div className="flex space-x-2">
            {deployed_url && <LinkSVG href={deployed_url} />}
            {github_url && <GitHubSVG href={github_url} />}
          </div>
        </div>
        <p>
          <span className="font-semibold">
            {role.length === 1 ? "Role: " : "Roles: "}
          </span>
          {role.join(", ")}
        </p>
        <p className="mb-3">{description}</p>
        <div className="card-actions text-tertiary mt-auto">
          <p>{techStack.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}

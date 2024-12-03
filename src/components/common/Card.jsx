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
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">Role: {role.join(", ")}</p>
        <p className="mb-3">{description}</p>
        <p>{techStack.join(" · ")}</p>
        <div className="card-actions justify-end">
          <div className="-mr-4 mt-[1px]">
            {deployed_url ? <LinkSVG href={deployed_url} /> : <div />}
          </div>
          <GitHubSVG href={github_url} />
        </div>
      </div>
    </div>
  );
}

import { UserProps } from "../../types/user";
import { Building, Link, MapPin, Twitter } from "lucide-react";
import Image from "next/image";

const User = ({
      avatar_url,
      name,
      login,
      created_at,
      bio,
      public_repos,
      followers,
      following,
      location,
      blog,
      twitter_username,
      company
}: UserProps) => {

  return (
    <div className="xl:flex xl:flex-col xl:px-4 space-y-3">
          <div className="flex gap-5 items-center">
            <div className=" bg-slate-950 rounded-full w-20 h-20">
              {/* <Image src={avatar_url} width={20} height={20} alt="" className="rounded-full"/>   */}
            </div>
            <div className="flex flex-col space-y-1 xl:space-y-0 text-xs xl:flex-row xl:gap-32 xl:ml-3">
              <div className="">
                <h2 className="mb-1 xl:mb-2 xl:text-base">{name ? `${name}` : (<span className="text-gray-400">Name Not Available</span>)}</h2>
                <span className="text-blue-600">@{login}</span>
              </div>
            <p className="xl:text-base">{created_at}</p>
            </div>
          </div>
        
          <div>
            <p className="text-xs xl:ml-28 bio">{bio ? `${bio}` : (<span className="text-gray-400">Bio Not Available</span>)}</p>
          </div>

          <div className="bg-slate-900 px-5 py-4 w-full rounded-md xl:w-auto xl:ml-28">
            <div className="flex text-xs gap-5 items-center justify-center xl:gap-16">
              <div className="flex flex-col items-center gap-2">
                <h3>Repos</h3>
                <span>{public_repos}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3>Followers</h3>
                <p>{followers}</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3>Following</h3>
                <p>{following}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-xs space-y-3 xl:flex-row xl:items-center xl:space-y-0 xl:justify-between xl:ml-28">
            <div className="flex flex-col gap-3">
            <span className="flex gap-2"><MapPin size={16}/>{location ? `${location}` : (<span className="text-gray-400">Location Not Available</span>)}</span>
              <span><a href="" target="_blank" className="flex gap-2"><Link size={16}/>{blog ? `${blog}` : (<span className="text-gray-400">Blog Not Available</span>)}</a></span>
            </div>

            <div className="flex flex-col gap-3">
              <span><a href="" target="_blank" className="flex gap-2"><Twitter size={16}/>{twitter_username ? `${twitter_username}` : (<span className="text-gray-400">Twitter Not Available</span>)}</a></span>
              <span className="flex gap-2"><Building size={16}/>{company ? `${company}` : (<span className="text-gray-400">Company Not Available</span>)}</span>
            </div>
          </div>
          </div>
  )
}

export default User
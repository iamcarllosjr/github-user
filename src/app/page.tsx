"use client"
import { useState } from "react";
import Button from "@/app/components/Button";
import Search from "@/app/components/Search";
import { UserProps } from "../types/user";
import User from "@/app/components/User";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

const loadUser = async(userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    console.log(data)

    const {avatar_url, name, login, created_at, bio, public_repos, followers, following, location, blog, twitter_username, company} = data;

    const userData: UserProps = {
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
    }
    setUser(userData);

  }

  return (
    <main className="h-screen flex items-center justify-center text-white p-16 dark:bg-black">
      <div className="flex flex-col gap-5 w-84 xl:w-2/3">

        <div className="flex items-center justify-between">
          <span className="font-bold tracking-wider"><a href="https://www.linkedin.com/in/iamcarllosjr/" target="_blank">devcrjunior</a></span>
          <div className="flex items-center gap-2">
          <span className="uppercase tracking-widest text-xs font-semibold"></span>
          <Button/>
          </div>
        </div>

        <Search loadUser={loadUser}/>

        <div className="bg-slate-700 dark:bg-slate-950 p-6 flex flex-col rounded-lg gap-4 tracking-widest">
        {user && <User {...user} />}
        </div>

      </div>
    </main>
  )
}


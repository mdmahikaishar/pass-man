import { Navigation } from "@/components/common";
import { HeadingCard } from "@/components/common";
import { getToken } from "@/libs/next-server";
import api from "@/services/api";
import { notFound } from "next/navigation";
import { BiLogoGoogle } from "react-icons/bi";

export default async function ProfilePage() {
  const token = await getToken();
  const [user, profile] = await Promise.all([api.users.getUser(token), api.profiles.getProfile(token)]);

  if (!user || !profile) return notFound();

  return (
    <>
      <section className="">
        <div className="holder max-w-md">
          <HeadingCard icon={BiLogoGoogle} name={user.name} des={profile.email} navigation={() => <Navigation back="/" />} />

          <div className="py-20">
            <h2 className="mb-2 font-semibold text-center text-2xl text-blue-500">You are Secured!</h2>
            <p className="text-center text-sm text-gray-500">There is no way to high jack your account.</p>
          </div>
        </div>
      </section>
    </>
  );
}

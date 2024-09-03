import { PasswordItem } from "@/components/common";
import { getToken } from "@/libs/next-server";
import { getPasswords } from "@/services/api/passwords";

export default async function HomePage() {
  const passwords = await getPasswords(await getToken());

  return (
    <>
      <section className="py-4">
        <div className="max-w-md holder">
          {/* Passwords */}
          <div className="">
            <div className="mb-6">
              <h1 className="mb-1 font-semibold md:text-xl">Passwords</h1>
              <p className="text-xs md:text-sm text-gray-500">Saved Passwords: {passwords.length}</p>
            </div>

            <div className="flex flex-col gap-4">
              {passwords.length === 0 && (
                <div className="w-full py-20 grid place-items-center">
                  <h2 className="text-sm text-gray-500">Nothing To Show</h2>
                </div>
              )}
              {passwords.map((item) => (
                <PasswordItem {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

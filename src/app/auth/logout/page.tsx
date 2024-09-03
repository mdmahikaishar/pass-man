import { Button } from "@/components/ui";
import { logout } from "../actions";

export default async function LogoutPage() {
  return (
    <>
      <section className="min-h-screen grid place-items-center">
        <form className="w-full max-w-sm px-4 py-12 flex flex-col items-center gap-2 border rounded-md shadow-md" action={logout}>
          <Button type="submit" text="Log Out" />
        </form>
      </section>
    </>
  );
}

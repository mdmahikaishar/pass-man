import { redirect } from "next/navigation";
import { Footer, Header, Sidebar } from "../../components/common";
import { getToken } from "@/libs/next-server";

export default async function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const token = await getToken();

  if (!token || token === "") return redirect("/auth/login");

  return (
    <>
      <Header />

      <div className="relative flex">
        <Sidebar />
        <main className="min-h-[calc(100vh-3.5rem-1px)] w-full sm:w-full">{children}</main>
      </div>

      <Footer />
    </>
  );
}

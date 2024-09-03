import React from "react";
import { Button, InputField } from "@/components/ui";
import { getPassword } from "@/services/api/passwords";
import { INextPage } from "@/types";
import { editPassword } from "../../actions";
import { HeadingCard, Navigation } from "@/components/common";
import { BiLogoGoogle } from "react-icons/bi";
import { notFound } from "next/navigation";
import { getToken } from "@/libs/next-server";

export default async function EditPasswordPage(props: INextPage<{ passwordId: string }>) {
  const token = await getToken();
  const password = await getPassword(Number(props.params.passwordId), token);

  if (!password) return notFound();

  return (
    <>
      <section className="pb-4">
        <form className="max-w-md holder" action={editPassword}>
          <HeadingCard
            icon={BiLogoGoogle}
            name={password.name}
            des={password.href}
            editable={true}
            navigation={() => <Navigation name="Edit Password" back={`/passwords/${password.id}`} />}
          />

          {/* Content */}
          <div className="px-4 py-6 flex flex-col gap-4">
            <InputField label="Token" type="text" placeholder="" id="field-token" defaultValue={token} name="token" hidden />
            <InputField label="Id" type="text" placeholder="" id="field-id" defaultValue={password.id} name="id" hidden />

            <InputField label="Username" type="email" placeholder="example@email.com" id="field-username" defaultValue={password.username} name="username" />
            <InputField label="Password" type="password" placeholder="********" id="field-password" defaultValue={password.pass} name="password" />
            <InputField label="PIN" type="number" placeholder="** ** **" id="field-pin" defaultValue={password.pin} name="pin" />
            <Button type="submit" text="Update" />
          </div>
        </form>
      </section>
    </>
  );
}

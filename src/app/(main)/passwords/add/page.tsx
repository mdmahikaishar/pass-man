import React from "react";
import { Button, InputField } from "@/components/ui";
import { addPassword } from "../actions";
import { HeadingCard, Navigation } from "@/components/common";
import { BiLogoGoogle } from "react-icons/bi";
import { getToken } from "@/libs/next-server";

export default async function AddPasswordPage() {
  const token = await getToken();
  
  return (
    <>
      <section className="pb-4">
        <form className="max-w-md holder" action={addPassword}>
          <HeadingCard
            icon={BiLogoGoogle}
            name={"PassMan"}
            des={"passman.com"}
            editable={true}
            navigation={() => <Navigation name="Add Password" back="/" />}
          />

          {/* Content */}
          <div className="px-4 py-6 flex flex-col gap-4">
            <InputField label="Token" type="text" placeholder="" id="field-token" defaultValue={token} name="token" hidden />

            <InputField label="Username" type="email" placeholder="example@email.com" id="field-username" name="username" />
            <InputField label="Password" type="password" placeholder="********" id="field-password" name="password" />
            <InputField label="PIN" type="number" placeholder="** ** **" id="field-pin" name="pin" />
            <Button type="submit" text="Add" />
          </div>
        </form>
      </section>
    </>
  );
}

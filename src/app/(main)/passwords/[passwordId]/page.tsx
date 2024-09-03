import React from "react";
import { InputFieldDynamic } from "@/components/ui";
import { getPassword } from "@/services/api/passwords";
import { INextPage } from "@/types";
import { HeadingCard, Navigation } from "@/components/common";
import { HeadingMenu } from "@/components/passwords";
import { BiLogoGoogle } from "react-icons/bi";
import { getToken } from "@/libs/next-server";
import { notFound } from "next/navigation";

export default async function GetPasswordByPasswordIdPage(props: INextPage<{ passwordId: string }>) {
  const password = await getPassword(Number(props.params.passwordId), await getToken());

  if (!password) return notFound();

  return (
    <>
      <section className="pb-4">
        <div className="max-w-md holder">
          <HeadingCard
            icon={BiLogoGoogle}
            name={password.name}
            des={password.href}
            navigation={() => <Navigation back="/" rightSide={() => <HeadingMenu passwordId={Number(password.id)} />} />}
          />

          {/* Content */}
          <div className="px-4 py-6 flex flex-col gap-4">
            <InputFieldDynamic label="Username" type="password" placeholder="example@email.com" id="field-username" value={password.username} disabled />
            <InputFieldDynamic label="Password" type="password" placeholder="********" id="field-password" value={password.pass} disabled />
            <InputFieldDynamic label="PIN" type="password" placeholder="** ** **" id="field-pin" value={password.pin} disabled />
          </div>
        </div>
      </section>
    </>
  );
}

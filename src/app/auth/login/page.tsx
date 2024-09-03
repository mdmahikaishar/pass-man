import { Metadata } from "next";
import { InputField } from "@/components/ui";
import { AuthForm, AuthSection } from "@/components/auth";
import { login } from "../actions";

export const metadata: Metadata = {
  title: "Login - PassMan",
};

export default async function LoginPage() {
  return (
    <>
      <AuthSection
        title="Connect With The World"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae pariatur cum? Esse, harum eveniet?"
      >
        <AuthForm
          title="Login Up"
          des="Connect with The World"
          navigate={{
            name: "Signup",
            des: "Havn't any account?",
            link: "/auth/signup",
          }}
          buttonText="Login"
          action={login}
        >
          <InputField type="email" label="Username" name="username" id="field-username" placeholder="example@email.com" />
          <InputField type="password" label="Password" name="password" id="field-password" placeholder="**** ****" />
        </AuthForm>
      </AuthSection>
    </>
  );
}

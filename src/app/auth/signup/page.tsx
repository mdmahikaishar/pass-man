import { Metadata } from "next";
import { InputField } from "@/components/ui";
import { AuthForm, AuthSection } from "@/components/auth";
import { signup } from "../actions";

export const metadata: Metadata = {
  title: "Signup - PassMan",
};

export default async function SignupPage() {
  return (
    <>
      <AuthSection
        title="Connect With The World"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae pariatur cum? Esse, harum eveniet?"
      >
        <AuthForm
          title="Sign Up"
          des="Connect with The World"
          navigate={{
            name: "Login",
            des: "Have an account?",
            link: "/auth/login",
          }}
          buttonText="Signup"
          action={signup}
        >
          <InputField type="text" label="User Name" name="username" id="field-username" placeholder="Example User" />
          <InputField type="email" label="Email" name="email" id="field-email" placeholder="example@email.com" />
          <InputField type="password" label="Password" name="password" id="field-password" placeholder="**** ****" />
        </AuthForm>
      </AuthSection>
    </>
  );
}

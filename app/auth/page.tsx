import { redirect } from "next/dist/server/api-utils";
import { SignInPage } from "./signin";

const signIn: React.FC = async () => {
  const isAuthinticated = false;
  if (isAuthinticated) {
    redirect("/dashboard");
  } else {
    return <SignInPage />;
  }
};

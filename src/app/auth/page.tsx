import AuthWrapper from "@/app/shared/auth-layout/auth-wrapper";
import Image from "next/image";
import SignInForm from './sigin-in-form'

import signImage from "@/public/auth/pikachu.png";

export default function SignIn() {
  return (
    <>
      <AuthWrapper
        title={<>pokedex</>}
        description="Welcome to Pokemon Dex"
        pageImage={
          <div className="relative text-center mx-auto aspect-[4/3] w-[257px] xl:w[620px] 2xl:w-[444px]">
            <Image
              src={signImage}
              alt="Sign In Image"
              fill
              priority
            />
          </div>
        }
      >
        <SignInForm />
      </AuthWrapper>
    </>
  );
}

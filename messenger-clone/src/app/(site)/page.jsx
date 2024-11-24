import Image from "next/image";
import Logo from "../../../public/FacebookMessengerLogo.svg";
export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 lg:px-8 sm:px-6 bg-red-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          src={Logo}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* AuthForm */}
    </div>
  );
}

import Link from "next/link"
import { LoginForm } from "@/components/forms"
import type { Metadata } from 'next';
import { SocialButtons } from "@/components/common";

export const metadata: Metadata = {
	title: 'MedEC | Login',
	description: 'MedEC login page',
};

export default function Page() {    

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="MedEC"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
          <SocialButtons />
          

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
    )
}
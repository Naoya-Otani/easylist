import React from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

import Head from "next/head";
import Link from "next/link";
import Header from "@/src/components/templates/Header";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

const signin = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>サインイン</title>
        <meta
          name="description"
          content="慶應の楽単情報をまとめたサイトです。人文・社会・自然科学などの般教や体育まで取り揃えています。"
        />
      </Head>
      <div className="font-notoSans w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-6 lg:gap-y-8">
          <div className="flex items-center mx-auto font-gothicA1">
            <img
              src="/icon-easylist.svg"
              alt="logo icon"
              className="w-7 h-7 mr-4 md:mr-6"
            />
            <p className="font-bold tracking-widest mr-2 text-2xl">KEIO</p>
            <p className="font-extralight tracking-widest text-2xl">EASYLIST</p>
          </div>
          <p className="text-gray-500 text-xs lg:text-base mb-4">
            慶應楽単リストは授業情報が集まるサイトです。
            <br />
            皆様の口コミによってより良いサイトになっています。
          </p>
          {Object.values(providers).map((provider) => (
            <div
              key={provider.name}
              className="w-60 h-14 py-2 px-3 bg-yellow-100 rounded-lg flex justify-center items-center hover:bg-yellow-200 duration-300"
            >
              <button
                onClick={() => signIn(provider.id)}
                className="w-full flex justify-center items-center"
                aria-label="サインインボタン"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="mr-4"
                >
                  <title>Google icon</title>
                  <path
                    fill="#EA4335 "
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
                <span className="text-lg text-gray-800 font-bold tracking-wider pb-[2px]">
                  サインイン
                </span>
              </button>
            </div>
          ))}
          <p className="text-gray-500 text-xs lg:text-base">
            <Link
              href="/privacy"
              className="underline hover:text-blue-500 hover:no-underline"
            >
              プライバシーポリシー
            </Link>
            に同意したうえでご利用ください。
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default signin;

"use client"

import Image from 'next/image'
import logoImg from '@/public/auth/logo-image.png'

export default function AuthWrapper({
  children,
  pageImage,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: string
  pageImage?: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen justify-between gap-x-8 px-4 py-8 pt-10 md:pt-12 lg:flex lg:p-6 xl:gap-x-10 xl:p-7 2xl:p-10 2xl:pt-10 [&>div]:min-h-[calc(100vh-80px)]">
        <div className="relative flex w-full items-center justify-center lg:w-5/12 2xl:justify-end 2xl:pe-24">
          <div className=" w-full max-w-sm md:max-w-md lg:py-7 lg:ps-3 lg:pt-16 2xl:w-[630px] 2xl:max-w-none 2xl:ps-20 2xl:pt-7">
            <div className="text-center justify-center start-0 mb-10 lg:text-start lg:justify-center ">
              <Image className="" src={logoImg} alt="pokemon logo" />
            </div>
            {children}
          </div>
        </div>
        <div className="hidden w-7/12 items-center justify-center rounded-[20px] bg-green-primary px-7 dark:bg-gray-100/40 lg:flex xl:justify-center 2xl:px-16">
          <div className="pb-8 pt-10 text-center xl:pt-16 2xl:block 2xl:w-[784px]">
            {pageImage}
          </div>
        </div>
      </div>
    </>
  );
}

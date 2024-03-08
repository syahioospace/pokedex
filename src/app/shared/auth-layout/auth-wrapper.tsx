"use client"

import Image from 'next/image'
import logoImg from '@/public/auth/logo-image.png'
import { Title, Text } from "@/components/ui/text"

export default function AuthWrapper({
  children,
  title,
  description,
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
            {/*<div className="absolute -top-4 start-0 hidden p-3 text-gray-500 hover:text-gray-700 lg:flex lg:items-center 2xl:-top-0 2xl:ps-20">
              <Image src={logoImg} alt="SurplusLogo" />
            </div>*/}
            <div className="text-center justify-center start-0 mb-10 lg:text-start lg:justify-center ">
              <Image className="" src={logoImg} alt="pokemon logo" />
            </div>
            {/*<div className="mb-6 px-6 pt-3 text-center md:pt-0 lg:px-0 lg:text-start xl:mb-6 2xl:mb-10">
              <Title
                as="h2"
                className="mb-3 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-2 lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl"
              >
                {title}
              </Title>
              <Text className="leading-[1.85] text-gray-700 md:leading-loose lg:pe-8 2xl:pe-14">
                {description}
              </Text>
            </div>*/}
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

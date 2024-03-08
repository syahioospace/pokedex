import MainLayout from "@/layouts/layout";
import React from 'react'

const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{ children }</MainLayout>
}

export default DefaultPage

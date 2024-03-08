"use client"

import Header from "./header"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-grow">
      <div className="flex flex-grow flex-col px-8 pb-6 pt-2 md:px-14 lg:px-44 lg:pb-8 3xl:px-13 3xl:px-13 3xl:pt-4 4xl:px-15 4xl:pb-9 lg:mx-44">
        <Header />
        {children}
      </div>
    </main>

    //<main className="flex min-h-screen flex-grow">
    //    <Header />
    //    <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
    //      {children}
    //    </div>
    //  </div>
    //</main>
  );
}

export default MainLayout

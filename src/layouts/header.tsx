
import { Title } from 'rizzui'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-green-primary px-4 py-4 backdrop-blur-xl lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10 card-shadow mb-5 rounded">
      <div className="flex w-full max-w-2xl items-center">
        <div className="text-center justify-center start-0 lg:text-start lg:justify-center ">
          <Title className='text-white'>Pokemon List Sort By Name</Title>
        </div>
      </div>
    </header>
  );
};

export default Header;

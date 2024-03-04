import './Home.css';

const Home = () => {
  return (
    <div className="home home2 section h-screen" id="home">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 flex justify-center items-center font-sans mt-16">
          <div className='mx-auto text-center md:text-left lg:mt-6'>
            <h1 className="text-4xl lg:text-5xl font-bold">Hi There,</h1>
            <h1 className="text-4xl lg:text-5xl font-bold mt-8">I'm Mohamed Said</h1>
            <h3 className="text-4xl lg:text-5xl font-thin italic mt-8">Software Engineer</h3>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center lg:mt-6">
          <div className="bable p-12 bg-orange-200 h-fit mx-auto md:mx-0 lg:mt-6">
            <img src="/assets/photo.png" className="h-fit sm:w-full md:w-auto" alt="myimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import './Home.css'

const Home = () => {
  return (
    <div className="home home2 grid grid-cols-2">
      <div className="col-span-1 flex justify-center items-center  font-sans">
        <div className='ml-48 '>
          <h1 className="text-5xl font-bold">Hi There,</h1>
          <h1 className="text-5xl font-bold mt-8">I'm Mohamed Said</h1>
          <h3 className="text-4xl font-thin	 italic mt-8">Software Engineer</h3>
        </div>
      </div>

      <div className="col-span-1 flex justify-center items-center w-full ">
          <div className="bable p-12 bg-orange-200 h-fit mr-56">
            <img src="src\components\Home\photo.png" className="h-fit " alt="myimage"/>
          </div>
      </div>
      {/*<section>
        <div className="h-screen w-screen grid grid-rows-2">
          <div className="w-full h-full bg-red-900">
            <p>p1</p>
          </div>
          <div className="w-full h-full bg-blue-900">
            <p>p2</p>
          </div>
        </div>
</section>*/}
    </div>
  );
};

export default Home;

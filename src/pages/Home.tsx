import ButtonLink from "../components/ButtonLink";
import bou_studying from '../assets/boy-studying.png'



const Home = () => {
    return (
      <section className="grid md:grid-cols-2 grid-cols-1 md:gap-3">
        {/* ----------------tob banner-------------------- */}
        <div className="px-10 py-10 bg-customGray rounded-b-md-xl shadow-xl flex flex-col justify-center">
          <h1 className="text-6xl font-semibold text-gray-800">
            What Book Are You Looking For ?
          </h1>
          <p className="my-5 lg:w-3/4">
            Not Sure What to Read Next ? Explore Our Catalog of Public Domain
            Books With Our Editors.
          </p>
          <div>
            <ButtonLink to="/" className="">
              Explore Now
            </ButtonLink>
          </div>
        </div>
        <div className="py-10 bg-customApricot rounded-b-xl shadow-xl flex items-center justify-center">
          <img src={bou_studying} alt="" className="w-3/4" />
        </div>
      </section>
    );
};

export default Home;
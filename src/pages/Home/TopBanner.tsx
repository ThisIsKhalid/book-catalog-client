import ButtonLink from "../../components/ButtonLink";
import boy_studying from "../../assets/boy-studying.png";

const TopBanner = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
      <div className="px-10 py-10 bg-customGray rounded-b-md-xl shadow-lg flex flex-col justify-center">
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
      <div className="py-10 bg-customApricot rounded-b-xl shadow-lg flex items-center justify-center">
        <img src={boy_studying} alt="" className="w-3/4" />
      </div>
    </section>
  );
};

export default TopBanner;

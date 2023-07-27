import { toast } from "react-toastify";


const Home = () => {
    return (
      <div>
        <h1 className="text-4xl bg-customGray">Hello world</h1>
        <h1 className="text-4xl bg-customApricot">Hello world</h1>
        <button onClick={()=> toast.success('good luck')} className="btn bg-customAntiqueWhite">Secondary</button>
      </div>
    );
};

export default Home;
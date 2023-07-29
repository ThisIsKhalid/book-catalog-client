import { HashLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
      <div className="h-screen flex items-center justify-center">
        <HashLoader color="#36d7b7" size={60}/>
      </div>
    );
};

export default LoadingSpinner;
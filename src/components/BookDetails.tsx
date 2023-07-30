import { ImCross } from "react-icons/im";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/books/booksApi";
import { IReview } from "../types/common";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBookQuery(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleCloseModal = () => {
    if (window.review_modal.open) {
      window.review_modal.close();
    }
  };

  return (
    <section className="my-10">
      <div className="md:w-3/4 w-full mx-auto bg-customApricot rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-5 uppercase">
          {data?.data.title}
        </h1>

        <div className="mb-2">
          <strong>Author:</strong> {data?.data.author}
        </div>
        <div className="mb-2">
          <strong>Genre:</strong> {data?.data.genre}
        </div>
        <div>
          <strong>Publication Date:</strong> {data?.data.publicationDate}
        </div>

        <div className="mt-6">
          <div className="flex items-end justify-between border-b border-gray-800 mb-4 pb-2">
            <h2 className="text-xl font-semibold">Reviews :</h2>

            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn btn-sm btn-success"
              onClick={() => window.review_modal.showModal()}
            >
              open modal
            </button>
            <dialog id="review_modal" className="modal">
              <form method="dialog" className="modal-box relative">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <button className="btn">Close</button>
                </div>
                <p
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <ImCross />
                </p>
              </form>
            </dialog>
          </div>
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-3">
            {data?.data.reviews.length > 1 ? (
              data?.data.reviews.map((review: IReview, index: number) => (
                <li
                  key={index}
                  className="text-sm border border-cyan-500 p-2 rounded-lg bg-customGray"
                >
                  <strong>{review.reviewerName}: </strong>
                  {review.comment}
                  <br />
                  <span className="font-medium">Rating:</span> {review.rating}
                </li>
              ))
            ) : (
              <>
                <p>No Review Yet....</p>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;

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
            <button className="btn btn-sm btn-success">Give a Review</button>
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

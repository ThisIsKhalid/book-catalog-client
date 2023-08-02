import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
  usePostReviewMutation,
} from "../redux/features/books/booksApi";
import { IReview } from "../types/common";
import LoadingSpinner from "./LoadingSpinner";
import SubmitButton from "./SubmitButton";

interface ReviewFormData {
  rating: number | string;
  comment: string;
}

const BookDetails = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const navigate = useNavigate()
  const accessToken = localStorage.getItem("accessToken");

  const [postReview] = usePostReviewMutation();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();

  const onSubmit: SubmitHandler<ReviewFormData> = (data) => {
    const reviewerName = "khalid";
    const reviewerEmail = "kh@gmail.com";
    const rating =
      typeof data.rating === "string" ? parseInt(data.rating, 10) : data.rating;

    const reviewData: IReview = {
      reviewerEmail,
      reviewerName,
      rating,
      comment: data.comment,
    };

    //  console.log(reviewData);
    postReview({ id, reviewData });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleCloseModal = () => {
    if (window.review_modal.open) {
      window.review_modal.close();
    }
  };

   const handleDeleteBook = async () => {
     if (accessToken) {
       const response = await deleteBook({ id, accessToken });
       if ("error" in response) {
         toast.error("You are not the publisher.");
       } else {
         toast.success("Book deleted");

         navigate("/books");
       }
     }
   };

  return (
    <section className="my-10">
      <div className="md:w-3/4 w-full mx-auto bg-customApricot rounded-lg shadow-md p-6 relative">
        <div className="flex items-end gap-2 text-xl absolute top-3 right-3">
          <div className="cursor-pointer tooltip" data-tip="Edit Book">
            <Link to={`/books/edit-book/${id}`}>
              <FiEdit2 />
            </Link>
          </div>
          <div
            className="cursor-pointer tooltip"
            data-tip="Delete Book"
            onClick={handleDeleteBook}
          >
            <AiOutlineDelete />
          </div>
        </div>
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
              Add Review
            </button>
            <dialog id="review_modal" className="modal">
              <form
                method="dialog"
                className="modal-box relative"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label className="label">Comment:</label>
                  <textarea
                    {...register("comment", {
                      required: "Comment is required",
                    })}
                    className="textarea textarea-success w-full"
                    placeholder="Comment"
                  ></textarea>
                  {errors.comment && (
                    <span className="text-sm text-red-500">
                      {errors.comment.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="label">Rating:</label>
                  <input
                    {...register("rating", {
                      required: "Rating is required",
                      min: { value: 1, message: "Rating should be at least 1" },
                      max: { value: 5, message: "Rating should be at most 5" },
                    })}
                    type="number"
                    name="rating"
                    placeholder="Give Rating 1-5"
                    className="input input-bordered input-success w-full"
                  />
                  {errors.rating && (
                    <span className="text-sm text-red-500">
                      {errors.rating.message}
                    </span>
                  )}
                </div>
                <div
                  className="modal-action"
                  onClick={() => {
                    if (!errors.comment?.message && !errors.rating?.message) {
                      return handleCloseModal();
                    }
                  }}
                >
                  <SubmitButton buttonText="add review" />
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
            {data?.data.reviews.length > 0 ? (
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

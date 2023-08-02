import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdMarkChatRead } from "react-icons/md";
import { toast } from "react-toastify";
import { addToCurrentlyReading, addToFinishedReading, addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { BookCardProps } from "../types/common";
import ButtonLink from "./ButtonLink";

const BookCard = (book: BookCardProps) => {
  const { _id, title, author, genre, publicationDate } = book;
  const { user } = useAppSelector((state) => state.user);
  const { books, currentlyReading, finishedReading } =
    useAppSelector((state) => state.wishlist);

  const dispatch = useAppDispatch();

  const handleAddBook = (book: BookCardProps) => {
    if (user?.email) {
      dispatch(addToWishlist(book));
      if (books.some((oldBook) => oldBook._id === book._id)) {
        toast.error("Book already in the wishlist");
      } else {
        toast.success("Book Added to Wishlist.");
      }
    } else {
      toast.error("You need to log in to add books to the wishlist.");
    }
  };

  const handleAddToCurrentlyReading = (book: BookCardProps) => {
    if (user?.email) {
      dispatch(addToCurrentlyReading(book));
      if (currentlyReading.some((oldBook) => oldBook._id === book._id)) {
        toast.error("Book already in the Currently Reading list.");
      } else {
        toast.success("Book Added to Currently Reading list.");
      }
    } else {
      toast.error("You need to log in to add books to the currently reading.");
    }
  };
  const handleAddToFinishedReading = (book: BookCardProps) => {
    if (user?.email) {
      dispatch(addToFinishedReading(book));
      if (finishedReading.some((oldBook) => oldBook._id === book._id)) {
        toast.error("You already finished the book.");
      } else {
        toast.success("Book Added to Finished Reading list.");
      }
    } else {
      toast.error("You need to log in to add books to the finished reading list.");
    }
  };

  return (
    <div className="bg-customApricot rounded-lg shadow-lg p-4 relative">
      <div className="absolute top-2 right-2 flex lg:flex-row flex-col gap-2">
        <div
          className="cursor-pointer tooltip tooltip-error"
          data-tip="Add to Wishlist"
          onClick={() => handleAddBook(book)}
        >
          <BsBookmarkHeartFill />
        </div>
        <div
          className="cursor-pointer tooltip tooltip-error"
          data-tip="Currently Reading"
          onClick={() => handleAddToCurrentlyReading(book)}
        >
          <FaBookOpenReader />
        </div>
        <div
          className="cursor-pointer tooltip tooltip-error text-lg"
          data-tip="Finished Reading"
          onClick={() => handleAddToFinishedReading(book)}
        >
          <MdMarkChatRead />
        </div>
      </div>
      <h1 className="text-xl font-semibold text-center mb-5 uppercase">
        {title}
      </h1>

      <div className="mb-2">
        <strong>Author:</strong> {author}
      </div>
      <div className="mb-2">
        <strong>Genre:</strong> {genre}
      </div>
      <div>
        <strong>Publication Date:</strong> {publicationDate}
      </div>
      <div className="flex items-center justify-center mt-5">
        <ButtonLink to={`/books/${_id}`} className="px-9 py-[2px]">
          See More
        </ButtonLink>
      </div>
    </div>
  );
};

export default BookCard;

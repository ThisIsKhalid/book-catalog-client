import { BsBookmarkHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "../redux/hooks";
import { BookCardProps } from "../types/common";
import ButtonLink from "./ButtonLink";

const BookCard = (book: BookCardProps) => {
  const { _id, title, author, genre, publicationDate } = book;

  const dispatch = useAppDispatch();

  const handleAddBook = (book: BookCardProps) => {
    dispatch(addToWishlist(book));
    toast.success("Book Added to Wishlist.");
  };

  return (
    <div className="bg-customApricot rounded-lg shadow-lg p-4 relative">
      <div className="absolute top-2 right-2 cursor-pointer" onClick={() => handleAddBook(book)}>
        <BsBookmarkHeartFill />
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

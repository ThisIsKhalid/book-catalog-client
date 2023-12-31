import BookCard from "../components/BookCard";
import SectionTitle from "../components/SectionTitle";
import { useAppSelector } from "../redux/hooks";
import { BookCardProps } from "../types/common";

const WishList = () => {
  const { books,currentlyReading,finishedReading } = useAppSelector((state) => state.wishlist);

  return (
    <div className="bg-customAntiqueWhite py-10 my-5 rounded-lg shadow-lg">
      <div className="pt-5">
        <SectionTitle
          title="My Wishlist..."
          shortTitle="Add all of your favourite book in wishlist "
        />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-10">
        {books.length === 0 ? (
          <div className="my-20 text-xl text-red-500 font-semibold">
            <p>Nothing to show......</p>
          </div>
        ) : (
          books.map((book: BookCardProps) => (
            <BookCard key={book._id} {...book} />
          ))
        )}
      </div>

      <div className="mt-10">
        <div>
          <SectionTitle title="Currently Reading..." />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-10">
          {currentlyReading.length === 0 ? (
            <div className="my-20 text-xl text-red-500 font-semibold">
              <p>Nothing to show......</p>
            </div>
          ) : (
            currentlyReading.map((book: BookCardProps) => (
              <BookCard key={book._id} {...book} />
            ))
          )}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <SectionTitle title="Finished Reading..." />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-10">
          {finishedReading.length === 0 ? (
            <div className="my-20 text-xl text-red-500 font-semibold">
              <p>Nothing to show......</p>
            </div>
          ) : (
            finishedReading.map((book: BookCardProps) => (
              <BookCard key={book._id} {...book} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;

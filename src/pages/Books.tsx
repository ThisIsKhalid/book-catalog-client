import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionTitle from "../components/SectionTitle";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { BookCardProps } from "../types/common";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  // console.log(data.data);

  return (
    <div>
      <div className="mt-10">
        <SectionTitle
          title="Books Collection..."
          shortTitle="All Books are here. Read & Enjoy. Search or Filter base on what You need"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 px-10">
        {data?.data.map((book: BookCardProps) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

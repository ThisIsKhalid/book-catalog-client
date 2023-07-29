import BookCard from "../../components/BookCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import SectionTitle from "../../components/SectionTitle";
import { useRecentlyAddedQuery } from "../../redux/features/books/booksApi";
import { BookCardProps } from "../../types/common";

const RecentlyAdded = () => {

  const { data, isLoading } = useRecentlyAddedQuery(undefined);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  // console.log(data.data);

  return (
    <section className="mt-5 shadow-lg rounded-xl bg-customGray py-10">
      <SectionTitle
        title="Brand New Books..."
        shortTitle="Recently added books from various authors & places"
      />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 px-10">
        {data?.data.map((book: BookCardProps) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyAdded;

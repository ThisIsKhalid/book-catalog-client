import { useState } from "react";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionTitle from "../components/SectionTitle";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { BookCardProps } from "../types/common";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string | null>(null);

  const { data, isLoading } = useGetBooksQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  // console.log(data.data);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter === "Filter" ? null : selectedFilter);
  };

  console.log(searchTerm, filter);

  return (
    <div>
      <div className="mt-10">
        <SectionTitle
          title="Books Collection..."
          shortTitle="All Books are here. Read & Enjoy. Search or Filter base on what You need"
        />
      </div>
      <div className="mb-5 -mt-5 flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Search title/author/genre"
          className="input input-bordered input-primary w-full max-w-xs"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="select select-primary w-"
          value={filter || "Filter"}
          onChange={handleFilterChange}
        >
          <option disabled value="Filter">
            Filter
          </option>
          <option value="Genre">Genre</option>
          <option value="Publication Date">Publication Date</option>
        </select>
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

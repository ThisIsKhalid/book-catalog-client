import React, { useState } from "react";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionTitle from "../components/SectionTitle";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { BookCardProps } from "../types/common";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [genre, setGenre] = useState<string | null>(null);

  const { data, isLoading } = useGetBooksQuery(
    {
      ...(searchTerm && { searchTerm }),
      ...(genre && { genre }),
    },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value;
    setGenre(selectedGenre === "All Genre" ? null : selectedGenre);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="mt-10">
        <SectionTitle
          title="Books Collection..."
          shortTitle="All Books are here. Read & Enjoy. Search or Filter base on what You need"
        />
      </div>
      <div className="mb-5 -mt-5 flex items-center justify-end gap-3 mx-10">
        <input
          type="text"
          placeholder="Search title/author/genre"
          className="input input-bordered input-primary w-full max-w-xs"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="select select-primary"
          value={genre || "Genre"}
          onChange={handleGenreChange}
        >
          <option value="All Genre">All Genre</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-10">
        {data?.data.length === 0 ? (
          <div className="my-20 text-xl text-red-500 font-semibold">
            <p>Nothing to show......</p>
          </div>
        ) : (
          data?.data.map((book: BookCardProps) => (
            <BookCard key={book._id} {...book} />
          ))
        )}
      </div>
    </div>
  );
};

export default Books;

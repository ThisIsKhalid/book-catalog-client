interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const BookCard = ({ title, author, genre, publicationDate }: BookCardProps) => {
  return (
    <div className="bg-customApricot rounded-lg shadow-lg p-4">
      <h1 className="text-xl font-semibold text-center mb-5 uppercase">{title}</h1>

      <div className="mb-2">
        <strong>Author:</strong> {author}
      </div>
      <div className="mb-2">
        <strong>Genre:</strong> {genre}
      </div>
      <div>
        <strong>Publication Date:</strong> {publicationDate}
      </div>
    </div>
  );
};

export default BookCard;

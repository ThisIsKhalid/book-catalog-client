import BookCard from "../../components/BookCard";
import SectionTitle from "../../components/SectionTitle";

const RecentlyAdded = () => {
  return (
    <section className="mt-5 shadow-lg rounded-xl bg-customGray py-10">
      <SectionTitle
        title="Brand New Books..."
        shortTitle="Recently added books from various authors & places"
      />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 px-10">
        <BookCard
          title="Book Title 1"
          author="Author 1"
          genre="Fiction"
          publicationDate="2023-07-27"
        />
        <BookCard
          title="Book Title 2"
          author="Author 2"
          genre="Fantasy"
          publicationDate="2023-07-28"
        />
        <BookCard
          title="Book Title 3"
          author="Author 3"
          genre="Fantasy"
          publicationDate="2023-07-28"
        />
      </div>
    </section>
  );
};

export default RecentlyAdded;

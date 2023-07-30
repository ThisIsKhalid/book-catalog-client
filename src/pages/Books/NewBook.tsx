import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "../../components/SubmitButton";

interface BookFormData {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const NewBook: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>();

  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="">
      <div className="md:w-1/2 w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">Title:</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div>
            <label className="label">Author:</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              {...register("author", { required: "Author is required" })}
            />
            {errors.author && <span>{errors.author.message}</span>}
          </div>
          <div>
            <label className="label">Genre:</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              {...register("genre", { required: "Genre is required" })}
            />
            {errors.genre && <span>{errors.genre.message}</span>}
          </div>
          <div>
            <label className="label">Publication Date:</label>
            <input
              type="date" // Change the type to "date" for a date input
              className="input input-bordered input-success w-full"
              {...register("publicationDate", {
                required: "Publication Date is required",
              })}
            />
            {errors.publicationDate && (
              <span>{errors.publicationDate.message}</span>
            )}
          </div>
          <div className="flex justify-center mt-5 ">
            <SubmitButton buttonText="Submit" className="w-1/2" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewBook;

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../../components/SectionTitle";
import SubmitButton from "../../components/SubmitButton";
import {
  useGetSingleBookQuery,
  usePatchBookMutation,
} from "../../redux/features/books/booksApi";

interface BookFormData {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const EditBook: React.FC = () => {
  const { id } = useParams();

  const { data } = useGetSingleBookQuery(id);
  const [patchBook, { isLoading }] = usePatchBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    defaultValues: {
      title: data?.data.title || "",
      author: data?.data.author || "",
      genre: data?.data.genre || "",
      publicationDate: data?.data.publicationDate || "",
    },
  });

  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    patchBook({ id, data });
    toast.success("Book Updated Successfully !");
  };

  return (
    <section className="my-10">
      <div className="md:w-1/2 w-full mx-auto bg-customGray md:px-10 px-5 py-10 rounded-lg shadow-lg">
        <SectionTitle title="Edit Book" />
        <form onSubmit={handleSubmit(onSubmit)} className="-mt-10">
          <div>
            <label className="label">Title:</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm font-medium">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <label className="label">Author:</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              {...register("author", { required: "Author is required" })}
            />
            {errors.author && (
              <span className="text-red-500 text-sm font-medium">
                {errors.author.message}
              </span>
            )}
          </div>
          <div>
            <label className="label">Genre:</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              {...register("genre", { required: "Genre is required" })}
            />
            {errors.genre && (
              <span className="text-red-500 text-sm font-medium">
                {errors.genre.message}
              </span>
            )}
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
              <span className="text-red-500 text-sm font-medium">
                {errors.publicationDate.message}
              </span>
            )}
          </div>
          <div className="flex justify-center mt-5 ">
            <SubmitButton
              buttonText="Submit"
              className="w-1/2"
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditBook;

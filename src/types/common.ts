export type IReview = {
  rating: number;
  comment: string;
  reviewerEmail: string;
  reviewerName: string;
};

export interface BookCardProps {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  reviews?: IReview[];
  quantity?: number;
}

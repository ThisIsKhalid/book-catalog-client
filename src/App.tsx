import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { useGetUserDetailsQuery } from "./redux/features/auth/authApi";
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const { data } = useGetUserDetailsQuery(accessToken || "", {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  useEffect(() => {
    dispatch(setLoading(true));

    if (accessToken && data?.data) {
      const user = {
        _id: data?.data._id,
        name: data?.data.name,
        email: data?.data.email,
      };

      dispatch(setUser(user));
      dispatch(setLoading(false));
    }
  }, [dispatch, accessToken, data?.data]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;

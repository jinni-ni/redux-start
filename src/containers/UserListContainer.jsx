import UserList from "../components/UserList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsersThunk, getUsersPromise } from "../redux/modules/users";
import { useCallback } from "react";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();

  //   const getUsers = useCallback(async () => {
  //     try {
  //       dispatch(getUsersStart());
  //       const res = await axios.get("https://api.github.com/users");
  //       dispatch(getUsersSuccess(res.data));
  //     } catch (error) {
  //       dispatch(getUsersSuccess(error));
  //     }
  //   }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersPromise());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}

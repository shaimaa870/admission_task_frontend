export const useUser = () => {
  let storage=localStorage.getItem("userData")
  let user=storage ? JSON.parse(storage) :null;
  let roles= user  && user?.role? JSON.parse(user?.role):[];
  let isUser=roles?.includes("User");
  let isAdmin=roles?.includes("Admin")||roles?.includes("SuperAdmin");
  let isLogin=storage;


    return {
        user,
       isUser,
       isAdmin,
       isLogin
    };
}

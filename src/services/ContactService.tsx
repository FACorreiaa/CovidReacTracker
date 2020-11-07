import http from "./config/http-common";

interface IContact {
  name: string;
  email: string;
  message: string;
}

export const postAdminMessage = async (data: IContact) => {
  return await http.post("/user/message/admin", data);
};

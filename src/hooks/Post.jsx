import axios from "axios";

const postSub = async (email) => {
  if (!email) return;
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/user/sub/general`,
    email
  );
  return response;
};

export default postSub;

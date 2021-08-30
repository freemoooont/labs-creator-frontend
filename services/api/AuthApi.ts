import axios from "axios";

interface ResponseApi {
  status: string;
  data: any;
}

export const AuthApi = {
  async getMe(): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>(
      "http://localhost:3000/user.json"
    );
    return data;
  },
};

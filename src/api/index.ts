import { http } from "@/utils/http";

type UserResult = {
  list: Array<any>;
  total: number;
  totalPage: number;
  pageNumber: number;
};

export function getUserListApi(params?: object): Promise<UserResult> {
  return http.request({
    url: "/mock/api/user",
    method: "post",
    data: params
  });
}

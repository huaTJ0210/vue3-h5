// mock/mock.ts
import { defineMock } from "vite-plugin-mock-dev-server";
import Mock from "mockjs";

const mockData = Mock.mock({
  "users|9": [
    {
      id: "@id",
      username: "@name",
      email: "@email",
      avatar: "@image(200x200)",
      createdAt: "@date"
    }
  ]
});

const users = mockData.users;

export default defineMock({
  url: "/mock/api/user",
  method: "POST",
  delay: 1000,
  body: req => {
    const { pageSize = 10, pageNumber = 1 } = req.body;
    const total = users.length;
    const totalPage = Math.ceil(total / pageSize);
    const start = (pageNumber - 1) * pageSize;
    const end = start + parseInt(pageSize);
    const paginatedUsers = users.slice(start, end);

    return {
      code: 0,
      success: "OK",
      data: {
        total,
        totalPage,
        pageNumber,
        pageSize,
        list: paginatedUsers,
        start,
        end
      }
    };
  }
});

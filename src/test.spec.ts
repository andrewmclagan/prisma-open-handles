import { context } from "./context";

afterAll(async () => {
  await context.prisma.$disconnect();
});

it("can create and fetch a post", async () => {
  const post = await context.prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is a post",
      published: true,
      viewCount: 20,
    },
  });

  expect(post.title).toBe("Hello World");
});

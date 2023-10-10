import Post from "@/components/post";

// TODO: remove this later

const dummyInteractions = {
  onLike: () => {},
  onComment: () => {},
  onShare: () => {},
};

const dummyPost = {
  author: {
    id: "12345",
    fullName: "John Doe",
    profilePictureUrl: "https://example.com/johndoe.jpg",
  },
  post: {
    id: "post001",
    timestamp: "2023-09-12T14:00:00Z",
    content: "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
    media: [
      {
        id: "media001",
        type: "image" as const,
        src: "https://example.com/sample.jpg",
      },
    ],
    isLiked: true,
    likesCount: 100,
    commentsCount: 5,
    sharesCount: 10,
  },
  comments: [
    {
      id: "comment001",
      author: {
        id: "67890",
        fullName: "Alice Smith",
        profilePictureUrl: "https://example.com/alicesmith.jpg",
      },
      content: "This is a comment from Alice.",
      timestamp: "2023-09-12T14:05:00Z",
    },
    {
      id: "comment002",
      author: {
        id: "54321",
        fullName: "Bob Johnson",
        profilePictureUrl: "https://example.com/bobjohnson.jpg",
      },
      content: "This is a comment from Bob.",
      timestamp: "2023-09-12T14:10:00Z",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-12">
      Newsfeed page
      <Post post={dummyPost} interactions={dummyInteractions} />
    </main>
  );
}

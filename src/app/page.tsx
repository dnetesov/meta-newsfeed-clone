import Post from "@/components/post";
import { getPosts } from "./api/_services/postService";

const dummyInteractions = {
  onLike: () => {},
  onComment: () => {},
  onShare: () => {},
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-12">
      <div className="mb-4"></div>
      { posts.map(p => <Post post={p} interactions={dummyInteractions} key={p.id} />) }
    </main>
  );
}

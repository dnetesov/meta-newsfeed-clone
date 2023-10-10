interface PostContentProps {
  content: string
}

function PostContent({ content }: PostContentProps) {
  return <p className="font-light">{ content }</p>;
}

export default PostContent;

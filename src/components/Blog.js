import { useParams } from "react-router-dom"


const Blog = () => {
  
  const { blogId } = useParams()

  return <h1>Blog {blogId}</h1>;
};

export default Blog;
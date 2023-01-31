import { useParams } from "react-router-dom"


const Blog = () => {
  
  const { id } = useParams()

  return <h1>Blog {id}</h1>;
};

export default Blog;
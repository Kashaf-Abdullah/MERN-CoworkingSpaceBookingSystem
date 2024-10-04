

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Container } from 'react-bootstrap';

// const Blog = () => {
//   const { id } = useParams(); // Using useParams hook to get route parameters
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
//         setBlog(response.data);
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   if (loading) return <div>Loading...</div>;

//   if (!blog) return <div>Blog not found</div>;

//   return (
//     <Container className="blog-page" style={{paddingTop:"10rem"}}>
//       {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title}  className="blog-page-image mb-4"
//            style={{ 
//             border: "2px solid black", 
//             borderRadius: "8px",
//             width: "50%", // Adjust width as needed
//             display:"flex",
//             margin:"auto"
//           }} 
//       />}
//       <h2 className='sec-title'>{blog.title}</h2>
//       <p className="blog-content">{blog.content}</p>
//       <p className="blog-date text">{blog.createdAt}</p>
//     </Container>
//   );
// };

// export default Blog;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Blog = () => {
  const { id } = useParams(); // Using useParams hook to get route parameters
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Using process.env to get the HOST_URL from the .env file
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!blog) return <div>Blog not found</div>;

  return (
    <Container className="blog-page" style={{ paddingTop: "10rem" }}>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="blog-page-image mb-4"
          style={{
            border: "2px solid black",
            borderRadius: "8px",
            width: "50%", // Adjust width as needed
            display: "flex",
            margin: "auto",
          }}
        />
      )}
      <h2 className='sec-title'>{blog.title}</h2>
      <p className="blog-content">{blog.content}</p>
      <p className="blog-date text">{blog.createdAt}</p>
    </Container>
  );
};

export default Blog;

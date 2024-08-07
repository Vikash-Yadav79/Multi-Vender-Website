import React from "react";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Api from "../Api"; // Uncomment this when API is ready

// function Blog_Details() {
//     const [blogPosts, setBlogPosts] = useState([]);

// Commented out API call for now, using demo data instead
// useEffect(() => {
// const fetchBlogPosts = async () => {
//     try {
//         const response = await Api.get("/api/blog-posts"); // Replace with your API path
//         setBlogPosts(response.data);
//     } catch (error) {
//         console.error("Error fetching blog posts:", error);
//     }
// };

// fetchBlogPosts();

// Demo data
//     const demoPosts = [
//         {
//             title: "Understanding React Components",
//             date: "August 1, 2024",
//             author: "John Doe",
//             excerpt: "React components are the building blocks of any React application...",
//             link: "/blog/understanding-react-components",
//             imageUrl: "https://via.placeholder.com/800x400?text=React+Components"
//         },
//         {
//             title: "Introduction to React Hooks",
//             date: "July 25, 2024",
//             author: "Jane Smith",
//             excerpt: "React hooks allow you to use state and other React features...",
//             link: "/blog/introduction-to-react-hooks",
//             imageUrl: "https://via.placeholder.com/800x400?text=React+Hooks"
//         },
//         {
//             title: "State Management in React with Redux",
//             date: "July 18, 2024",
//             author: "Alex Johnson",
//             excerpt: "Redux is a predictable state container for JavaScript apps...",
//             link: "/blog/state-management-with-redux",
//             imageUrl: "https://via.placeholder.com/800x400?text=Redux"
//         }
//     ];
//     setBlogPosts(demoPosts);
// }, []);

// return (
//     <>
// eslint-disable-next-line no-lone-blocks
{/* Header Section */ }
// eslint-disable-next-line no-lone-blocks
{/* <header className="bg-dark py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-4 text-white">Our Blog</h1>
                            <p className="lead text-white-50">Stay updated with our latest articles</p>
                        </div>
                    </div>
                </div>
            </header> */}

// eslint-disable-next-line no-lone-blocks
{/* Breadcrumb */ }
// eslint-disable-next-line no-lone-blocks
{/* <div className="bg-light py-3">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Blog
                            </li>
                        </ol>
                    </nav>
                </div>
            </div> */}

// eslint-disable-next-line no-lone-blocks
{/* Blog Posts Section */ }
// eslint-disable-next-line no-lone-blocks
{/* <section className="py-5">
                <div className="container">
                    <div className="row">
                        {blogPosts.length > 0 ? (
                            blogPosts.map((post, index) => (
                                <div key={index} className="col-lg-4 mb-4">
                                    <div className="card shadow-sm h-100">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="card-img-top"
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">
                                                <Link to={post.link} className="text-dark">
                                                    {post.title}
                                                </Link>
                                            </h5>
                                            <p className="card-text text-muted">
                                                By {post.author} | {post.date}
                                            </p>
                                            <p className="card-text">{post.excerpt}</p>
                                            <Link to={post.link} className="btn btn-primary mt-auto">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No blog posts available.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog_Details; */}




function Blog_Details() {
    const blogPosts = [
        {
            title: "Understanding React Components",
            date: "August 1, 2024",
            author: "John Doe",
            excerpt: "React components are the building blocks of any React application...",
            link: "/blog/understanding-react-components"
        },
        {
            title: "Introduction to React Hooks",
            date: "July 25, 2024",
            author: "Jane Smith",
            excerpt: "React hooks allow you to use state and other React features...",
            link: "/blog/introduction-to-react-hooks"
        },
        // Add more blog posts here
    ];

    return (
        <>
            <div className="section-bg section-padding subheader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="page-title">Blog</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Blog
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="blog_list thm-bg-color-light">
                                {blogPosts.map((post, index) => (
                                    <div key={index} className="blog_item mb-4">
                                        <h3 className="blog_title">
                                            <Link to={post.link} className="thm-color-one">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div className="blog_meta">
                                            <span>By {post.author}</span> | <span>{post.date}</span>
                                        </div>
                                        <p className="blog_excerpt">{post.excerpt}</p>
                                        <Link to={post.link} className="thm-btn">
                                            Read More
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog_Details;

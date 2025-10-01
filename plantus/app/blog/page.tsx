import React from "react";
import { getAllPosts, getAllCategories } from "./data";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const allBlogPosts = getAllPosts();
  const categories = ["All", ...getAllCategories()];

  return <BlogClient posts={allBlogPosts} categories={categories} />;
}



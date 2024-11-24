import React from "react"
import { Card } from "./common/Card"
import { blogdata } from "@/assets/data/dummydata"
import Link from "next/link"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <Link href={`blogs/${item.id}`}>
          <Card data={item} key={item.id} path='blogs' />
          </Link>
        ))}
      </div>
    </>
  )
}

export default BlogCard

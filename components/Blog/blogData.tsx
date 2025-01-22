import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Thành lập công ty TNHH",
    paragraph:
      "Hướng dẫn thủ tục thành lập công ty TNHH 1 thành viên và 2 thành viên trở lên.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Long",
      image: "/images/blog/author-01.png",
      designation: "Luật sư Cenvi",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Thành lập công ty 2 TV",
    paragraph:
      "Cách thành lập công ty 2 thành viên trở lên, thủ tục thành lập công ty 2 thành viên.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Thái",
      image: "/images/blog/author-02.png",
      designation: "Luật sư Cenvi",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Những điều cần lưu ý khi thành lập công ty cổ phần",
    paragraph:
      "Thành lập công ty cổ phần những điều bạn cần biết",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Thái",
      image: "/images/blog/author-03.png",
      designation: "Luật sư Cenvi",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;

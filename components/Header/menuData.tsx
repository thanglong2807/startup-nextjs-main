import { Menu } from "@/types/menu";
import {v4 as uuidv4} from 'uuid';
const menuData: Menu[] = [
  {
    id: uuidv4(),
    title: "Giới thiệu",
    path: "/about",
    newTab: false,
  },
  {
    id: uuidv4(),
    title: "Thành Lập Doanh Nghiệp",
    path: "/business-formation",
    newTab: false,
  },
  {
    id: uuidv4(),
    title: "Dịch vụ",
    newTab: false,
    submenu:[
      {
        id: uuidv4(),
        title:"Thiết kế Website",
        path:"#",
        newTab:false
      },
      {
        id: uuidv4(),
        title:"Thành lập hộ kinh doanh",
        path:"#",
        newTab:false
      },
      {
        id: uuidv4(),
        title:"Thay đổi đăng ký kinh doanh",
        path:"#",
        newTab:false
      }, {
        id: uuidv4(),
        title:"Tạm dừng doanh nghiệp",
        path:"#",
        newTab:false
      }
      , {
        id: uuidv4(),
        title:"Giải thể doanh nghiệp",
        path:"#",
        newTab:false
      }
      , {
        id: uuidv4(),
        title:"Bổ sung địa điểm kinh doanh",
        path:"#",
        newTab:false
      }
      , {
        id: uuidv4(),
        title:"Bổ sung chi nhánh",
        path:"#",
        newTab:false
      }
      , {
        id: uuidv4(),
        title:"Đăng ký bảo hộ thương hiệu",
        path:"#",
        newTab:false
      }, {
        id: uuidv4(),
        title:"Dịch vụ kế toán thuế",
        path:"#",
        newTab:false
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: uuidv4(),
    title: "Liên hệ",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: uuidv4(),
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: uuidv4(),
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;

import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
// hehe :))
import React from "react";

export const metadata: Metadata = {
  title:
    "Admin Cenvi Launch",
  description: "Trang quản trị admin cenvi",
};

export default function PageAdmin() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}

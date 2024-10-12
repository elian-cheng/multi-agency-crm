import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { domain: string; path: string } }) => {
  return (
    <div>
      <h1>{params.domain}</h1>
    </div>
  );
};

export default Page;

import data from "@/app/db/blogData.json";
import Link from "next/link";

const Blog = async () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <Link className="flex my-4 p-4 gap-x-4" key={item?.id} href={`/blogs/post/${item.id}`}>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center">
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-2">{item?.title}</h2>
              <p class="text-gray-700 text-base">{item?.des}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

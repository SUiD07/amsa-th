import { supabase } from "@/src/lib/supabase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArticleDetail({ params }: PageProps) {
  //ต้อง await params เพราะ Next.js 14+ ส่งมาเป็น Promise
  const { id } = await params;

  const { data, error } = await supabase
    .from("contents")
    .select("*")
    .eq("id", id)
    .single();

  if (error)
    return <div className="p-10 text-red-600">Error: {error.message}</div>;

  if (!data) return <div className="p-10">Article not found</div>;

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{data.head}</h1>
        {data.img_head && (
          <img
            src={data.img_head}
            alt={data.head}
            className="w-full mb-4 object-cover rounded"
          />
        )}
        <h4 className="font-semibold mb-2 text-gray-600">By {data.author}</h4>
        <p className="text-gray-700 whitespace-pre-line">{data.word}</p>
      </div>
      <Footer />
    </>
  );
}

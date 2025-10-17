import { supabase } from "@/src/lib/supabase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Props {
  params: { id: string };
}

export default async function ArticleDetail({ params }: Props) {
  const { id } = params;

  const { data, error } = await supabase
    .from("contents")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Article not found</div>;

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
        <h4 className="font-semibold mb-2">By {data.author}</h4>
        <p className="text-gray-700 whitespace-pre-line">{data.word}</p>
      </div>
      <Footer />
    </>
  );
}

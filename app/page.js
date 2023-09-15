import CardList from "@/components/cardList";
import CategoryList from "@/components/categoryList";
import Featured from "@/components/featured";
import Menu from "@/components/menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className="flex gap-10">
        <CardList page={page} />
        <Menu />
      </div>
    </main>
  );
}

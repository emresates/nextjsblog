import CardList from '@/components/cardList';
import CategoryList from '@/components/categoryList';
import Featured from '@/components/featured';
import Menu from '@/components/menu';

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </main>
  );
}

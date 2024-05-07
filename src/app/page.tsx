import Items from "./items/page";
import CustomLink from "../components/CustomLink";
export default async function Home() {
  return (
    <main className="text-center">
      <CustomLink href='/items' content='Shop' color='red'/>
    </main>
  );
}

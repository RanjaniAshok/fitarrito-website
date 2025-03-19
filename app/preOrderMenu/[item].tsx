import { useRouter } from "next/router";

const PreOrderMenu = () => {
  const router = useRouter();
  const { item } = router.query;
  console.log(item, "item");
  if (!item) return <p>Loading...</p>;

  const decodedItem = decodeURIComponent(
    Array.isArray(item) ? item[0] : item || ""
  );

  return (
    <div>
      <h1>Pre-Order: {decodedItem}</h1>
      <p>Details about {decodedItem} will go here.</p>
    </div>
  );
};

export default PreOrderMenu;

import TabButton from "../../../../Components/TabButton/TabButton";

const cakeCategories = [
  {
    id: 1,
    name: "ALL",
    count: "30+",
    tag: "ALL",
    variant: "tab-button-yellow",
  },{
    id: 2,
    name: "BROWNIES",
    count: 7,
    tag: "brownies",
    variant: "tab-button-coral",
  },
  {
    id: 3,
    name: "CAKES",
    count: 20,
    tag: "birthdayCakes",
    variant: "tab-button-lavender",
  },
  {
    id: 4,
    name: "Cookie",
    count: 15,
    tag: "cookies",
    variant: "tab-button-lightorange",
  },
  {
    id: 5,
    name: "BENTO CAKES",
    count: 6,
    tag: "bentoCakes",
    variant: "tab-button-light-aqua",
  },
];

export default function ProductCategories() {
  return (
    <section className="productcategories">

      <div className="productcategories-header">
        <h1 className="productcategories-title">
          OUR PREMIUM PRODUCTS
        </h1>
        <h3 className="productcategories-description">
          Enjoy the perfect blend of tradition and creativity in every bite, baked fresh daily with love and care!
        </h3>
      </div>
      <div className="productcategories-filters-wrap">
        <ul className="productcategories-filters">
          {cakeCategories.map((items)=>(
            <TabButton key={items.id} label={items.name} count={items.count} onSelect={items.tag} variant={items.variant}  />
          ))}
        </ul>
      </div>

    </section>
  )
}
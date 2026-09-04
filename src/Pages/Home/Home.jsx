import Hero from "./Components/Hero/Hero";
import Featured from "./Components/Featured/Featured";
import Products from "./Components/Products/Products";
import BakingFeature from "./Components/BakingFeature/BakingFeature";
import BakerySpecial from "./Components/BakerySpecial/BakerySpecial";

export default function Home(){
    return (
        <>
        <Hero/>
        <Featured/>
        <Products/>
        <BakingFeature/>
        <BakerySpecial/>
        </>
    )
}
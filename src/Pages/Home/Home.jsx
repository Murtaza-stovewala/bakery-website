import Hero from "./Components/Hero/Hero";
import Featured from "./Components/Featured/Featured";
import Products from "./Components/HomeProducts/HomeProducts";
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
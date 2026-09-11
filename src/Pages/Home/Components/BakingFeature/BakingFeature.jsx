import { section } from "framer-motion/client";
import Button from "../../../../Components/Button/Button";
import "./BakingFeature.css";
import { StarSpark, WheatDoodle, Squiggle } from "../../../../Components/doodles";
import { img } from "../../data";


export default function BakingFeature() {
    return (
        <section className="baking-feature">
            <div className="baking-feature-conatainer">
                <WheatDoodle className="baking-art-wheat baking-art-wheat-left" />

                <WheatDoodle className="baking-art-wheat baking-art-wheat-right" />
                
                <div className="baking-feature-img">
                    <img src={img.bakerWoman} alt="Baker mixing dough ingredients in a bright kitchen"
                        loading="lazy" />
                </div>
                <div className="baking-feature-content">

                    <StarSpark className="baking-art-star" />
                    <h2>WHY IS BAKING
                        CONSIDERED
                        AS ART
                        FORM?</h2>
                    <p>Every bake is made with care, creativity and a little bit
                        of love. From the perfect texture to the final decoration,
                        we believe every creation deserves to be enjoyed. Scoring a loaf, glazing a bun, stacking a cookie — it is all composition, just edible.</p>
                    <Button link="https://www.instagram.com/cakegallerybyalefiya/"><span>•</span> VISIT OUR INSTAGRAM</Button>
                </div>
                {/* <WheatDoodle className="baking-art-wheat" /> */}
            </div>
        </section>
    )
}


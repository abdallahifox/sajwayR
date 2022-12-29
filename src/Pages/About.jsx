import React from "react";

import HeroBanner from "./../Components/HeroBanner/HeroBanner";
import ChooseFood from "./../Components/ReusableComponents/ChoseFoodSection";
import CTA from "./../Components/ReusableComponents/CTA";
import OurStory from "./../Components/OurStory/OurStory";
import OurSpecialChef from "./../Components/OurSpecialChef/OurSpecialChef";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div>
      <HeroBanner title="About Us" />
      <ChooseFood layout={true} />
      <OurStory />
      <OurSpecialChef />
      <CTA />
    </motion.div>
  );
}

export default About;

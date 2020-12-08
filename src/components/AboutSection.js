import React from "react"
import home1 from "../img/home1.png"
import { About, Description, Image, Hide } from "../styles"
//framer import
import { motion } from "framer-motion"
import { titleAnim, fade, zoom } from "../animation"
import Wave from "./Wave"

const AboustSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography ideas that you have. We have
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={zoom} src={home1} alt="guy with the camera" />
      </Image>
      <Wave />
    </About>
  )
}

export default AboustSection

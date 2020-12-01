import React from "react"
import home1 from "../img/home1.png"
import { About, Description, Image, Hide } from "../styles"
//framer import
import { motion } from "framer-motion"

const AboustSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography ideas that you have. We have
          professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with the camera" />
      </Image>
    </About>
  )
}

export default AboustSection

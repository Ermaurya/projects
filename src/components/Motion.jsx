import React from 'react'
import { Box,Image,keyframes } from '@chakra-ui/react'

import { motion } from 'framer-motion';
const Motion = () => {
    const animationKeyframes = keyframes`
    from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
        
    `;
    const anim={
        position: 'fixed',
    top: '269px',
    }
 const animation = `${animationKeyframes} 2000s ease-in-out infinite`;
  return (
    <>
      <Box sx={anim}  width={{ base:"20%",sm: "20%" }} animation={animation}>
  
  <motion.h1
               animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
               transition={{
                   duration: 5,
                   delay: 0.3,
                   repeat:3,
                   ease: [0.5, 0.71, 1, 1.5],
               }}
               initial={{ opacity: 0, scale: 0.5 }}
               whileHover={{ scale: 1.2 }}
           >
             <Image src='../giphyco.gif' alt='Dan Abramov' />
           </motion.h1>
  </Box>
    </>
  )
}

export default Motion

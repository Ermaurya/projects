import {useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,useColorModeValue,Box,Image,Container,Flex,Text,Icon } from '@chakra-ui/react'
import{StarIcon} from '@chakra-ui/icons'
import { motion } from 'framer-motion';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
const Nav = (props) => {
    
        const colors = useColorModeValue(
          ['green.100', 'green.500', 'blue.50'],
          ['green.900', 'green.900', 'blue.900'],
        )
    //     const animationKeyframes = keyframes`
       
        
    //   `;
      
    //   const animation = `${animationKeyframes} 2000s ease-in-out infinite`;
        const [tabIndex, setTabIndex] = useState(0)
        const bg = colors[tabIndex]
      
        const card3 = {
           
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '20px',
            border:'10px dashed firebrickred',
            bg:'#ffffff',
            boxShadow: '0 0 0 1px darkturquoise,0 0 0 3px firebrick,0 0 0 5px orange,0 0 0 6px darkturquoise',
            outline: 'dashed 6px #fc972a',
        }
        const card3a = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          borderStyle:'dotted',
             borderColor:'red',
            color: 'white',
           
            
            fontSize: '14px',
           
            bg:'#ffffff',
            // boxShadow: '0 0 0 1px darkturquoise,0 0 0 3px firebrick,0 0 0 5px orange,0 0 0 6px darkturquoise',
             outline: 'dashed 3px #fc972a',
        }

        const overlapcard={
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            textShadow: '0 0 20px black',
            fontWeight: 'bold',
            fontSize: '20px',
            border:'10px dashed firebrickred',
            background: 'radial-gradient(892px at -3.5% -4.8%, rgb(255, 140, 16) 8.4%, rgb(255, 26, 26) 20.6%, rgb(249 0 218) 46.7%, rgb(201 8 8) 69.6%, rgb(255, 230, 28) 84.7%)',
            position: 'absolute',
            clipPath: 'polygon(27% 24%,23% 47%,27% 68%,77% 69%,81% 47%,77% 27%)',
        }
        const innerBoxStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius:'100px',
            color: 'white',
            textShadow: '0 0 20px black',
            fontWeight: 'bold',
            fontSize: '20px',
            border:'10px dashed firebrickred',
            bg:'#bf2fab',
            // background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094,#0000ff, #00ff00,#ffff00, #ff0000)',
            
            
            boxShadow: '0 0 0 1px darkturquoise,0 0 0 3px firebrick,0 0 0 5px orange,0 0 0 6px darkturquoise',
            outline: 'dashed 6px #fc972a',
           
          }
        return (
          <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
           
            <TabList bgGradient="linear(to-t, green.200, pink.500)" textAlign={['center' ]} display="flex" alignItems="center" justifyContent="space-evenly" > 
              <Tab>Roccrod </Tab>
              <Tab>Ranks</Tab>
              <Tab>Info</Tab>
            </TabList>
        
            <TabPanels >
              <TabPanel>
              <Box  width={{ base: "100%" }}p='0' h={'25rem'}
              backgroundImage="url('../bgimg.jpeg')"
              backgroundPosition="center"
              backgroundRepeat={'no-repeat'}
              backgroundSize='100% 100%'
              
              >
  {/* <Image src='../imagesjj.jpg' alt='Dan Abramov' /> */}
</Box>
<Container maxW='2xl'  centerContent>
<Box   display="flex" alignItems="center" justifyContent="center" width={{ base: "100%" }} h='7rem'>

{/* <Box  as={motion.div} animation={animation}  w='40%' display="flex" alignItems="center" justifyContent="center"> */}
   <Box sx={innerBoxStyles}  boxShadow='dark-lg' h='3rem'  rounded='md' bg='white'width={{ base: "100%" }} display="flex" alignItems="center" justifyContent="center">
  
   <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                 EXPIRED
            </motion.h1>
   </Box>
  {/* </Box> */}
</Box>
<Box  display="flex" alignItems="center" justifyContent="center" width={{ base: "100%" }} h='15rem'>

<Box sx={innerBoxStyles}  boxShadow='dark-lg'  rounded='md'h='5rem' bg='white'width={{   base: "100%" }} display="flex" alignItems="center" justifyContent="center">
<Text noOfLines={[1, 2, 3]} p={'7px'}>
  Win 54 days Star Now to grap this new Entrance & enter like a Boss!
  </Text>
  </Box>
</Box>


<Box  display="flex" alignItems="center" justifyContent="center" width={{base: "100%" }}>

<Box sx={overlapcard} mt='5rem' boxShadow='dark-lg'  rounded='md'h='5rem' bg='white'width={{  sm: "50%" }} display="flex" alignItems="center" justifyContent="center">
    Details
  </Box>
  </Box>
  
<Box display="flex" alignItems="center" justifyContent="center"  width={{ base: "100%" }}  h='30rem'>

<Box sx={card3}  boxShadow='dark-lg'  rounded='md'h='25rem' bg='white'width={{ base: "100%" }} display="flex" alignItems="center" justifyContent="center">

   <Box sx={card3a} w='90%'h='85%' >
   <Container maxW='2xl'  centerContent>
  <Box padding='4'  color='#fc972a' maxW='md'>
  <Text noOfLines={[1, 2, 3]} >
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
    </Text>
  </Box>
</Container>
   </Box>
  </Box>
</Box>
<Box  display="flex" alignItems="center" justifyContent="center"  width={{ base: "100%" }} >

<Box sx={overlapcard} mt='5rem' boxShadow='dark-lg'  rounded='md'h='5rem' bg='white'width={{sm: "50%" }} display="flex" alignItems="center" justifyContent="center">
  Rewards
  </Box>
  </Box>
<Box display="flex" alignItems="center" justifyContent="center" width={{ base: "100%" }}  h='30rem'>

<Box sx={card3}  boxShadow='dark-lg'  rounded='md'h='25rem' bg='white'width={{ base: "100%" }} display="flex" alignItems="center" justifyContent="center">

   <Box sx={card3a} w='90%' h='86%' >

   <Container >
    <Box color='#fc972a' fontSize='22px'>

    <h1>Spacial Offer</h1>
    </Box>
  <Box   color='#fc972a'>
  <Flex>
     <Text display="flex" alignItems="center" justifyContent="center" noOfLines={[1, 2, 3]}>
     
     <Icon as={StarIcon} color='yellow'fontSize='17px'/>
     There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    </Text>
    <Box >
    <Image src='../giphy.gif' alt='Dan Abramov' />
    </Box>
   
  </Flex>
    
  </Box>
  <Box   color='#fc972a' >
  <Flex>
  
  <Text display="flex" alignItems="center"  noOfLines={[1, 2, 3]} fontSize='md' >
  <Icon as={StarIcon}  color='yellow'fontSize='17px'/>There are many benefits to a joint design and development system. Not only
 does it bring benefits to the design team, but it also brings benefits to</Text>
 

 <Box h='3rem' bg='white'width={{ base: "100%" }} >
 <Image src='../horse.gif' alt='Dan Abramov' />
 </Box>

</Flex>
  </Box>
</Container>
   </Box>
  </Box>
</Box>
<Card3/>

<Card4/>
<Card5/>
</Container>
              </TabPanel>
              <TabPanel>Are 1, 2, 3</TabPanel>
              <TabPanel>Red, yellow and blue.</TabPanel>
            </TabPanels>
          </Tabs>
        )
      
}

export default Nav

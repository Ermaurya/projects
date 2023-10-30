import React from 'react'
import {  Spacer,AspectRatio,VStack,Box,Image,Container,Flex,Text} from '@chakra-ui/react'

const Card3 = () => {
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
    const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        bg:'#bf2fab',
        borderRadius:'15px',
      }
    const display={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
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
        bg:'red',
        position: 'absolute',
        background: 'radial-gradient(892px at -3.5% -4.8%, rgb(255, 140, 16) 8.4%, rgb(255, 26, 26) 20.6%, rgb(249 0 218) 46.7%, rgb(201 8 8) 69.6%, rgb(255, 230, 28) 84.7%)',
        clipPath: 'polygon(27% 24%,23% 47%,27% 68%,77% 69%,81% 47%,77% 27%)',
    }
  return (
    <Container maxW='container.xl'>
        <VStack width='full'h='full'>
        <Box className='tab_head' display="flex" alignItems="center" justifyContent="center"  width={{ base: "100%" }} >

<Box  sx={overlapcard} mt='1rem' boxShadow='dark-lg'  rounded='md'h='5rem' bg='white'width={{sm: "50%" }} display="flex" alignItems="center" justifyContent="center">
   Heloking Reward
  </Box>
  </Box>
      <Box  className='box' width={{ base: "100%" }}  h='38rem'>

<Box sx={card3}  flexDirection='column' boxShadow='dark-lg'  rounded='md'h='32rem' bg='white'width={{ base: "100%" }} >
   
{/* <Box  bg='#fc972a' width={{ base: "100%" }}flex='auto'sx={display} >
      <h1 fontSize='28px'>Heloking Reward</h1>
    </Box>

<Box sx={card3a} w='90%' h='86%'mt='15px'mb='15px' >
 


</Box> */}
 <Box sx={card3a} w='90%' h='86%' >

<Container className='comt' >
 {/* <Box color='#fc972a' fontSize='22px'>

 <h1>Spacial Offer</h1>
 </Box> */}
 <Box  h='6rem'sx={display}  width={{ base: "100%" }}>
 <Box   sx={display} h='3rem'  width={{ base: "100%" }} rounded='md'>
 <Flex >
<Box sx={display} color='#fc972a' >
 {/* <AspectRatio ratio={1} w={24}> */}

 <Image className='box_animation' src='../vipl.gif' alt='Dan Abramov' h='7rem'/>
        {/* </AspectRatio> */}
        <Text display="flex" alignItems="center" justifyContent="center">
   </Text>
   </Box>
   </Flex>
 </Box >
 </Box >
<Box sx={innerBoxStyles} border='2px solid red' color='#fc972a' h='3rem'>
<Box  sx={innerBoxStyles} h='3rem'  width={{ base: "100%" }} rounded='md'>
<Flex >
<Box >
<AspectRatio ratio={1} w={24}>

 <Image src='../giphyd.gif' alt='Dan Abramov' />
        </AspectRatio>
 </Box>
 <Spacer />
 <Spacer />
 <Spacer />
  <Text display="flex" alignItems="center" justifyContent="center">
   25000 Gems</Text>
 

</Flex>
 
</Box>
</Box>
<Box  width={{ base: "100%" }} h='7rem'sx={display}>
< Box  sx={display}  width={{ base: "100%" }} h='7rem'>
 {/* <AspectRatio ratio={1} w={24}> */}

 <Image src='../giphyg.gif' alt='Dan Abramov' h='6rem' />
        {/* </AspectRatio> */}
 </Box >
 </Box >


<Box  sx={innerBoxStyles} color='#fc972a'  h='7rem' width={{ base: "100%" }}>
<Box  sx={innerBoxStyles} h='6rem'  width={{ base: "100%" }} rounded='md'>
<Flex alignItems='center'h='6rem'>
<Box h='4rem'>

<Text display="flex" alignItems="center"fontSize='19px' justifyContent='center'wordBreak="keep-all" w='14rem' >
SVIP & Special Car Entrance Bentley! Month</Text>
</Box>
<Box  >
{/* <AspectRatio ratio={4} w={84} h='2rem' p='4rem'> */}

 <Image src='../sells.png' alt='Dan Abramov' h='7rem'position='relative' top='5px'/>
 <Image src='../giphyv.gif' alt='Dan Abramov' h='4rem'position='relative' top='-35px'/>
        {/* </AspectRatio> */}
</Box>

</Flex>
</Box>
</Box>
</Container>
</Box>
   
  </Box>
</Box>
</VStack>
    </Container>
  )
}

export default Card3

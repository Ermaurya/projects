import React from 'react'
import { ListItem,OrderedList,VStack,Box,Container} from '@chakra-ui/react'

const Card5 = () => {
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
        bg:'red',
        position: 'absolute',
        background: 'radial-gradient(892px at -3.5% -4.8%, rgb(255, 140, 16) 8.4%, rgb(255, 26, 26) 20.6%, rgb(249 0 218) 46.7%, rgb(201 8 8) 69.6%, rgb(255, 230, 28) 84.7%)',
        clipPath: 'polygon(27% 24%,23% 47%,27% 68%,77% 69%,81% 47%,77% 27%)',
    }
  return (
    <Container maxW='container.xl'>
    <VStack width='full'h='full' align="flex-start">

    <Box  display="flex" alignItems="center" justifyContent="center"  width={{ base: "100%" }} >

<Box sx={overlapcard} mt='6rem' boxShadow='dark-lg'  rounded='md'h='5rem' bg='white'width={{sm: "50%" }} display="flex" alignItems="center" justifyContent="center">
    Rouls & Regulations
  </Box>
  </Box>
<Box display="flex" alignItems="center" justifyContent="center" width={{ base: "100%" }}  h='35rem'>

<Box sx={card3}  boxShadow='dark-lg'  rounded='md'h='30rem' bg='white'width={{ base: "100%" }} display="flex" alignItems="center" justifyContent="center">

   <Box sx={card3a} w='90%' h='86%' position="relative"  >

  <Box  maxW='xl'>
<Container>
   <OrderedList color='#fc972a' textAlign='justify' wordBreak={'break-all'}  p={2} fontSize={{ base: "16px", sm:"12px" , md: "10px", lg: "14px" }} width={{ base: "100%" }}>
  <ListItem wordBreak={'break-all'}  >

    Lorem ipsum dolor sit amet in pretium nisl aliquet in pretium nisl aliquet
   
    </ListItem>
  <ListItem wordBreak={'break-all'}>Consectetur adipiscing elit in pretium nisl aliquetin pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'} >Integer molestie lorem at massa in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet</ListItem>
  <ListItem wordBreak={'break-all'}>Facilisis in pretium nisl aliquet in pretium nisl aliquet</ListItem>
</OrderedList>
</Container>
  </Box>
   </Box>
  </Box>
</Box>
        </VStack>
        </Container>
  )
}

export default Card5

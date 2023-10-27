import React from 'react'
import { VStack,Box,SimpleGrid,Grid,Container,GridItem } from '@chakra-ui/react'

const Card4 = () => {
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
        fontSize: '14px',
        fontWeight:'600',
        bg:'#bf2fab',
        borderRadius:'10px',
        // background: 'linear-gradient(109.6deg, rgba(227, 236, 62, 0.68) 11.2%, rgba(230, 29, 58, 0.78) 91.3%)',
        background: 'linear-gradient(180deg, rgb(222 139 0 / 68%) 11.2%, rgb(230 102 0) 91.3%)',
      }
      const border={
        borderTopLeftRradius: '10px',
        borderBottomLeftRadius:'10px',
        
            }
            const borderx={
              borderTopRightRadius:'10px',
            }
    
    const fonts={
      fontSize:'32px',
      fontWeight:'700',

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
    <VStack width='full'h='95%'>
    
    <Box  display="flex" alignItems="center" justifyContent="center"  width={{ base: "100%" }} >

<Box sx={overlapcard} mt='6rem' boxShadow='dark-lg' className='overlap' rounded='md'h='5rem' bg='white'width={{sm: "50%" }} display="flex" alignItems="center" justifyContent="center">
   Rewards
  </Box>
  </Box>
<Box display="flex" alignItems="center" justifyContent="center" width={{ base: "100%" }} className='mainbox' h='42rem'>

<Box sx={card3}  boxShadow='dark-lg'className='mainsecond'  rounded='md'h='37rem' bg='white'width={{ base: "100%" }} display="flex" alignItems="center" justifyContent="center">

   <Box sx={card3a} w='90%' h='86%' >

   <Container  >
   <Grid className='boxsize'
  h='400px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(5, 1fr,1fr,1fr)'
  gap={4}
><SimpleGrid columns={1} rowGap={1} columnGap={2}>
  <GridItem  colSpan={1} rowSpan={1} bg='yellow' sx={innerBoxStyles} p={'10px'} >
  SVIP & Special Car Entrance Bentley! Month
  </GridItem>
</SimpleGrid>
<SimpleGrid columns={1} rowGap={1} columnGap={2}>
  <GridItem  colSpan={1} rowSpan={1} bg='#fff' color={'black'} opacity={0.5}>
  SVIP & Special Car Entrance Bentley! Month
  </GridItem>
</SimpleGrid>
  <SimpleGrid columns={2} rowGap={1} columnGap={2}>
  
  <GridItem  colSpan={1} rowSpan={1} bg='tomato' sx={border} p={'10px'} >
   #1
  </GridItem>
  <GridItem  colSpan={1} bg='tomato' sx={borderx}p={'10px'}  >
   1,000,000 + 250,000 Gems
  </GridItem>
  </SimpleGrid>
  <SimpleGrid columns={2} rowGap={1} columnGap={2} p={'10px'} >

  <GridItem  colSpan={1} rowSpan={1} bg='tomato' sx={border} p={'10px'} >
  #2
  </GridItem>
  <GridItem  colSpan={1} bg='tomato' sx={borderx} p={'10px'} >
  500,000 + 250,000 Gems
  </GridItem>
  </SimpleGrid>
  <SimpleGrid columns={2} rowGap={1} columnGap={2} p={'10px'} >

<GridItem  colSpan={1} rowSpan={1} bg='tomato' sx={border} p={'10px'} >
#3
</GridItem>
<GridItem  colSpan={1} bg='tomato' sx={borderx} p={'10px'} >
250,000 + 250,000 Gems
</GridItem>
</SimpleGrid>
<SimpleGrid columns={1} rowGap={1} columnGap={2}>
  <GridItem  colSpan={1} rowSpan={1} color={'black' } sx={fonts}>
   Condition
  </GridItem>
</SimpleGrid>
<SimpleGrid columns={1} rowGap={1} columnGap={2}>
  <GridItem  colSpan={1} rowSpan={1}  sx={innerBoxStyles} p={'15px'}>
   You Can Win 300000000 (3 CRORE BONES) at a tiom
  </GridItem>
</SimpleGrid>
</Grid>
  
</Container>
   </Box>
  </Box>
</Box>
        </VStack>
        </Container>
  )
}

export default Card4

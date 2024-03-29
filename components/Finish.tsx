import { Button, Image, Stack, Text, AspectRatio, Box, Link, Flex, Icon } from '@chakra-ui/react'
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import Congrats from "../img/startright-logo.png";

export default function Finish() {
  return (
    <Stack direction={'column'} align={'center'}>
       <AspectRatio w={'80'} ratio={1}>
          <Box
            as="iframe"
            title="congrats"
            src="https://giphy.com/embed/D6WuLOKOpR2fK"
            allowFullScreen
            
          />
       </AspectRatio>
       <Text fontWeight={'extrabold'} fontSize={'xx-large'} color={'green.400'}>Congratulations!!!</Text>
       <Text color={'red'} fontSize={'x-large'} fontWeight={'extrabold'}>Your app is ready!</Text>
       <Text>Please, let us know if you are satisfied with the product by leaving us some feedback <Link href='/done'color={'blue'}>here.</Link></Text>
       <Text mb={'18'}>Congratulations!!!</Text>
       <Flex gap={'28'}>
         <Button bg={'blueviolet'} color={'white'} as={'a'} href='/done'>Download<DownloadIcon mx='4px' /></Button>
         <Button bg={'black'} color={'white'} as={'a'} href='/done'>Push to GitHub <Icon as={FaGithub} mx='4px'></Icon></Button>
         
       </Flex>
    </Stack>
  )
}

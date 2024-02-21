import { Button, Image, Stack, Text, AspectRatio, Box, Link } from '@chakra-ui/react'
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub, FaGithubAlt } from "react-icons/fa";


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
       <Text>Congratulations!!!</Text>
       <Button bg={'blueviolet'} color={'white'}>Download<DownloadIcon mx='4px' /></Button>
       <Button bg={'black'} color={'white'}>Push to GitHub<FaGithub /></Button>
       
    </Stack>
  )
}

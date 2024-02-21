import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'
import React from 'react'


export default function Done() {
  
  
  const OverlayBlur = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayBlur />)
 
  return (
    <>
      <Button onClick={() => {
        setOverlay(<OverlayBlur />)
         onOpen()
         }} 
         color={'white'} bg={'telegram.800'} 
         mx={'100'}>Leave Feedback</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader alignContent={'center'}>Leave us some feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={'4'}>What did you think of the experience in using StartRight?</Text>
            <Textarea placeholder='Let us know what you think' />
          </ModalBody>

          <ModalFooter>
            <Button type='submit' as={'a'} href='/dashboard' colorScheme='blue' mr={3} onClick={onClose}>
              Submit
            </Button>
            <Button color={'white'} bg={'telegram.800'} as={'a'} href='/dashboard'>I am all good. Maybe next time.</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Actionsheet, Center, Button, useDisclose, Box, NativeBaseProvider } from 'native-base';


const Product_detail = () => {


  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  const [px, setpx] = useState(60)
  console.log("🚀 ~ file: Product_detail.js ~ line 16 ~ px", px)

  return (
    <NativeBaseProvider>

      <Center>
        <Button onPress={onOpen}>Actionsheet</Button>
        <Actionsheet isOpen={isOpen}>
          <Actionsheet.Content>
            <Box w="100%" h={20} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500" _dark={{
                color: "gray.300"
              }}>
                Albums
              </Text>
            </Box>
            <Actionsheet.Item>Delete</Actionsheet.Item>
            <Actionsheet.Item>Share</Actionsheet.Item>
            <Actionsheet.Item>Play</Actionsheet.Item>
            <Actionsheet.Item>Favorite</Actionsheet.Item>
            <Actionsheet.Item>Cancel</Actionsheet.Item>
            <Button onPress={() => { setpx(20) }}>Actionsheet</Button>

          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    </NativeBaseProvider>
  )
}

export default Product_detail;  
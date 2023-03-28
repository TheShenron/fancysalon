import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const Lookbook = () => {
  return (
    <SimpleGrid 
    columns={{ sm: 2, md: 3, lg: 4 }}
    spacing='4'
    w={'80%'}
    textAlign='center'
    m={'auto'}
    gridAutoFlow='dense'
    >
      <Box>
        {/* 1 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3285_500x.jpg?v=1627417605"
          alt="img"
        />
      </Box>
      <Box>
        {/* 2 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3404_500x.jpg?v=1627417608"
          alt="img"
        />
      </Box>
      <Box>
        {/* 3 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3421_500x.jpg?v=1627417611"
          alt="img"
        />
      </Box>
      <Box>
        {/* 4 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3451_500x.jpg?v=1627417613"
          alt="img"
        />
      </Box>

      <Box>
        {/* 5 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3594_500x.jpg?v=1627417617"
          alt="img"
        />
      </Box>
      <Box>
        {/* 6 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3518_500x.jpg?v=1627417615"
          alt="img"
        />
      </Box>
      <Box>
        {/* 7 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3967_500x.jpg?v=1627417620"
          alt="img"
        />
      </Box>
      <Box>
        {/* 8 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4053_500x.jpg?v=1627417622"
          alt="img"
        />
      </Box>

      <Box>
        {/* 9 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4159_500x.jpg?v=1627417629"
          alt="img"
        />
      </Box>
      <Box>
        {/* 10 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4124_500x.jpg?v=1627417624"
          alt="img"
        />
      </Box>
      <Box>
        {/* 11 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4138_500x.jpg?v=1627417626"
          alt="img"
        />
      </Box>
      <Box>
        {/* 12 */}
        <Image
          border="1px solid"
          src="https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4209_500x.jpg?v=1627417631"
          alt="img"
        />
      </Box>
    </SimpleGrid>
  );
};

export default Lookbook;

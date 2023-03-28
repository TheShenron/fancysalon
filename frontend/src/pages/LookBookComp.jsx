import React from "react";
import { Box, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function LookBookComp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let cols = 4;
  if (isMobile) {
    cols = 1;
  } else if (isTablet) {
    cols = 2;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <ImageList variant="masonry" cols={cols} gap={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3285_500x.jpg?v=1627417605",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3404_500x.jpg?v=1627417608",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3421_500x.jpg?v=1627417611",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3451_500x.jpg?v=1627417613",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3594_500x.jpg?v=1627417617",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3518_500x.jpg?v=1627417615",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC3967_500x.jpg?v=1627417620",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4053_500x.jpg?v=1627417622",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4159_500x.jpg?v=1627417629",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4124_500x.jpg?v=1627417624",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4138_500x.jpg?v=1627417626",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0367/4023/5401/t/4/assets/DSC4209_500x.jpg?v=1627417631",
  },
];

import { Box, Flex } from "@chakra-ui/layout";

import { Banner } from "components/banner";
import BannerImage1 from "assert/images/banner.jpeg";
import BannerImage2 from "assert/images/banner2.jpeg";
import { baseUrl, fetchApi } from "utils/fetchApi";
import { Property } from "components/property";

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box maxWidth="1280px" m="auto">
      <Flex flexWrap="wrap" gap="5" justifyContent="center">
        {propertyForRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Flex flexWrap="wrap" gap="5" justifyContent="center">
        {propertyForSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}

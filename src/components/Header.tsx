// import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
// import ProfilePicture from './ProfilePicture';

// const Header: React.FC = () => {
//   return (
//     <Flex bg="blue.500" p={4} color="white" alignItems="center">
//       <ProfilePicture size="50px" imageSrc="https://via.placeholder.com/50" />
//       <Box ml={4}>
//         <Text fontSize="xl" fontWeight="bold">
//           Rohit Yadav
//         </Text>
//         <Text fontSize="sm">Online</Text>
//       </Box>
//       <Spacer />
//       <Text fontSize="xl">9:41</Text>
//     </Flex>
//   );
// };

// export default Header;
import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      bg="#3A5F9A"
      px={4}
      py={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Avatar size="sm" name="Rohit Yadav" />
        <Box ml={3}>
          <Text color="white" fontSize="18px" fontWeight="bold">
            Rohit Yadav
          </Text>
          <Text color="white" fontSize="12px">
            Online
          </Text>
        </Box>
      </Flex>
      <Text color="white" fontSize="18px">
        9:41
      </Text>
    </Flex>
  );
};

export default Header;


// import { useEffect, useState } from 'react';
// import { Box, VStack } from '@chakra-ui/react';
// import ChatMessage from './components/ChatMessage';
// import Header from './components/Header';
// import MessageInput from './components/MessageInput';

// interface ChatData {
//   id: number;
//   message: string;
//   isSender?: boolean;
// }

// const App: React.FC = () => {
//   const [chatData, setChatData] = useState<ChatData[]>([]);
//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`);
//       const data = await response.json();
//       if (data && Array.isArray(data)) {
//         setChatData((prevData) => [...prevData, ...data]);
//       }
//     };

//     fetchData();
//   }, [page]);

//   return (
//     <Box minHeight="100vh" display="flex" flexDirection="column">
//       <Header />
//       <VStack spacing={0} align="start" p={4} flexGrow={1} overflowY="auto">
//         {chatData.map((chat) => (
//           <div key={chat.id}>
//             <ChatMessage message={chat.message} isSender={chat.isSender} />
//           </div>
//         ))}
//       </VStack>
//       <MessageInput />
//     </Box>
//   );
// };

// export default App;
import React from 'react';
import ChatScreen from './ChatScreen';

function App() {
  return <ChatScreen />;
}

export default App;

import React, { useState,useEffect } from 'react';
import {
  Box,
  Text,
  Divider,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  IconButton,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { IoWifi, IoBatteryFull, IoGitNetwork, IoSend, IoAttach } from 'react-icons/io5';
import { FaCamera, FaCloudDownloadAlt, FaVideo } from 'react-icons/fa';
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch("https://qa.corider.in/assignment/chat?page=0");
        const data = await response.json();
        // Assuming the API response has a "chats" property containing the chat messages
        const chatMessages = data.chats;
        setMessages(chatMessages);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchChatData();
  }, []);

  const currentTime = new Date().toLocaleTimeString([], { hour: "numeric", minute: "numeric" });
  const [attachmentPopupOpen, setAttachmentPopupOpen] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');

  const handleAttachmentClick = () => {
    setAttachmentPopupOpen(!attachmentPopupOpen);
  };

  const handleSenderIconClick = () => {
    if (typedMessage) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        sender: 'sender',
        message: typedMessage,
      };
      setMessages([...messages, newMessage]);
      setTypedMessage('');
    }
  };

  const profilePicture = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEVHcEwAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAewAAdwB6sHrA2MDX6Nf///9sqGyRv5EhiiGlyKXt9u36/fpHmEdKvtXxAAAACnRSTlMAPJza+f/WM+BxaK5WjAAAARtJREFUeAGFk9GWhCAIhs2iGtBUnHr/R12h45lhj7t9F3jBH/CnuJvJzwt8sax+ch+2HQbsW8+/4A9eg/xAsYGAhDBAuuyaDzGMFHubX/NHSulAwAZo7IrJef0+CRlKgzGUkrvCu7VFiiqoqouskUCZ3fJdIfQKMQCCsDgYzkDcazhQMNRsXaS3EQCizVM6jcCopEW2LRTinDMDyFGuwmAE3etBdHSbVoBU3zHGjJjbod8bAcWDBHGpx28BphPBYgXcuoN19G8F5FIvGsyA9wR4pUZAESzGRaUcJarVUy9rtv8BNcVnEi6A1XnoEIdwIYcWPxW8m+xd3OGeoSDAJI92AHJVF7s+e4O92e1xcZ5X73l5+/qvdv3nvv4/+cAdONnQuQIAAAAASUVORK5CYII=';
  


  return (
    <Box p={4} display="flex" flexDirection="column" height="100vh">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>
          <Text>{currentTime}</Text>
        </Box>
        {/* <Text fontSize="sm" fontWeight="bold" mr={2}>← Trip</Text>
         */}
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <IoWifi size="1.5em" />
          </Box>
          <Box mr={2}>
            <IoBatteryFull size="1.5em" />
          </Box>
          <Box>
            <IoGitNetwork size="1.5em" />
          </Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
  <Avatar size="sm" name="John Doe" src={profilePicture} />
  <Box ml={2}>
    <Text fontSize="sm">
      <Text as="span" fontWeight="bold">
        From
      </Text>{" "}
      <Text as="span">IGI Airport, T3</Text>
    </Text>
    <Text fontSize="sm">
      <Text as="span" fontWeight="bold">
        To
      </Text>{" "}
      <Text as="span">Sector 28</Text>
    </Text>
  </Box>
</Box>

      <Box bg="white" p={4} borderRadius="md" mb={4} flex="1" overflowY="auto">
        <div>
        {messages.map((message) => (
        <div key={message.id} className={`message ${message.sender === "receiver" ? "receiver" : "sender"}`}>
          <div className="messageBubble">{message.message}</div>
          <div className="profilePicture">
            <img src={profilePicture} alt="Profile" />
          </div>
        </div>
      ))}
        </div>
      </Box>
      <Divider my={4} />
      <Box>
        <InputGroup>
          <Input
            placeholder="Reply to @Rohit Yadav"
            borderRadius="md"
            _focus={{ borderColor: '#3A5F9A' }}
            fontSize="sm"
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
          />
          <InputRightElement width="4.5rem" position="relative">
            <IconButton
              aria-label="Attachment"
              icon={<IoAttach size="1.5em" />}
              variant="ghost"
              onClick={handleAttachmentClick}
            />
            {attachmentPopupOpen && (
              <Box
                position="absolute"
                bottom="calc(100% + 5px)"
                right="0"
                width="120px"
                borderRadius="md"
                bg="white"
                boxShadow="md"
                zIndex="popover"
              >
                <Button
                  leftIcon={<FaCamera />}
                  color="gray.600"
                  width="100%"
                  variant="ghost"
                  justifyContent="left"
                >
                  Camera
                </Button>
                <Button
                  leftIcon={<FaCloudDownloadAlt />}
                  color="gray.600"
                  width="100%"
                  variant="ghost"
                  justifyContent="left"
                >
                  Download
                </Button>
                <Button
                  leftIcon={<FaVideo />}
                  color="gray.600"
                  width="100%"
                  variant="ghost"
                  justifyContent="left"
                >
                  Video
                </Button>
              </Box>
            )}
            <IconButton aria-label="Send" icon={<IoSend size="1.5em" />} variant="ghost" onClick={handleSenderIconClick}/>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default ChatScreen;

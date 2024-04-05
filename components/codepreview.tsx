import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';

interface File {
  name: string;
  code: string;
}

interface Folder {
  name: string;
  files: File[];
}

const FileManager: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const folders: Folder[] = [
    {
      name: 'Folder 1',
      files: [
        { name: 'File 1', code: 'console.log("Hello, World!");' },
        { name: 'File 2', code: 'function greet() {\n  return "Hello";\n}' },
      ]
    },
    {
      name: 'Folder 2',
      files: [
        { name: 'File 3', code: 'console.log("This is file 3");' },
        { name: 'File 4', code: 'console.log("This is file 4");' },
      ]
    },
    // Add more folders as needed
  ];

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <Flex>
      <Box flex="1" borderRight="1px solid #E2E8F0" overflow="auto">
        {folders.map((folder, index) => (
          <Box key={index} p={4}>
            <Text fontWeight="bold" mb={2}>{folder.name}</Text>
            <Divider my={2} />
            <Flex  flexDirection="column">
              {folder.files.map((file, fileIndex) => (
                <Button key={fileIndex}
                  onClick={() => handleFileSelect(file)}
                  variant="ghost"
                  mb={2} mr={2}
                  flex="0 0 auto" // Ensure buttons don't shrink
                  >
                  {file.name}
                </Button>
              ))}
            </Flex>
          </Box>
        ))}
      </Box>
      <Box flex="2" p={4}>
        {selectedFile ? (
          <Box bgColor={'blue.800'} p={4} borderRadius={4} textColor={'white'}>
            <Text fontWeight="bold" mb={2}>Code Preview</Text>
            <pre>{selectedFile.code}</pre>
          </Box>
        ) : (
          <Text>Select a file to view its code</Text>
        )}
      </Box>
    </Flex>
  );
};

export default FileManager;

import { Card, CardBody, Box, Text, Heading } from '@chakra-ui/react'
import { FileQuestionIcon, FileX2Icon } from 'lucide-react'

interface ExeceptionCardProps {
  title: string
  description: string
  type: 'EMPTY' | 'ERROR'
}

const ExeceptionState = ({ title, description, type }: ExeceptionCardProps) => (
  <Card>
    <CardBody textAlign="center">
      <Box display="flex" justifyContent="center" alignItems="center" paddingBottom={2}>
        {type === 'EMPTY' ? <FileQuestionIcon size={50} strokeWidth={1} /> : <FileX2Icon size={50} strokeWidth={1} />}
      </Box>
      <Heading size="md">{title}</Heading>
      <Text size="sm" color="gray.300">
        {description}
      </Text>
    </CardBody>
  </Card>
)

export default ExeceptionState

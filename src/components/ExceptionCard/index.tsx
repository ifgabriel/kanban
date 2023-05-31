import { Box, Card, CardBody, Heading } from '@chakra-ui/react'
import { FileQuestionIcon, FileX2Icon } from 'lucide-react'

interface ExceptionCardProps {
  title: string
  type: 'EMPTY' | 'ERROR'
}

const ExceptionCard = ({ title, type }: ExceptionCardProps) => (
  <Card>
    <CardBody>
      <Box padding={0} display="flex" justifyContent="space-between" alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        {type === 'EMPTY'
          ? <FileQuestionIcon size={30} strokeWidth={1} />
          : <FileX2Icon size={30} strokeWidth={1} />
        }
      </Box>
    </CardBody>
  </Card>
)

export default ExceptionCard

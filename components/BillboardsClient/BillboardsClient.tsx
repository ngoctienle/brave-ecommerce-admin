import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@ui/button'
import { Heading } from '@ui/heading'
import { Separator } from '@ui/separator'

/* interface IBillboardsClientProps {} */

const BillboardsClient: React.FC = () => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title='Billboards (0)'
          description='Manage billboards for your store'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus size={16} className='mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  )
}

export default BillboardsClient

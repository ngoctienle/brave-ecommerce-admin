'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { BillboardColumn, columns } from '@features/BillboardsPage/columns'

import { APIList } from '@ui/api-list'
import { Button } from '@ui/button'
import { DataTable } from '@ui/data-table'
import { Heading } from '@ui/heading'
import { Separator } from '@ui/separator'

interface IBillboardsClientProps {
  data: BillboardColumn[]
}

export const BillboardsClient: React.FC<IBillboardsClientProps> = ({
  data
}) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Billboards (${data.length})`}
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
      <DataTable searchKey='label' columns={columns} data={data} />
      <Heading title='API' description='API Endpoints for Billboards' />
      <Separator />
      <APIList entityName='billboards' entityIdName='billboardId' />
    </>
  )
}

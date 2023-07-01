'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { columns } from '@features/CategoriesPage/columns'
import { CategoryColumn } from '@features/CategoriesPage/columns'

import { APIList } from '@ui/api-list'
import { Button } from '@ui/button'
import { DataTable } from '@ui/data-table'
import { Heading } from '@ui/heading'
import { Separator } from '@ui/separator'

interface ICategoriesClientProps {
  data: CategoryColumn[]
}

export const CategoriesClient: React.FC<ICategoriesClientProps> = ({
  data
}) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus size={16} className='mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API Endpoints for Categories' />
      <Separator />
      <APIList entityName='categories' entityIdName='categoryId' />
    </>
  )
}

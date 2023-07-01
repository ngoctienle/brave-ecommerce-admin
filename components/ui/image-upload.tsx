'use client'

import { ImagePlusIcon, Trash } from 'lucide-react'
import Image from 'next/image'
import { CldUploadWidget } from 'next-cloudinary'
import { useEffect, useState } from 'react'

import { Button } from '@ui/button'

interface IImageUploadProps {
  disabled?: boolean
  onChange: (value: string) => void
  onRemove: (value: string) => void
  value: string[]
}

export const ImageUpload: React.FC<IImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  if (!isMounted) return null

  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {value.map((url) => (
          <div
            key={url}
            className='relative h-[200px] w-[200px] overflow-hidden rounded-md'
          >
            <div className='absolute right-2 top-2 z-10'>
              <Button
                type='button'
                onClick={() => onRemove(url)}
                variant='destructive'
                size='icon'
              >
                <Trash size={16} />
              </Button>
            </div>
            <Image src={url} alt='Image' fill className='object-cover' />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset='vyfbnlj3'>
        {({ open }) => {
          const onClick = () => {
            open()
          }
          return (
            <Button
              type='button'
              disabled={disabled}
              variant='secondary'
              onClick={onClick}
            >
              <ImagePlusIcon size={16} className='mr-2' />
              Upload an Image
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

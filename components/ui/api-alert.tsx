'use client'

import { Copy, Server } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Alert, AlertDescription, AlertTitle } from '@ui/alert'
import { Badge, BadgeProps } from '@ui/badge'
import { Button } from '@ui/button'

interface IAPIAlertProps {
  title: string
  description: string
  variant: 'public' | 'admin'
}

const textMap: Record<IAPIAlertProps['variant'], string> = {
  public: 'Public',
  admin: 'Admin'
}

const variantMap: Record<IAPIAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive'
}

export const APIAlert: React.FC<IAPIAlertProps> = ({
  title,
  description,
  variant = 'public'
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description)
    toast.success('API Route is copied to clipboard.')
  }

  return (
    <Alert>
      <Server size={16} />
      <AlertTitle className='flex items-center gap-x-2'>
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className='mt-4 flex items-center justify-between'>
        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
          {description}
        </code>
        <Button variant='outline' size='icon' onClick={onCopy}>
          <Copy size={16} />
        </Button>
      </AlertDescription>
    </Alert>
  )
}

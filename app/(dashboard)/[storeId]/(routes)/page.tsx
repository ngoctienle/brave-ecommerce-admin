import prismadb from '@/libs/prismadb'

interface IDashboardPageProps {
  params: { storeId: string }
}

const DashboardPage: React.FC<IDashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })
  return <div>Dashboard for {store?.name}</div>
}

export default DashboardPage

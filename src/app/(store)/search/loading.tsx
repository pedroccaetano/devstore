import { Skeleton } from '@/components/skeleton'
import { CurrentSearch } from '@/app/(store)/search/current-search'
import { Suspense } from 'react'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[402px]" />
        <Skeleton className="h-[402px]" />
        <Skeleton className="h-[402px]" />
        <Skeleton className="h-[402px]" />
        <Skeleton className="h-[402px]" />
        <Skeleton className="h-[402px]" />
      </div>
    </div>
  )
}

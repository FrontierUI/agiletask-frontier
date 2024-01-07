import { Suspense } from 'react';

import { BoardList } from './_components/board-list';
import { Separator } from '@/components/ui/separator';
import { db } from '@/lib/db';
import { Info } from './_components/info';
import { checkSubscription } from '@/lib/subscription';

const OrganizationIdPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full mb-20">
      <Info isPro={isPro} />
      <Separator className="my-4" />

      <div className="px-2 md:px-20 xl:px-0">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;

import React, { useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const DiscountDevices = lazy(() => import('./DiscountDevices'));
const RecentlyViewedDevices = lazy(() => import('./RecentlyViewedDevices'));
const SuggestionDevices = lazy(() => import('./SuggestionDevices'));

export default function HomeContent() {
  // const [v, setV] = useState(false);
  // const [v2, setV2] = useState(false);
  // const [v3, setV3] = useState(false);

  // const { ref, inView } = useInView({
  //   threshold: 0.9,
  // });

  // const { ref: ref2, inView: inView2 } = useInView({
  //   threshold: 0.9,
  // });

  // const { ref: ref3, inView: inView3 } = useInView({
  //   threshold: 0.9,
  // });



  return (
    <>
  
      {/* <Suspense key={'sus'} fallback={<div>Loading...</div>}>
        <DiscountDevices />
      </Suspense> */}
      
      <DiscountDevices/>
      <SuggestionDevices/>
      {/* <RecentlyViewedDevices/> */}

      {/* <Suspense key={'susw'} fallback={<div>Loading...</div>}>
         <RecentlyViewedDevices></RecentlyViewedDevices>
      </Suspense>
     
      <Suspense key={'susx'} fallback={<div>Loading...</div>}>
         <SuggestionDevices />
      </Suspense> */}
    </>
  );
}
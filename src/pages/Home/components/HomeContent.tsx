import React, { useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import DiscountDevices from './DiscountDevices';
import SuggestionDevices from './SuggestionDevices';
import RecentlyViewedDevices from './RecentlyViewedDevices';

export default function HomeContent() {

  return (
    <>      
      <DiscountDevices/>
      <RecentlyViewedDevices/>
      <SuggestionDevices/>
    </>
  );
}
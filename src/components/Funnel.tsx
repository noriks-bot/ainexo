'use client';

import { useFunnel } from '@/context/FunnelContext';
import LandingPage from './pages/LandingPage';
import SocialProofPage from './pages/SocialProofPage';
import QuizPage from './pages/QuizPage';
import LoadingPage from './pages/LoadingPage';
import EmailPage from './pages/EmailPage';
import NamePage from './pages/NamePage';
import SummaryPage from './pages/SummaryPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import SolutionPage from './pages/SolutionPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PrizeWheelPage from './pages/PrizeWheelPage';
import SellingPage from './pages/SellingPage';
import CheckoutPage from './pages/CheckoutPage';

const pages: Record<number, React.ComponentType> = {
  1: LandingPage,
  2: SocialProofPage,
  3: QuizPage,
  4: LoadingPage,
  5: EmailPage,
  6: NamePage,
  7: SummaryPage,
  8: BeforeAfterPage,
  9: SolutionPage,
  10: TestimonialsPage,
  11: PrizeWheelPage,
  12: SellingPage,
  13: CheckoutPage,
};

export default function Funnel() {
  const { currentPage } = useFunnel();
  const Page = pages[currentPage] || LandingPage;

  return (
    <div key={currentPage}>
      <Page />
    </div>
  );
}

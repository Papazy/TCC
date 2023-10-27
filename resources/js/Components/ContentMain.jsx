import Hero from '@/Components/Home/Hero';
import Step from '@/Components/Home/Step';
import Navbar from '@/Components/Navbar';
import Rank from '@/Components/Home/Rank';
import Cta from '@/Components/Home/CTA';
import Footer from '@/Components/Home/Footer';

export default function ContentMain() {
  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
      <Navbar></Navbar>
      <Hero/>
      <Step/>
      <Rank></Rank>
      <Cta></Cta>
      <Footer/>
    </div>
  );
}

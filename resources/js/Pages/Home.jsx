import ContentLayout from '@/Layouts/ContentLayout';
import Hero from '@/Components/Home/Hero';
import Step from '@/Components/Home/Step';                      
import Rank from '@/Components/Home/Rank';
import Cta from '@/Components/Home/Cta';
import Footer from '@/Components/Home/Footer';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <ContentLayout
            user={auth.user}
        >
            <Head title="TCC" />
            <Hero/>
            <Step/>
            <Rank></Rank>
            <Cta></Cta>
            <Footer/> 
        </ContentLayout>
    );
}

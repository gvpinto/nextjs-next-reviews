// 'use client';

// import { useEffect } from "react";
import Link from 'next/link';
import Header from '@/components/Header';
import { getFeatureReview } from '@/lib/reviews';

async function HomePage() {

    console.log('[HomePage] rendering');

    const review = await getFeatureReview();

    // useEffect(() => {
    //     window.alert('Hello welcome to react');
    // });

    return (
        <>
            <Header>Indie Gamer</Header>
            <p className='pb-3'>We only review the best games</p>
            <div className='bg-white border w-80 sm:w-full rounded shadow-sm hover:shadow-xl'>
                <Link href={`/reviews/${review.slug}`} className='flex flex-col sm:flex-row'>
                    <img src={review.image} alt="" className=" rounded-t sm:rounded-l sm:rounded-r-none" width="320" height="180" />
                    <h2 className="font-orbitron font-semibold text-center py-1 sm:px-2">{review.title}</h2>
                </Link>
            </div>
        </>
    );
}

export default HomePage;
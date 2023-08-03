// 'use client';

// import { useEffect } from "react";
import Header from '@/components/Header';

function HomePage() {

    console.log('[HomePage] rendering');

    // useEffect(() => {
    //     window.alert('Hello welcome to react');
    // });

    return (
        <>
            <Header>Indie Gamer</Header>
            <p>We only review the best games</p>
        </>
    );
}

export default HomePage;
import Link from 'next/link';
import Header from '@/components/Header';

function ReviewsPage() {
    return (
        <>
            <Header>Reviews</Header>
            <p>
                Here we will list all the reviews
                <ul>
                    <li><Link href="/reviews/hollow-knight">Hollow Knight</Link></li>
                    <li><Link href="/reviews/stardew-valley">Stardew Valley</Link></li>
                </ul>

            </p>

        </>
    );
}

export default ReviewsPage;

import Link from 'next/link';
import Header from '@/components/Header';
import { getReviews } from '@/lib/reviews';

export const metadata = {
    title: 'Reviews'
};


export default async function ReviewsPage() {

    const reviews = await getReviews();

    return (
        <>
            <Header>Reviews</Header>
            <ul className='flex flex-row flex-wrap gap-3'>
                {reviews.map((review) => (

                    <li key={review.slug} className='bg-white border w-80 rounded shadow hover:shadow-xl'>
                        <Link href={`/reviews/${review.slug}`}>
                            <img src={review.image} alt="" className=" rounded-t" width="320" height="180" />
                            <h2 className="font-orbitron font-semibold text-center py-1">{review.title}</h2>
                        </Link>
                    </li>
                ))}

            </ul>

        </>
    );
}


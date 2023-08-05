import Link from 'next/link';
import Header from '@/components/Header';

function ReviewsPage() {
    return (
        <>
            <Header>Reviews</Header>

            <ul className='flex flex-col gap-3'>
                <li className='bg-white border w-80 rounded shadow hover:shadow-xl'>
                    <Link href="/reviews/hollow-knight">
                        <img src="/images/hollow-knight.jpg" alt="" className=" rounded-t" width="320" height="180" />
                        <h2 className="text-center py-1">Hollow Knight</h2>
                    </Link>
                </li>
                <li className='bg-white border w-80 rounded shadow-sm hover:shadow-xl'>
                    <Link href="/reviews/stardew-valley">
                        <img src="/images/stardew-valley.jpg" alt="" className=" rounded-t" width="320" height="180" />
                        <h2 className="text-center py-1">Stardew Valley</h2>
                    </Link>
                </li>
            </ul>


        </>
    );
}

export default ReviewsPage;

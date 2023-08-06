import Header from "@/components/Header";
import { getReviews } from "@/lib/reviews";


async function StardewValleyPage() {

    const reviews = await getReviews('stardew-valley');

    return (
        <>
            <Header>{reviews.title}</Header>
            <p className='italic pb-2'>{reviews.date}</p>
            <img src={reviews.image} alt="" className="mb-3 rounded" width="640" height="360" />

            <article dangerouslySetInnerHTML={{ __html: reviews.body }}
                className='prose prose-slate max-w-screen-sm'
            />

        </>
    );
}

export default StardewValleyPage;
import Header from "@/components/Header";
import ShareButton from "@/components/ShareButton";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {

    const slugs = await getSlugs();

    return slugs.map((slug) => ({ slug }));
    // return [
    //     { slug: 'hellblade' },
    //     { slug: 'hollow-knight' }
    // ];
}

export async function generateMetadata({ params: { slug } }) {
    const review = await getReview(slug);
    return {
        title: review.title
    };
}


export default async function ReviewPage({ params: { slug } }) {

    console.log("Rendering ReviewPage: ", slug);

    const review = await getReview(slug);

    return (
        <>
            <Header>{review.title}</Header>
            <div className="flex gap-3 items-baseline">
                <p className='italic pb-2'>{review.date}</p>
                <ShareButton />
            </div>
            <img src={review.image} alt="" className="mb-3 rounded" width="640" height="360" />

            <article dangerouslySetInnerHTML={{ __html: review.body }}
                className='prose prose-slate max-w-screen-sm'
            />

        </>
    );
}

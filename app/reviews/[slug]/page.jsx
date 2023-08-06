import Header from "@/components/Header";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {

    const slugs = await getSlugs();

    return slugs.map((slug) => ({ slug }));
    // return [
    //     { slug: 'hellblade' },
    //     { slug: 'hollow-knight' }
    // ];
}


export default async function ReviewsPage({ params: { slug } }) {

    console.log("Rendering ReviewsPage: ", slug);

    const reviews = await getReview(slug);

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

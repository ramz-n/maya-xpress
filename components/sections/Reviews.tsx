import { useLanguage } from "@/context/LanguageContext";
import { useGSAP } from '@gsap/react'
import { Star } from 'lucide-react'
import { useRef } from 'react'
import gsap from 'gsap'

const Reviews = () => {

    const { t } = useLanguage();

    const reviews = [
        {
            quote: t.reviews.review1,
            name: "Marie V.",
            location: t.reviews.review1Location,
            rating: 5,
        },
        {
            quote: t.reviews.review2,
            name: "Peter D.",
            location: t.reviews.review2Location,
            rating: 5,
        },
        {
            quote: t.reviews.review3,
            name: "Sophie M.",
            location: t.reviews.review3Location,
            rating: 5,
        },
    ];

    const reviewsRef = useRef(null)

    useGSAP(() => {
        gsap.from(".reviews-title, .reviews-heading, .reviews-sub, .reviews-card", {
            scrollTrigger: { trigger: reviewsRef.current, start: "top 60%" },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        });

    }, {})

    return (
        <section
            ref={reviewsRef}
            id="reviews"
            className="relative bg-purple-dark -mt-40 pt-30 pb-40"
            style={{
                clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)",
            }}
        >
            <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
                <p className="reviews-title text-amber">{t.reviews.badge}</p>
                <h2 className="reviews-heading mt-4 font-display text-4xl font-bold text-cloud sm:text-5xl">{t.reviews.title}</h2>
                <p className="reviews-sub mt-5 text-base text-mist/70 sm:text-lg">{t.reviews.subtitle}</p>
            </div>

            <div className="relative mt-16">
                <div
                    className="reviews-card grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-6 sm:px-8 justify-center"
                >
                    {reviews.map((review) => (
                        <article
                            key={review.name}
                            className="w-75 rounded-3xl border border-navy bg-navy p-7 sm:w-85"
                        >

                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <Star key={idx} fill='#fa8a0c' className='text-amber' size={20} />
                                ))}
                            </div>

                            <p className="mt-5 text-sm leading-relaxed text-mist/85 sm:text-base">“{review.quote}”</p>
                            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-amber via-magenta to-violet font-display text-sm font-bold text-white">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-display text-sm font-semibold text-cloud">{review.name}</p>
                                    <p className="text-xs text-mist/50">{review.location}</p>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <div className="flex -space-x-3">
                        <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber via-magenta to-violet" />
                        <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber via-magenta to-violet" />
                        <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber via-magenta to-violet" />
                        <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber via-magenta to-violet" />
                    </div>

                    <p className="text-lg text-white">
                        <span className="font-bold text-amber">500+</span>
                        {" "}tevreden klanten • clients satisfaits • happy customers
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Reviews
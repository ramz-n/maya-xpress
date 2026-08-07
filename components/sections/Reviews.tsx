import { reviews } from '@/constants'
import { Star } from 'lucide-react'

const Reviews = () => {
    return (
        <section id="reviews" className="relative bg-navy py-28 sm:py-36">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-80 w-160 -translate-x-1/2 rounded-full bg-magenta/10 blur-[140px]" />
            </div>

            <div className="reviews-heading relative mx-auto max-w-4xl px-6 text-center sm:px-8">
                <p className="text-amber">Customer reviews</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-cloud sm:text-5xl">What our customers say </h2>
                <p className="mt-5 text-base text-mist/70 sm:text-lg">A few words from the people who stop by every week.</p>
            </div>

            <div className="relative mt-16">
                <div
                    className="flex gap-6 px-6 pb-6 sm:px-8 justify-center"
                >
                    {reviews.map((review) => (
                        <article
                            key={review.name}
                            className="review-card w-75 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:w-[340px]"
                        >

                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <Star key={idx} fill='#fa8a0c' className='text-amber' size={20} />
                                ))}
                            </div>

                            <p className="mt-5 text-sm leading-relaxed text-mist/85 sm:text-base">“{review.quote}”</p>
                            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-violet font-display text-sm font-bold text-white">
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
            </div>
        </section>
    )
}

export default Reviews
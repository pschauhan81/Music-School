'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";   
const MusicSchoolTestimonials = [
{
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
]

function MusicSchoolTestimonialCards() {
    return (
        <div className="h-[40rem] w-full">

            <div className={cn(
                "h-[40rem] w-full dark:bg-black dark:bg-bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden",
                "justify-center   items-center",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}>
                <h2 className=" text-3xl font-bold text-center mb-8 z-10 ">Hear our Harmony: voice of sucess</h2>
            <div className="flex items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">  
                <div className="w-full max-w-6xl ">
                    <InfiniteMovingCards
                        items={MusicSchoolTestimonials}
                        direction="right"
                        speed="medium"
                    />
                </div>
            </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonialCards



//Grid Background
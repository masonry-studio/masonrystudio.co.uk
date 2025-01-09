export default function Card2({ content }: { content: { id: number, icon: any, colour: string, title: string, body: string, cta: boolean, button: { text: string, colour: string } } }) {


    const btnclass = `w-fit bg-none border-2 ${content.button.colour} text-[#9CA5AF] hover:text-white rounded-full px-4 py-2 mt-auto active:scale-95 z-10`

    return (
        <div className='relative flex flex-col bg-[#eeeeee] dark:bg-[#0F0F0F] rounded-2xl w-full p-4 gap-4'>
            <content.icon color={content.colour} size={40} strokeWidth={1} />
            <h3 className='font-semibold text-xl'>{content.title}</h3>
            <p className='text-base font-bold text-[#9CA5AF] min-h-10 mb-8'>
                {content.body}
            </p>
            {content.cta &&
                <button className={btnclass}>
                    {content.button.text}
                </button>
            }
            <svg width="334" height="180" viewBox="0 0 334 180" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0'>
                <g opacity="0.7" filter="url(#filter0_f_203_558)">
                    <ellipse cx="249.5" cy="145.5" rx="149.5" ry="45.5" fill={content.colour} fillOpacity="0.20" />
                </g>
                <defs>
                    <filter id="filter0_f_203_558" x="0" y="0" width="499" height="291" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_203_558" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
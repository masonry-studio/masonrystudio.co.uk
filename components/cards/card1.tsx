export default function Card1({content}: {content: {icon: any, colour: string, title: string, body: string, id: number}}) {
    return (
        <div className='flex flex-col bg-[#eeeeee] dark:bg-[#141414] rounded-2xl w-full p-4'>
            <div className='flex items-center gap-4'>
                <content.icon color={content.colour} size={30} />
                <h3 className='font-semibold'>{content.title}</h3>
            </div>
            <p className='ml-11 text-sm min-h-10'>{content.body}</p>
        </div>
    )
}
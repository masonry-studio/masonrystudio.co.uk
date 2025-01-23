import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Faqs({ data }: { data: Array<{ id: number, title: string, content: Array<string> }> }) {
    return (
        <Accordion type="single" collapsible>
            {data.map((item) => {
                return (
                    <AccordionItem key={item.id} value={item.id.toString()} className='w-11/12 mx-auto'>
                        <AccordionTrigger>
                            <h3 className='subheader-text-2'>{item.title}</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.content.map((item, idx) => {
                                return <p key={idx} className='body-text text-[#9CA5AF] ml-6'>{item}</p>
                            })}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}
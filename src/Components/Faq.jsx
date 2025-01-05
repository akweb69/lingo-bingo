import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import img1 from "../assets/img/Questions-pana.png"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const Faq = () => {
    const [Fa1, setFaq] = useState([])

    useEffect(() => {
        fetch("/FAQ.json")
            .then(res => res.json())
            .then(data => setFaq(data))
        console.log(data)
    }, [])


    return (
        <section className="py-12 bg-[rgb(0,0,31)] text-white">
            <Helmet>
                <title>FAQ | Lingo-Bingp</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center  mb-10">Frequently Asked Questions</h2>
                <div className="md:grid grid-cols-2 justify-between items-center">
                    <div className="md:p-20">
                        <img className='w-full' src={img1} alt="" />
                    </div>
                    <div className="">
                        <div className="space-y-4">
                            {
                                Fa1.map((q, idx) => <Accordion>
                                    <AccordionItem key={idx}>
                                        <AccordionItemHeading >
                                            <AccordionItemButton >
                                                {q.question}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            {q.answer}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Faq;

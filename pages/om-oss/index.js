
export default function Home() {
    return(
        <>
        <div className='w-full relative'>
            <div className='w-full h-full bg-blue-500 top-0 left-0 absolute opacity-40'></div>
            <div className='w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center p-1'>
                <div className='text-4xl lg:text-5xl font-bold text-white my-2'>OMNIDIG</div>
                <div className='text-md lg:text-lg text-white text-center'>Konsultbolag med lång erfarenhet inom digital marknadsföring.</div>
            </div>
            <img src="/images/seo-header.jpg" />
        </div>

        <section className='max-w-3xl mx-auto m-12'>
            <div className='bg-white lg:flex lg:shadow-lg lg:rounded-lg'>
                <div className='p-12 text-center'>
                    <h2 className='text-2xl text-gray-800 font-bold md:text-3xl'></h2>
                    <p className='mt-4 text-gray-600 text-left md:text-center'>Omnidig är ett litet familjeägt konsultbolag bestående av två personer med lång erfarenhet inom digital synlighet, webbanalys och webbdesign.
                    Sedan starten 2016 har vi jobbat med allt i från riktigt stora företag hela vägen ner till det lilla enmansföretaget med kundanpassade lösningar för att förbättra synlighet, trafik och konverteringar.</p>
                </div>
            </div>
        </section>
        </>
    )
}
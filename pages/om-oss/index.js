
export default function Home() {
    return(
        <>
        <div className="max-w-full px-6 py-16 mx-auto text-center bg-gray-800">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-white md:text-4xl">Det här är Omnidig</h1>
                <p className="mt-6 text-white">Vi är ett litet familjeägt bolag som jobbat med digital marknadsföring i snart 15 år där vi hjälp företag i många olika branscher.</p>
            </div>
        </div>

        <section className='container px-6 py-16 mx-auto text-center'>
            <div className='bg-white lg:flex'>
                <div className='p-12 text-center'>
                    <p className='mt-4 text-gray-600 text-left'>Omnidig är ett litet familjeägt konsultbolag bestående av Daniel & Cecilia som tillsammans har lång erfarenhet inom digital synlighet, webbanalys och webbdesign.
                    Sedan vi startade upp Omnidig 2016 har vi jobbat med allt i från riktigt stora företag hela vägen ner till det lilla enmansföretaget med kundanpassade lösningar för att förbättra synlighet, trafik och konverteringar.</p>

                    <p className='mt-4 text-gray-600 text-left'>Tidigare har vi jobbat både på byrå och inhouse vilket gett oss en bra syn på helheten som ett företag behöver för att synas riktigt bra.</p>

                    <h2 className='m-12 text-2xl text-gray-800 font-bold md:text-3xl'>Vilka är vi?</h2>
                    <div className="flex flex-col md:flex-row justify-evenly">
                        
                        
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="text-left">Daniel Carlbom</div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-400">Info kommer snart</div>
                    </div>

                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto m-4 md:m-0">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="text-left">Cecilia Carlbom Widén</div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    <div className="mt-3 text-sm text-gray-400">Info kommer snart</div>
                    </div>
                           
                    </div>        
                </div>
                    
            </div>
            
        </section>
        </>
    )
}
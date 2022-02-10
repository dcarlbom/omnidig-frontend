import Image from 'next/image'

export default function Home() {
    return(
        <div className='w-full relative'>
            <div className='w-full h-full bg-blue-500 top-0 left-0 absolute opacity-40'></div>
            <div className='w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center p-1'>
                <div className='text-4xl lg:text-5xl font-bold text-white my-2'>SEO</div>
                <div className='text-md lg:text-lg text-white text-center'>Med lång och bred erfarenhet inom sökmotoroptimering hjälper vi er synas i sökresultatet.</div>
            </div>
            <img src="/images/seo-header.jpg" />
        </div>
    )
}
import mbangDragonImg from '../../assets/image/mbang-dragon-ui.png';

export const PortfolioSection = () => {
  const mbangDragon = {
    id: 1,
    title: 'MbangDragon - Bearded Dragon Collections',
    description: 'Website katalog dan landing page interaktif untuk Mbang Dragon Yogyakarta (breeder Bearded Dragon). Menampilkan daftar koleksi morph terbaru lengkap dengan detail harga, panduan perawatan komprehensif untuk pemula, testimoni pembeli, serta integrasi pemesanan cepat langsung via WhatsApp dan Instagram',
    tags: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: mbangDragonImg,
    link: 'https://mbang-dragon.vercel.app',
  }

  return (
    <section className='py-24 bg-white' id='portfolio'>
      <div className='max-w-6xl mx-auto px-6'>
        <span className='text-xs font-bold tracking-widest text-slate-500 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm mb-8'>
          Portfolio
        </span>

        <h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-8'>
          Portofolio
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div
            key={mbangDragon.id}
            className='group border rounded-lg overflow-hidden hover:shadow-200 transition-shadow duration-300'
          >
            <img
              src={mbangDragon.image}
              alt={mbangDragon.title}
              className='w-full h-48 object-cover group-hover:opacity-80 transition-opacity'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>{mbangDragon.title}</h3>
              <p className='text-slate-600 mb-6'>{mbangDragon.description}</p>
              <div className='flex flex-wrap gap-2'>
                {mbangDragon.tags.map((tag) => (
                  <span
                    key={tag}
                    className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-slate-500 bg-slate-100'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={mbangDragon.link}
                target='_blank'
                rel='noreferrer'
                className='mt-4 inline-flex items-center gap-2 px-4 py-2 border border-emerald-600 text-emerald-600 font-medium rounded-full hover:bg-emerald-600 hover:text-white transition-colors'
              >
                Lihat Website
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
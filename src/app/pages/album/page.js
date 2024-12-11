import images from '@/constant/album';
import Image from 'next/image';

const AlbumPage = () => {
  // const data = [
  //   '/images/couple-in-beach.jpg',
  //   '/images/wedding-celebrating.jpg',
  //   '/images/photo (1).jpg',
  //   '/images/photo (2).jpg',
  //   '/images/photo (3).jpg',
  //   '/images/photo (4).jpg',
  //   '/images/photo (5).jpg',
  //   '/images/photo (6).jpg',
  //   '/images/photo (7).jpg',
  //   '/images/photo (8).jpg',
  //   '/images/photo (9).jpg',
  //   '/images/photo (10).jpg',
  //   '/images/photo (11).jpg',
  // ];
  return (
    <div className=''>
      <div className='flex justify-between items-center border-b p-4 fixed w-full bg-[#fff]'>
        <div>
          <p className='text-lg font-semibold'>Dara & Arifin Weddings</p>
          <p className='text-[13px] text-[#B1B1B1]'>{`${images?.length} Photos & Videos`}</p>
        </div>
        <div>
          <a
            href='/pages/upload'
            className='bg-[#0BB90B] text-[#fff] font-medium px-3 py-2.5 rounded-xl flex items-center space-x-2'
          >
            <Image
              src='/icons/plus.svg'
              alt='Next.js logo'
              width={25}
              height={25}
              priority
            />
            <span className='text-sm font-semibold'>Upload</span>
          </a>
        </div>
      </div>
      <div className='bg-[#F8FAFD] p-4 pt-[96px]'>
        <div className='columns-2 sm:columns-4 lg:columns-5'>
          {images?.map((el, i) => (
            <Image
              key={i}
              src={el}
              alt='Next.js logo'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: 'auto', height: '100%', paddingBottom: '12px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;

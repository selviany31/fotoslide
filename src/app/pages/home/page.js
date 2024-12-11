import images from '@/constant/album';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-[url('/images/wedding-celebrating.jpg')] h-screen bg-cover bg-center bg-[rgba(76, 175, 80, 0.3)]">
      <div
        style={{
          // backgroundColor: 'rgba(0, 0, 0, 0.7)',
          height: '100vh',
        }}
        className='bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.85)]'
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            height: '100vh',
          }}
          className='pt-8 pb-3 px-4 flex flex-col justify-between'
        >
          <div className='flex justify-between items-center'>
            <Image
              src='/logo.png'
              alt='Next.js logo'
              width={150}
              height={20}
              priority
            />
            <p className='text-[#fff] font-medium text-[13px]'>
              Snap, Scan, Share Instantly.
            </p>
          </div>
          <div className='space-y-5'>
            <div className='flex justify-between items-center'>
              <Image
                className='rounded-2xl'
                src='/images/couple-in-beach.jpg'
                alt='Next.js logo'
                width={100}
                height={100}
                priority
              />
              <div>
                <button className='bg-[#0BB90B] text-[#fff] font-medium px-3 py-2.5 rounded-xl flex items-center space-x-2'>
                  <Image
                    src='/icons/plus.svg'
                    alt='Next.js logo'
                    width={25}
                    height={25}
                    priority
                  />
                  <span className='text-sm font-semibold'>Upload</span>
                </button>
              </div>
            </div>
            <div>
              <p className='text-3xl text-[#fff] font-medium tracking-wider'>
                Dara & Arifin Weddings
              </p>
              <p className='text-[#fff] text-[13px]'>13 Aug 2024</p>
            </div>
            <div className='border-b-[0.5px] border-[#fff]' />
            <div className='flex flex-col items-center'>
              <a
                href='/pages/album'
                className='text-[#fff] text-[13px] text-center flex flex-col items-center space-y-3'
              >
                <p>{`${images?.length} Photos & Videos`}</p>
                <Image
                  src='/icons/arrow-down.svg'
                  alt='Next.js logo'
                  width={15}
                  height={15}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

'use client';
import Image from 'next/image';
import CaptionForm from './caption';
import { useState } from 'react';

const PreviewImage = ({ imageURLS, setImageURLS }) => {
  const [show, setShow] = useState(false);

  const handleRemove = (val) => {
    setImageURLS(imageURLS?.filter((el) => el !== val));
  };
  return (
    <>
      <div className='flex overflow-x-auto self-baseline space-x-3'>
        {imageURLS?.map((el, i) => (
          <div key={i} className='bg-[#fff] rounded-xl'>
            <div className='bg-[#fff] w-[250px] h-[250px] rounded-xl shadow-lg flex items-center justify-center border relative'>
              <div className='absolute top-2 left-2'>
                <button onClick={() => handleRemove(el)}>
                  <Image
                    src='/icons/trash.svg'
                    alt='Next.js logo'
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              <Image
                src={el}
                alt='Next.js logo'
                // layout='fill'
                // objectFit='cover'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                  width: 'auto',
                  //   height: '-webkit-fill-available',
                  maxHeight: 250,
                  paddingBottom: '12px',
                }}
              />
            </div>
            <div className='w-full py-4'>
              <button
                className='flex justify-center space-x-1 w-full'
                onClick={() => setShow(true)}
              >
                <Image
                  src='/icons/message.svg'
                  alt='Next.js logo'
                  width={32}
                  height={32}
                />
                <span className='text-[#0BB90B] font-medium'>
                  Caption Added
                </span>
              </button>
            </div>
          </div>
        ))}
        <div className='absolute right-4 bottom-[130px]'>
          <button className='w-[80px] h-[80px] bg-[#fff] rounded-full border shadow-xl flex justify-center items-center'>
            <Image
              src='/icons/plus-green.svg'
              alt='Next.js logo'
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
      <div className='absolute border-t-2 bg-[#fff] w-full left-0 bottom-0 py-6 px-4'>
        <button className='bg-[#0BB90B] text-[#fff] font-semibold text-lg w-full py-3 rounded-lg'>{`Upload ${imageURLS?.length} photos`}</button>
      </div>
      {show ? <CaptionForm close={() => setShow(false)} /> : null}
    </>
  );
};

export default PreviewImage;

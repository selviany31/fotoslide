'use client';
import Image from 'next/image';
import UploadForm from './form';
import { useState } from 'react';
import PreviewImage from './preview';

const UploadPage = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLS] = useState([]);
  const [isPreview, setIsPreview] = useState(false);

  const uploadImageToClient = (event) => {
    // if (event.target.files && event.target.files[0]) {
    //   setImages((imageList) => [...imageList, event.target.files[0]]);
    //   setImageURLS((urlList) => [
    //     ...urlList,
    //     URL.createObjectURL(event.target.files[0]),
    //   ]);
    // }
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImages((imgs) => [...imgs, file]);
        setImageURLS((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
    setIsPreview(true);
  };

  return (
    <div>
      <div className='p-4 border-b fixed bg-white w-full'>
        <a
          href='/pages/album'
          className='text-[13px] font-semibold text-[#0BB90B] flex space-x-1 items-center'
        >
          <Image
            src='/icons/arrow-back.svg'
            alt='Next.js logo'
            width={24}
            height={24}
            priority
          />
          <span>Back to Album</span>
        </a>
        <p className='text-lg font-semibold text-center mt-3 tracking-wide'>
          Dara & Arifin Weddings
        </p>
      </div>
      <div className='bg-[#F8FAFD] p-4 h-screen pt-[150px] overflow-y-hidden'>
        {isPreview && imageURLS?.length ? (
          <PreviewImage imageURLS={imageURLS} setImageURLS={setImageURLS} />
        ) : (
          <div className='flex flex-col justify-center items-center '>
            <UploadForm handleUpload={uploadImageToClient} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;

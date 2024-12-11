import Image from 'next/image';

const UploadForm = ({ handleUpload }) => {
  return (
    <>
      <input
        id='image-upload'
        type='file'
        hidden
        onChange={handleUpload}
        multiple
      />
      <label
        htmlFor='image-upload'
        className='w-[300px] h-[150px] bg-[#fff] rounded-xl border-2 border-dashed flex flex-col items-center justify-center mb-8'
      >
        <Image
          src='/icons/gallery.svg'
          alt='Next.js logo'
          width={50}
          height={50}
          priority
        />
        <p className='text-[#B1B1B1] text-[13px] font-semibold'>
          Browse Photos
        </p>
      </label>
      <div className='w-[300px] h-[150px] bg-[#fff] rounded-xl border-2 border-dashed flex flex-col items-center justify-center mb-8'>
        <Image
          src='/icons/video-player.svg'
          alt='Next.js logo'
          width={40}
          height={40}
          priority
        />
        <p className='text-[#B1B1B1] text-[13px] font-semibold'>
          Browse Videos
        </p>
      </div>
      <div className='w-[300px] h-[150px] bg-[#fff] rounded-xl border-2 border-dashed flex flex-col items-center justify-center mb-8'>
        <Image
          src='/icons/message.svg'
          alt='Next.js logo'
          width={50}
          height={50}
          priority
        />
        <p className='text-[#B1B1B1] text-[13px] font-semibold'>
          Or Create Text Post
        </p>
      </div>
    </>
  );
};

export default UploadForm;

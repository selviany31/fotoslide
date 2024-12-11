import Image from 'next/image';

const CaptionForm = ({ close }) => {
  return (
    <div className='bg-[rgba(0,0,0,0.5)] h-screen w-full absolute top-0 left-0 flex items-end'>
      <div className='bg-[#fff] w-full p-5 space-y-3'>
        <div className='absolute right-4'>
          <button onClick={close}>
            <Image
              src='/icons/close.svg'
              alt='Next.js logo'
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>Add Caption</label>
          <input
            type='textarea'
            className='border-2 rounded-lg h-[150px]'
            placeholder='Write a caption for this photo here (emoji are welcome)'
          />
          <p className='text-end text-sm font-semibold text-[grey]'>0/300</p>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>Name (Optional)</label>
          <input type='text' className='border-2 rounded-lg py-3' />
        </div>
        <div className='text-center pt-4'>
          <button className='text-[#0BB90B] border border-[#0BB90B] rounded-lg text-lg font-semibold py-3 px-6'>
            Save Caption
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptionForm;

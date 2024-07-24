import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItems = ({ title, description, category, image, id }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-xl transition-shadow duration-300'>
      <Link href={`/blogs/${id}`} passHref>
        <div className='w-full h-[200px]'>
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className='w-full h-full object-cover border-b border-black'
          />
        </div>
      </Link>
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>{category}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-900'>{title}</h5>
        <p
          className='mb-3 text-sm tracking-tight text-gray-700'
          dangerouslySetInnerHTML={{ __html: description.slice(0,120) }}
        ></p>
        <Link href={`/blogs/${id}`} passHref>
          <div className='inline-flex items-center py-2 font-semibold text-center text-black hover:text-gray-800'>
            Read more <Image src={assets.arrow} className='ml-2' alt='Arrow' width={12} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogItems;

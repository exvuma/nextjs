import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
type Props = {
  children?: ReactNode;
  date: string;
  title: string;
};
import { GetStaticProps } from 'next';

export const getStaticProps: any = async (context: any) => {
  // ...
  console.log('context', context);
  return context;
};
export const BlogPost = ({ children, date, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='container'>
            <div className='post-preview'>
              <h2 className='post-title'>{title}</h2>
              <p className='post-meta'>Posted on {date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-10 mx-auto'>
            <hr />
            <p className='post'>{children}</p>
          </div>
        </div>
      </div>
    </>
  );
};

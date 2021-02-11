import { Children, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  date: string;
  title: string;
};
const BlogPost = ({ children, date, title }: Props) => {
  // console.log(children)
  // return <div className={styles.container}>{children}</div>;
  return (
    <>
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
export default BlogPost;

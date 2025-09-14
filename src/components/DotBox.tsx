import React from 'react';

const DotBox = ({children}:{children:string}) => {
    return (
      <div className=''>
        <h1 className="text-shadow-xs text-primary px-2 bg-black/10 dark:bg-white/10 w-fit relative">
          <span className="absolute w-1 h-1 -top-1 -right-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          <span className="absolute w-1 h-1 -top-1 -left-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          <span className="absolute w-1 h-1 -bottom-1 -right-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          <span className="absolute w-1 h-1 -bottom-1 -left-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          {children}
        </h1>
      </div>
    );
}

export default DotBox;

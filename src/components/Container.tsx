import React from 'react';
import Navbar from './Navbar';
type ContainerProps={
    children:React.ReactNode,
    className?:string
}

const Container:React.FC<ContainerProps> = ({children,className}) => {
    return (

        <div  className={`max-w-4xl mx-auto h-full  ${className}`}>
            {children}
        </div>
    );
}

export default Container;

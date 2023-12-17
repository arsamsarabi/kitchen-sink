import type { PropsWithChildren } from 'react';
import { Header } from '../header';
import cn from './layout.module.css';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn.layout}>
      <Header />
      <div className={cn.main}>
        {children}
      </div>
    </div>
  );
};

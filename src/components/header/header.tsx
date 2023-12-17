import cn from './header.module.css';

export const Header = () => {
  return (
    <header className={cn.header}>
      <picture className={cn.logo}>
        <source srcSet="https://via.placeholder.com/250" media="(min-width: 650px)" />
        <source srcSet="https://via.placeholder.com/200" media="(min-width: 465px)" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </picture>
      <h1 className={cn.title}>My Website</h1>
      <nav className={cn.nav}>
        <ul className={cn.list}>
          <li className={cn.list__item}>Home</li>
          <li className={cn.list__item}>About</li>
          <li className={cn.list__item}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

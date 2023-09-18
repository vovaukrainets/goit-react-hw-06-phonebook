import css from './Loyout.module.css';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

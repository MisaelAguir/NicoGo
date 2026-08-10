import { Page } from '../main';

export function BackHeader({ title, navigate, back = 'home' }: { title: string; navigate: (page: Page) => void; back?: Page }) {
  return (
    <div className="back-header">
      <button className="link-button" onClick={() => navigate(back)}>
        <i className="fa-solid fa-chevron-left" />
      </button>
      <strong>{title}</strong>
      <span />
    </div>
  );
}

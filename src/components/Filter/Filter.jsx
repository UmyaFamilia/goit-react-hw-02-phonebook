import css from './Filter.module.css';
export const Filter = ({ findNecessary }) => {
  const filter = ({ target: { value } }) => {
    findNecessary(value);
  };
  return (
    <div className={css.filterCover}>
      <label htmlFor="find">find contacts by name</label>
      <input className={css.inpute} name="find" type="text" onChange={filter} />
    </div>
  );
};

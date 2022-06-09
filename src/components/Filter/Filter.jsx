import s from './Filter.module.scss';

const Filter = ({ filterValue, handleFilter }) => {
  return (
    <div className={s.filter}>
      <h3 className={s.title}>Find Contact by name</h3>
      <input
        type="text"
        className={s.formInput}
        value={filterValue}
        onChange={e => handleFilter(e.currentTarget.value)}
      />
    </div>
  );
};

export default Filter;

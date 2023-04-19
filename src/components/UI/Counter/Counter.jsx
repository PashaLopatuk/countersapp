import React, { useState, useEffect } from 'react';
import s from './Counter.module.scss';
import store from '../../../store/store';
import { addAccount, changeBalance } from '../../../store/reducers/accountsReducer';

const Counter = ({ ThisCounterNumber, title }) => {
  console.log('title: ',title)
  useEffect(() => {
    store.dispatch(addAccount(title));
  }, [title]);

  const [num, setNum] = useState(0);
  useEffect(() => {
    setNum(store.getState().accounts[title]?.balance || 0);
  }, [title]);
  

  const handleDecrement = () => {
    if (store.getState().accounts[title].balance) {
      const accountBalance = store.getState().accounts[title].balance;
      store.dispatch(changeBalance(title, accountBalance - 1));
      setNum(store.getState().accounts[title]?.balance || 0);
    }
    
  };

  const handleIncrement = () => {
    const accountBalance = store.getState().accounts[title].balance;
    store.dispatch(changeBalance(title, accountBalance + 1));
    setNum(store.getState().accounts[title]?.balance || 0);

  };

  return (
    <div className={s.counter}>
      <div className={s.counter__title}>
        {title}
        {/* <button className={s.counter__delete} onClick={() => {
          console.log('Account removing: ', title)
          store.dispatch(removeAccount(title))
        } */}
        {/* }> Delete </button> */}
        </div>
      <div className={s.counter__value}>{num}</div>
      <div className={s.counter__buttons}>
        <button className={s.counter__buttons__item} onClick={handleDecrement}>-</button>
        <button className={s.counter__buttons__item} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;

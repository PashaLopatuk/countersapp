import React, { useEffect, useState } from 'react';
import Counter from '../Counter/Counter'
import s from './Counters.module.scss'
import NewCounter from '../NewCounter/NewCounter';

const Counters = () => {
  const [create, setCreate] = useState();
  const [countersNumber, setCountersNumber] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [ counters, setCounters ] = useState([])

  useEffect( () => console.log('countersNumber: ', countersNumber), [countersNumber])

  const createCounter = () => {
    
    if (countersNumber) {
      
      setCounters(
        [...counters,
        {
          num: countersNumber,
          title: newTitle,
        }]
      )
    } else {

      setCounters(
        [{
          num: countersNumber,
          title: newTitle,
        }]
      )
    }
  }


  useEffect(() => {
    console.log('useEffect on \'create\' worked!')
    if (create === false && newTitle !== '') {
      createCounter()
      setCountersNumber(countersNumber + 1);
      setNewTitle('')
    }
  }, [create])

  return (
    <>
    {
      create ? <NewCounter setNewTitle={setNewTitle} setCreate={setCreate}/> : <></>
    }
    <div className={s.counters__body}>
        {
            Array.isArray(counters) ? counters.map( ({num, title}) => 
              <Counter key={num} ThisCounterNumber={num} title={title}/>
            ) : <></>
        }
        <button className={
          countersNumber ? s.add__activated : s.add__counter
        } onClick={() => setCreate(true)}>+</button>
    </div>
    </>
  )
}

export default Counters

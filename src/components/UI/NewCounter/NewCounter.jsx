import s from './NewCounter.module.scss'

const NewCounter = ({setNewTitle, setCreate}) => {
  let inputValue = '';
  return (
    <div className={s.background}>
      <form className={s.NewCounter}>
        <label className={s.NewCounter__title}>Whats counting?</label>
        {/* <input className={s.NewCounter__input} type='text' placeholder='' onChange={(e) => setTitle(e.target.value)}/> */}
        <input className={s.NewCounter__input} type='text' placeholder='' onChange={(e) => {
          inputValue = e.target.value
        }}/>

        <button className={s.NewCounter__save} onClick={() => {
            setNewTitle(
              inputValue !== '' ? inputValue : 'None'
              );
            setCreate(false)
            }}>Save</button>
        <button className={s.NewCounter__cancel} onClick={
          () => {
            setCreate(false)
          }
        }>Cancel</button>
      </form>
    </div>
  )
}

export default NewCounter

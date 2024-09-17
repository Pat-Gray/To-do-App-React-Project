/* eslint-disable react/prop-types */

export default function TaskField(props){
  return(
    <form onSubmit={props.onSubmit}>
        <input 
        type="text" 
        required 
        placeholder="Add your to-do task here"
        onChange={props.onChange}
        value={props.value} />
        <button className="btn">Save Task</button>
    </form>
  )
}
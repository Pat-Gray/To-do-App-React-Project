/* eslint-disable react/prop-types */

export default function TaskList(props){
  return(
    <ul>
    {props.displayListItems()}
    </ul>
  )
}


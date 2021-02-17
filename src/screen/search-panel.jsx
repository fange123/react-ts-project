import React from 'react'
export const SearchPanel = ({param,setParam,users})=> {

   return <form>
      <div>
         <input type="text" value={param.name} onChange={evt =>
            setParam({
               ...param,
               name:evt.target.value
            })
         }/>
         <select value={param.personId} onChange={evt =>
            setParam({
               ...param,
               personId:evt.target.value
            })
         }>
            <option value={''}>负责人</option>
            {
               users.map(users => <option value={users.id} key={users.id}>{users.name}</option>)
            }
         </select>
      </div>
   </form>
}
import React from 'react'
import { useEffect, useState } from "react"
import { SearchPanel } from "screen/project-list/search-panel"
import { List } from "./list"
import qs from "qs"
import {cleanObject, useDebounce, useMount} from 'utils/index'

const apiUrl = process.env.REACT_APP_API_URL


export const ProjectListScreen = ()=> {
     const [param,setParam] = useState({
      name:'',
      personId:''
   })
   const [users,setUsers] = useState([])
   const [list,setList] = useState([])
   const debounceParam = useDebounce(param,2000)
   useEffect(()=> {

      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
         if(response.ok){
            setList(await response.json())
         }
      })
   },[debounceParam])
   useMount(()=> {
      fetch(`${apiUrl}/users`).then(async response => {
         if(response.ok){
            setUsers(await response.json())
         }
      })
   })


   return <div>
      <SearchPanel param={param} setParam={setParam} users={users}/>
      <List list={list} users={users}/>
   </div>

}

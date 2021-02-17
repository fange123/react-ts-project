import React from 'react'
import { useEffect, useState } from "react"
import { SearchPanel } from "screen/search-panel"
import { List } from "./list"
import * as qs from "qs"
import {cleanObject} from 'utils/index'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = ()=> {
     const [param,setParam] = useState({
      name:'',
      personId:''
   })
   const [users,setUsers] = useState([])
   const [list,setList] = useState([])
   useEffect(()=> {

      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
         if(response.ok){
            setList(await response.json())
         }
      })
   },[param])
   useEffect(()=> {
      fetch(`${apiUrl}/users`).then(async response => {
         if(response.ok){
            setUsers(await response.json())
         }
      })
   },[])
   return <div>
      <SearchPanel param={param} setParam={setParam} users={users}/>
      <List list={list} users={users}/>
   </div>
}
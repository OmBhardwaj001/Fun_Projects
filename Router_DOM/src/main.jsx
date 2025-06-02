import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, useParams, NavLink, useAsyncError} from "react-router-dom"
import App from './App.jsx'

const Home=()=>{

  const [post, setPost] = useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
     .then((data)=> data.json())
     .then((data)=>setPost(data))
  },[])

  return(
    <div className='post-container'>
      {
        post.map((post)=> (<NavLink style={{display:"block"}} key={post.id} to={`/posts/${post.id}`}>{post.title}</NavLink>))
      }
    </div>
  )
}

const About=()=>{
  return(
    <div>
      <h1> about page</h1>
    </div>
  )
}

const Profile=()=>{
  return(
    <h1> profile page </h1>
  )
}

const Setting=()=>{
  return(
    <h1> Setting page </h1>
  )
}

const Sayuser=()=>{
  const params = useParams();

  return(
    <div>
    <h1> Your name is {params.userName}</h1>
    </div>
  )
}

const PostPage=()=>{
  const params = useParams();
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then((data)=>data.json())
    .then((data)=> setData(data))
  },[])

  if(data === null) return <p>loading..</p>;

  return(
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>

  <Route path='/user/:userName' element={<Sayuser/>}/>
  <Route path='/posts/:postId' element={<PostPage/>}/>
  
  <Route path='account'>
  <Route path='Profile' element={<Profile/>}/>
  <Route path='Setting' element={<Setting/>}/>
  </Route>
  
  
  </Routes>
  </BrowserRouter>
  </StrictMode>
)

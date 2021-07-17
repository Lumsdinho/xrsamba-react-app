import React, {useState, useEffect} from 'react'
import { client } from '../config/contentfulClient'
import marked from 'marked'

const Repertoire = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        client.getEntries()
          .then(entries => {
            setTitle(entries.items[0].fields.title)
            setDescription(entries.items[0].fields.description)
            setContent(entries.items[0].fields.content)
          })
    },[])

    return (
        <div className="container" style={{
            backgroundColor:"white",
            border:"solid .2rem #FE82CB",
            borderRadius:"2%",
            marginBottom:".5rem"
          }}>        
            <h2 style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: `${marked(title)}`}}/>   
            <div style={{margin: '1rem 0'}} dangerouslySetInnerHTML={{__html: `${marked(description)}`}}/>   
            <div style={{marginTop:'2rem'}} dangerouslySetInnerHTML={{__html: `${marked(content)}`}}/>   
        </div>  
    )
}

export default Repertoire

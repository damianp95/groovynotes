import React from 'react';
import './Roww.css';
import {Redirect} from 'react-router-dom'
import {Button, Col} from 'react-bootstrap'
import { IoMdTrash, IoMdBuild } from "react-icons/io";
import ReactQuill from 'react-quill';

class Roww extends React.Component{
    constructor(props){
        super(props)

        this.state={
            noteup:[],
            title:this.props.title,
            text:this.props.text,
            id:this.props.id,
            index: this.props.index
        }        
        this.moveToEdit=this.moveToEdit.bind(this)
        this.moveToDelete=this.moveToDelete.bind(this)
    }

    moveToEdit(){

        const {title,text,id,index} = this.state;
        let upNote ={
            id:id,
            index: index,
            title:title,
            text:text
        }

        upNote = JSON.stringify(upNote);
        sessionStorage.setItem('ChangingMessage', upNote)
        let redirectToEdit= this.state.redirectToEdit
        this.setState({redirectToEdit:true})

    }

    moveToDelete(){

        const {title,text,id,index} = this.state;
        let upNote ={
            id:id,
            index: index,
            title:title,
            text:text,
            redirectToEdit:false,
            redirectToDelete:false
        }

        upNote = JSON.stringify(upNote);
        sessionStorage.setItem('DeleteMessage', upNote)
        let redirectToDelete= this.state.redirectToDelete

        //Change value to redirect to Delete 
        this.setState({redirectToDelete:true})

    }

    render(){

        const redirectToEdit = this.state.redirectToEdit;
        if (redirectToEdit === true) {
            return <Redirect to="./edit" />
        }
        const redirectToDelete = this.state.redirectToDelete;
        if (redirectToDelete === true) {
            return <Redirect to="./delete" />
        }


        return(
            <Col md={4} >
            <div className="row-bod">
             <div> 
                <div className="button-panel">
                    <Button
                    className="btn-sm"
                    onClick={this.moveToEdit}>
                    <IoMdBuild/>
                    </Button>
                    <Button className="btn-sm" onClick={this.moveToDelete}>
                        <IoMdTrash/>
                    </Button>
                </div>
                </div>
            <h4 className="note-title">
            {this.props.title}
            </h4>
               
            <ReactQuill 
            readOnly="true"
            value={this.state.text}
            theme="bubble"
                    />
        
                
            
            </div>
            </Col>
        )
    }
}

export default Roww
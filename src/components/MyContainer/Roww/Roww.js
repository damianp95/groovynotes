import React from 'react';
import './Roww.css';
import {Redirect} from 'react-router-dom'
import {Button, Col,Container,Row} from 'react-bootstrap'
import { IoMdTrash, IoMdBuild } from "react-icons/io";
import ReactQuill from 'react-quill';


// Note:The original name for this component was Row 
//however, to avoid conflict with React Bootstrap it has been changed to Roww


class Roww extends React.Component{
    constructor(props){
        super(props)

        this.state={
            noteup:[],
            title:this.props.title,
            content:this.props.content,
            id:this.props.id,
            index: this.props.index
        }        
        this.moveToEdit=this.moveToEdit.bind(this)
        this.moveToDelete=this.moveToDelete.bind(this)
    }

    moveToEdit(){

        const {title,content,id,index} = this.state;
        let upNote ={
            id:id,
            index: index,
            title:title,
            content:content
        }

        upNote = JSON.stringify(upNote);
        sessionStorage.setItem('ChangingMessage', upNote)
        let redirectToEdit= this.state.redirectToEdit
        this.setState({redirectToEdit:true})

    }

    moveToDelete(){

        const {title,content,id,index} = this.state;
        let upNote ={
            id:id,
            index: index,
            title:title,
            content:content,
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
            <Col>
            <Container className="row-bod">
                <Row>
                        <Col>
                            <h4 className="mt-3">
                            {this.props.title}
                            </h4>
                        </Col>
                         <Col>
                            <Button
                            className="btn-sm mt-3"
                            onClick={this.moveToEdit}>
                            <IoMdBuild
                            fontSize="20px"
                            />
                            </Button>
                            <Button 
                            className="btn-sm mt-3 btn-danger" 
                            onClick={this.moveToDelete}>
                                <IoMdTrash
                                fontSize="20px"
                                />
                            </Button>
                        </Col>
                    </Row> 
                    <hr/>
                    <Row >
                        <Col>
                            <ReactQuill 
                            readOnly="true"
                            value={this.state.content}
                            theme="bubble"
                            />
                        </Col>
                </Row>
            </Container>
            </Col>
        )
    }
}

export default Roww
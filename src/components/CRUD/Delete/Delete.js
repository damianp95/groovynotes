import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import './Delete.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import {Button} from 'react-bootstrap'
import { IoMdTrash , IoIosArrowRoundBack } from 'react-icons/io';

class Delete extends React.Component{
    constructor(){
        super()
        //get note being changed
        let appendingMessage = sessionStorage.getItem("DeleteMessage");
        appendingMessage = JSON.parse(appendingMessage);

        //get collection of notes
        let notesIn= localStorage.getItem("myObj");
        notesIn = JSON.parse(notesIn);

        this.state={
            id: appendingMessage.id,
            title: appendingMessage.title,
            text: appendingMessage.text,
            index: appendingMessage.index,
            notes:notesIn,
            deleteNote:appendingMessage,
            redirectToReferrer:false

         }   

         this.dontDelete=this.dontDelete.bind(this);
         this.letsDelete=this.letsDelete.bind(this);
    }

    dontDelete(){
        //Destroy session storage and make no changes to the 
        // main array
        sessionStorage.removeItem('DeleteMessage');

        //Redirect back to home
        let redirectToReferrer= this.state.redirectToReferrer
        this.setState({redirectToReferrer:true})
        
    }


    letsDelete(){
        let notes = this.state.notes
        let index= this.state.index
        console.log(index)
       

        console.log("First Break Point --------------------------");
        console.log(index)


        console.log(notes)
         var notesTwo =notes.splice(index,1)
        console.log("Second Break Point --------------------------");
        console.log(notes)

          // Update local-storage.
          var foo =JSON.stringify(notes);
          localStorage.setItem("myObj", foo);
          //distroy object in session
          sessionStorage.removeItem('ChangingMessage');

        //Toast Message for delete
        toast.error("Deleted!", {
        position: toast.POSITION.BOTTOM_RIGHT});
        

        //Redirect back to home
        let redirectToReferrer= this.state.redirectToReferrer
        this.setState({redirectToReferrer:true})



    }
    render(){
              
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="./" />
        }

        return(

            <div>
                <h3>Delete</h3>
                <p>Are you sure you want to delete??</p>
                <Button onClick={this.dontDelete}>
                    <IoIosArrowRoundBack/>
                </Button>  
                <Button className="btn-danger" onClick={this.letsDelete}>
                <IoMdTrash/>
                 </Button>
                <div className="delete-bod">
                    <p>Title</p>

                    <h4>{this.state.title}</h4>

                <ReactQuill readOnly="true"
                 value={this.state.text}
                 theme="bubble"
                    />
                
                    <br/>
       
                </div>
            </div>
        )
    }
}
export default withRouter(Delete);


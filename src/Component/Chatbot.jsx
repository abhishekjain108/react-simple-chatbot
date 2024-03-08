import React from "react";
import ChatBot from "react-simple-chatbot";
import {Segment } from "semantic-ui-react";
import Navbar from "./Navbar";
import Logo from "./Logo";
const Chatbot = () => {


    const steps = [
      {
        id: "Greet",        
        message: "Hello, Welcome",        
        trigger: "Ask Name",        
      },        
      {       
        id: "Ask Name",        
        message: "Please enter your name!",        
        trigger: "waiting1",        
      },      
      {      
        id: "waiting1",      
        user: true,      
        trigger: "Name",      
      },      
      {       
        id: "Name",     
        message: "Hi {previousValue}, How may i help you ?",     
        trigger: "issues",     
      },      
      {      
        id: "issues",   
        user : true ,
        trigger : "issue"  
      },       
      {       
        id: "issue",       
        message:        
          "Thanks for letting your issue, we will resolve your issue ASAP , Please Stay With Us !",         

            trigger: "Options",       
      },
        {
            id: "Options",
            options: [
                {
                    value: "FAQ",
                    label: "Frequently Asked Questions",
                    trigger: "FAQ",
                },
                {
                    value: "Contact Support",
                    label: "Contact Support",
                    trigger: "ContactSupport",
                },
            ],
        },
        {
            id: "FAQ",
            message: "You can find answers to common questions in our FAQ section on our website.",
            trigger: "End",
        },
        {
            id: "ContactSupport",
            message: "To contact our support team, please send an email to example@gmail.com.",
            trigger: "End",
        },
        {
            id: "End",
            message: "Is there anything else I can assist you with?",
            trigger: "Options",
        },
    ];
           
      
    

    

    
  return (

   <div>
     
    <div className="container1"> 

    <Navbar/> 
    <Segment>   
    <div className="container-fluid" style={{paddingTop:"45px" ,paddingLeft:"0px"}}>
    <ChatBot steps={steps} />
    </div>
    </Segment>

   <div className="edit">
   <Logo url="https://cdn.pixabay.com/photo/2015/11/06/15/13/internet-1028794_1280.jpg "/>
   </div>
    


    </div>
    </div>
    );
    }



 export default Chatbot
const MyMessage=()=>{
    if(message?.attachments?.length>0) {
        // to find out msg is text or img
        return(
            <img 
                src = {message.attachments[0].file}
                alt = "message-attachment"
                className="message-image"
                style={{float:'right'}} 

                />
        )
    }
    return( // if its ot img
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor:'#3B2A50'}}>
         {message.text}
        </div>
    );

}
export default MyMessage;
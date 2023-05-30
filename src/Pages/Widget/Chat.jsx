import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
const avtar = require ('../../img/avatar.png')


const Chat = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [textInput, setTextInput] = useState('');
  
    const handleChatClick = () => {
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };
  
    const handleInputChange = (event) => {
      setTextInput(event.target.value);
    };
  
    const handleSendMessage = () => {
      console.log('Message envoyé :', textInput);
      setTextInput('');
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSendMessage();
        }
      };
  return (
    <>
    <div>
        <div className="chat" id="chat" onClick={handleChatClick}>
            <img src={avtar} alt="" className="span"/>
        </div>
        {dialogOpen && (
            <div className="dialog">
                <div className="dialog-content">
                    <h1>CryptoExtension ChatBot</h1>
                    <button className="btn" onClick={handleCloseDialog}>&times;</button>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Écrire du texte..."
                            value={textInput}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                        />
                        <i className="send-button" onClick={handleSendMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
                        </i>
                    </div>
                </div>
            </div>
        )}
    </div>
    </>
  )
}

export default Chat

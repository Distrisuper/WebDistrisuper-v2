import React from 'react';
import './styles.css';

const Chatbot = () => {
    // const chatContainerRef = useRef(null);
    // const messageInputRef = useRef(null);
    // const chatWindowRef = useRef(null);
    // const [showIcon, setShowIcon] = useState(false);

    // //Muestra icono en lugar de enviar en pantallas chicas
    // useEffect(() => {
    //     const handleResize = () => {
    //         setShowIcon(window.innerWidth <= 768);
    //     };
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    // useEffect(() => {
    //     const chatContainer = chatContainerRef.current;
    //     const messageInput = messageInputRef.current;
    //     const chatWindow = chatWindowRef.current;
    //     const sendButton = document.getElementById('send-message-button');
    //     const assistentBot = document.getElementById('assistent-bot');
    //     const closeChatButton = document.getElementById('close-chat');

    //     const toggleChatContainer = () => {
    //         chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
    //         chatWindow.scrollTop = chatWindow.scrollHeight;
    //     };

    //     const closeChatContainer = () => {
    //         chatContainer.style.display = 'none';
    //     };

    //     const generateApiKey = () => {
    //         const requestBody = {
    //             company_id: 7,
    //             temporary: 1,
    //         };

    //         return fetch('https://api-ia-chat-ts.rj.r.appspot.com/api/generate-appkey', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(requestBody),
    //         })
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 const apiKeyInfo = {
    //                     apiKey: data.data.token,
    //                     creationDate: data.data.created_at,
    //                 };
    //                 localStorage.setItem('apiKeyInfo', JSON.stringify(apiKeyInfo));
    //                 return apiKeyInfo.apiKey;
    //             })
    //             .catch((error) => {
    //                 console.error('Error al generar la apiKey:', error);
    //                 throw error;
    //             });
    //     };

    //     const isApiKeyValid = () => {
    //         const apiKeyInfo = JSON.parse(localStorage.getItem('apiKeyInfo'));
    //         if (!apiKeyInfo) {
    //             return false;
    //         }
    //         const creationDate = new Date(apiKeyInfo.creationDate).getTime();
    //         const currentDate = new Date().getTime();
    //         const timeDifference = currentDate - creationDate;
    //         const oneHourInMillis = 3600000;

    //         return timeDifference < oneHourInMillis && apiKeyInfo.apiKey;
    //     };

    //     const getApiKey = () => {
    //         return new Promise((resolve, reject) => {
    //             if (isApiKeyValid()) {
    //                 resolve(JSON.parse(localStorage.getItem('apiKeyInfo')).apiKey);
    //             } else {
    //                 resolve(generateApiKey());
    //             }
    //         });
    //     };

    //     const sendMessage = () => {
    //         const message = messageInput.value.trim();
    //         if (message !== '') {
    //             const newMessage = document.createElement('div');
    //             newMessage.className = 'chat-message sent';
    //             newMessage.textContent = message;
    //             newMessage.style.animation = 'slideInFromBottom 0.5s ease forwards';

    //             chatWindow.appendChild(newMessage);
    //             messageInput.value = '';
    //             chatWindow.scrollTop = chatWindow.scrollHeight;

    //             if (chatWindow.childElementCount < 3) {
    //                 sendFirstMessage(message);
    //             } else {
    //                 const thread = window.localStorage.getItem('thread');
    //                 sendMessageWithThreadId(thread, message);
    //             }
    //         }
    //     };

    //     const sendFirstMessage = (message) => {
    //         const requestBody = {
    //             phone: '5491111111111',
    //             phone_id_alias: 'aoki',
    //         };

    //         getApiKey().then((api_key) => {
    //             fetch('https://api-ia-chat-ts.rj.r.appspot.com/api/thread', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${api_key}`,
    //                 },
    //                 body: JSON.stringify(requestBody),
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     window.localStorage.setItem('thread', data.data);
    //                     sendMessageWithThreadId(data.data, message);
    //                     chatWindow.scrollTop = chatWindow.scrollHeight;
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error:', error);
    //                     const errorMessage = document.createElement('div');
    //                     errorMessage.textContent = 'Estoy teniendo problemas para responder, por favor inténtalo de nuevo más tarde o comunícate con soporte clickeando este botón 👇';
    //                     errorMessage.className = 'chat-message received error-message';
    //                     const supportButton = document.createElement('div');
    //                     supportButton.textContent = 'Hablar con soporte';
    //                     supportButton.className = 'chat-message received btn-chat font-400';
    //                     supportButton.onclick = () => {
    //                         window.open('https://wa.me/5492236801000', '_blank');
    //                     };
    //                     errorMessage.appendChild(supportButton);
    //                     chatWindow.appendChild(errorMessage);
    //                     chatWindow.scrollTop = chatWindow.scrollHeight;
    //                 });
    //         });
    //     };

    //     const sendMessageWithThreadId = (threadId, user_question) => {
    //         const requestBody = {
    //             threadId,
    //             text: user_question,
    //             assistantId: 'asst_Uf6vogYmiLE5pBi6TlDiQv9h',
    //             phone: '5491111111',
    //             phone_id_alias: 'aoki',
    //             indexName: 'aoki',
    //             accuracy: 0,
    //             namespace: 'asst_mMDzIGaTcBck0oPymKGJxhVb',
    //         };

    //         const typingMessage = document.createElement('div');
    //         typingMessage.className = 'chat-message received';
    //         typingMessage.textContent = 'Escribiendo...';
    //         setTimeout(() => {
    //             typingMessage.style.animation = 'slideInFromBottom 0.5s ease forwards';
    //             chatWindow.appendChild(typingMessage);
    //         }, 500);
    //         chatWindow.scrollTop = chatWindow.scrollHeight;

    //         getApiKey().then((api_key) => {
    //             fetch('https://api-ia-chat-ts.rj.r.appspot.com/api/save-chat-msg', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${api_key}`,
    //                 },
    //                 body: JSON.stringify(requestBody),
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     chatWindow.removeChild(typingMessage);

    //                     const newMessage = document.createElement('div');
    //                     newMessage.className = 'chat-message received';

    //                     if (data.data.toUpperCase().includes('PPP')) {
    //                         newMessage.textContent = 'Para hablar con una persona por favor póngase en contacto por el siguiente botón 👇';
    //                         const supportButton = document.createElement('div');
    //                         supportButton.textContent = 'Hablar con soporte';
    //                         supportButton.className = 'chat-message received btn-chat font-400';
    //                         supportButton.onclick = () => {
    //                             window.open('https://wa.me/5492236801000', '_blank');
    //                         };
    //                         newMessage.appendChild(supportButton);
    //                     } else if (data.data.toUpperCase().includes('OOO')) {
    //                         newMessage.textContent = 'Lamento si no te fui de utilidad, para hablar con una persona por favor póngase en contacto por el siguiente botón 👇';
    //                         const supportButton = document.createElement('div');
    //                         supportButton.textContent = 'Hablar con soporte';
    //                         supportButton.className = 'chat-message received btn-chat font-400';
    //                         supportButton.onclick = () => {
    //                             window.open('https://wa.me/5492236801000', '_blank');
    //                         };
    //                         newMessage.appendChild(supportButton);
    //                     } else if (data.data.toUpperCase().includes('CV')) {
    //                         newMessage.textContent = 'Si querés alcanzarnos tu CV para que lo analicemos por favor envíelo a través de nuestro canal de soporte de whatsapp 👇';
    //                         const supportButton = document.createElement('div');
    //                         supportButton.textContent = 'Hablar con soporte';
    //                         supportButton.className = 'chat-message received btn-chat font-400';
    //                         supportButton.onclick = () => {
    //                             window.open('https://wa.me/5492236801000', '_blank');
    //                         };
    //                         newMessage.appendChild(supportButton);
    //                     } else if (data.data.toUpperCase().includes('VIDEO')) {
    //                         const parts = data.data.split('VIDEO');
    //                         newMessage.textContent = parts[0];

    //                         setTimeout(() => {
    //                             const videoUrl = 'assets/images/videos/meli-rtas.mp4';
    //                             const videoElement = document.createElement('video');
    //                             videoElement.src = videoUrl;
    //                             videoElement.controls = true;
    //                             videoElement.muted = true;
    //                             videoElement.autoplay = true;

    //                             videoElement.style.height = '200px';
    //                             videoElement.style.width = '200px';

    //                             chatWindow.appendChild(videoElement);
    //                             chatWindow.scrollTop = chatWindow.scrollHeight;
    //                         }, 2000);
    //                     } else {
    //                         newMessage.innerHTML = data.data.replace(/\n/g, '<br>');
    //                     }
    //                     newMessage.style.animation = 'slideInFromBottom 0.5s ease forwards';

    //                     chatWindow.appendChild(newMessage);
    //                     chatWindow.scrollTop = chatWindow.scrollHeight;
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error:', error);
    //                     const errorMessage = document.createElement('div');
    //                     errorMessage.textContent = 'Estoy teniendo problemas para responder, por favor inténtalo de nuevo más tarde o comunícate con soporte clickeando este botón 👇';
    //                     errorMessage.className = 'chat-message received error-message';
    //                     const supportButton = document.createElement('div');
    //                     supportButton.textContent = 'Hablar con soporte';
    //                     supportButton.className = 'chat-message received btn-chat font-400';
    //                     supportButton.onclick = () => {
    //                         window.open('https://wa.me/5492236801000', '_blank');
    //                     };
    //                     errorMessage.appendChild(supportButton);
    //                     chatWindow.appendChild(errorMessage);
    //                     chatWindow.scrollTop = chatWindow.scrollHeight;
    //                 });
    //         });
    //     };

    //     const handleSendMessageClick = () => sendMessage();
    //     const handleMessageInputKeyPress = (event) => {
    //         if (event.key === 'Enter') {
    //             sendMessage();
    //         }
    //     };
    //     const handleAssistentBotClick = () => toggleChatContainer();
    //     const handleCloseChatClick = () => closeChatContainer();

    //     sendButton?.addEventListener('click', handleSendMessageClick);
    //     messageInput?.addEventListener('keypress', handleMessageInputKeyPress);
    //     assistentBot?.addEventListener('click', handleAssistentBotClick);
    //     closeChatButton?.addEventListener('click', handleCloseChatClick);

    //     return () => {
    //         sendButton?.removeEventListener('click', handleSendMessageClick);
    //         messageInput?.removeEventListener('keypress', handleMessageInputKeyPress);
    //         assistentBot?.removeEventListener('click', handleAssistentBotClick);
    //         closeChatButton?.removeEventListener('click', handleCloseChatClick);
    //     };
    // }, []);

    return (
        <>
            <a
                className="assistent-bot bounce"
                id="assistent-bot"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => {
                    window.open('https://wa.me/5492236208620', '_blank');
                }}
            >
                <span className="assistent-bot-icon">
                    <img src="https://aokitech.com.ar/assets/images/whatsapp.webp" alt="WhatsApp" loading='lazy' />
                </span>

            </a>

            {/* <div id="chat-container" ref={chatContainerRef} className="chat-container animation-visible" style={{ display: 'none' }}>
                <div className="chat-header">
                    <p className="font-semibold py-1 text-lg xl:text-xl">
                        Chateá con nosotros
                    </p>
                    <button className="chat-modal-close" id="close-chat">
                        <span className="chat-modal-close-icon"><FontAwesomeIcon icon={faCircleXmark} /></span>
                    </button>
                </div>
                <div>
                    <div ref={chatWindowRef} className="chat-window">
                        <div className="chat-message received">
                            ¡Hola! 👋😄<br />
                            Estoy acá para responder tus dudas 😉<br />
                            Decime, ¿en qué te puedo ayudar?
                        </div>
                    </div>
                </div>
                <div className="chat-input ">
                    <input
                        type="text"
                        id="message-input"
                        className="font-400 text-sm xl:text-base max-w-[70%] md:max-w-full"
                        placeholder="Ingresá tu consulta..."
                        autoComplete="off"
                    />
                    <button className="font-700" id="send-message-button">
                        {showIcon ? <FontAwesomeIcon icon={faPaperPlane} /> : 'Enviar'}
                    </button>
                </div>
                <div className="wpp-ref-container">
                    <div className="wpp-ref">
                        <a className="wpp-ref-text" href="https://wa.me/5492236208620" target="_blank" rel="noopener noreferrer">
                            Hablanos por WhatsApp
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Chatbot;
import { useState } from "react";

function AIChat() {

    const [isOpen, setIsOpen] = useState(false);

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hi! I'm Srinivas's AI assistant. Ask me anything about his skills, projects, education or experience."
        }
    ]);

    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!message.trim() || loading) {
            return;
        }


        const userMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: userMessage
            }
        ]);

        setMessage("");

        setLoading(true);


        try {

            const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/chat`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        message: userMessage
                    })
                }
            );


            const data = await response.json();


            if (data.success) {

                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "ai",
                        text: data.reply
                    }
                ]);

            } else {

                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "ai",
                        text: "Sorry, I couldn't process that request."
                    }
                ]);

            }


        } catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "I'm unable to connect to the AI right now."
                }
            ]);

        } finally {

            setLoading(false);

        }

    };


    return (

        <>

            {/* ================================
                FLOATING AI BUTTON
            ================================= */}

            <button
                className="ai-chat-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open AI Assistant"
            >
                ✦
            </button>


            {/* ================================
                CHAT WINDOW
            ================================= */}

            {isOpen && (

                <div className="ai-chat-window">

                    <div className="ai-chat-header">

                        <div>
                            <strong>
                                Srinivas AI
                            </strong>

                            <span>
                                Ask me anything
                            </span>
                        </div>


                        <button
                            className="ai-chat-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close AI Assistant"
                        >
                            ×
                        </button>

                    </div>


                    <div className="ai-chat-messages">

                        {messages.map((item, index) => (

                            <div
                                key={index}
                                className={`ai-message ${item.sender}`}
                            >
                                {item.text}
                            </div>

                        ))}


                        {loading && (

                            <div className="ai-message ai">
                                Thinking...
                            </div>

                        )}

                    </div>


                    <form
                        className="ai-chat-input"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Ask about Srinivas..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                        />


                        <button
                            type="submit"
                            disabled={loading}
                        >
                            ↗
                        </button>

                    </form>

                </div>

            )}

        </>

    );

}

export default AIChat;
import { StudentLayout } from '../../components/StudentLayout';
import { Send, Search, User, Clock } from 'lucide-react';
import { useState } from 'react';

export function StudentMessages() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      instructor: 'Marie Dubois',
      course: 'Développement Web Full Stack',
      lastMessage: 'Merci pour votre question !',
      timestamp: '10:30',
      unread: 2,
      avatar: 'MD',
    },
    {
      id: 2,
      instructor: 'Thomas Martin',
      course: 'Data Science avec Python',
      lastMessage: 'Je vais regarder votre code',
      timestamp: 'Hier',
      unread: 0,
      avatar: 'TM',
    },
    {
      id: 3,
      instructor: 'Sophie Laurent',
      course: 'Design UX/UI Moderne',
      lastMessage: 'Excellent travail sur le projet !',
      timestamp: '2 mars',
      unread: 0,
      avatar: 'SL',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'student',
      content: 'Bonjour, j\'ai une question sur les hooks React.',
      timestamp: '09:15',
    },
    {
      id: 2,
      sender: 'instructor',
      content: 'Bonjour ! Bien sûr, quelle est votre question ?',
      timestamp: '09:20',
    },
    {
      id: 3,
      sender: 'student',
      content: 'Je ne comprends pas bien la différence entre useState et useEffect.',
      timestamp: '09:22',
    },
    {
      id: 4,
      sender: 'instructor',
      content:
        'Excellente question ! useState permet de gérer l\'état local d\'un composant, tandis que useEffect permet de gérer les effets de bord comme les appels API ou les abonnements.',
      timestamp: '09:25',
    },
    {
      id: 5,
      sender: 'instructor',
      content: 'Je vous envoie un exemple de code pour mieux comprendre.',
      timestamp: '09:26',
    },
    {
      id: 6,
      sender: 'student',
      content: 'Merci beaucoup pour l\'explication claire !',
      timestamp: '10:15',
    },
    {
      id: 7,
      sender: 'instructor',
      content: 'De rien ! N\'hésitez pas si vous avez d\'autres questions.',
      timestamp: '10:30',
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      alert(`Message envoyé: ${newMessage}`);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find((c) => c.id === selectedConversation);

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="mb-2">Messages</h1>
          <p className="text-muted-foreground">
            Communiquez avec vos formateurs
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden flex h-[calc(100vh-250px)]">
          {/* Conversations List */}
          <div className="w-full md:w-80 border-r border-border flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`
                    w-full p-4 flex items-start gap-3 hover:bg-accent transition text-left
                    ${selectedConversation === conversation.id ? 'bg-accent' : ''}
                  `}
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                    {conversation.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="font-medium truncate">{conversation.instructor}</div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {conversation.timestamp}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground truncate mb-1">
                      {conversation.course}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </div>
                      {conversation.unread > 0 && (
                        <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold ml-2">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 flex flex-col hidden md:flex">
            {/* Conversation Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {currentConversation?.avatar}
                </div>
                <div>
                  <div className="font-medium">{currentConversation?.instructor}</div>
                  <div className="text-sm text-muted-foreground">
                    {currentConversation?.course}
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`
                      max-w-[70%] rounded-lg p-4
                      ${
                        message.sender === 'student'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent'
                      }
                    `}
                  >
                    <p className="mb-2">{message.content}</p>
                    <div
                      className={`
                        text-xs flex items-center gap-1
                        ${message.sender === 'student' ? 'text-primary-foreground/70' : 'text-muted-foreground'}
                      `}
                    >
                      <Clock className="w-3 h-3" />
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

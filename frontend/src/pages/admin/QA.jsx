import React, { useState } from 'react';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Pagination } from '../../components/ui/Pagination';
import { MessageSquare, Edit3, Trash2 } from 'lucide-react';

const QA = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      customer: 'Alice Walker',
      product: 'Premium Business Cards',
      question: 'Do you offer foil stamping on these cards?',
      date: '2023-10-24',
      status: 'Answered',
      reply: 'Yes, we do! You can select foil stamping in the finishing options during checkout.',
    },
    {
      id: 2,
      customer: 'Bob Builder',
      product: 'Vinyl Banners',
      question: 'Can these banners be used outdoors in the rain?',
      date: '2023-11-02',
      status: 'Pending',
      reply: null,
    }
  ]);

  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [replyText, setReplyText] = useState('');

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Answered': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleOpenReply = (q) => {
    setSelectedQuestion(q);
    setReplyText(q.reply || '');
    setIsReplyOpen(true);
  };

  const handleSubmitReply = () => {
    setQuestions(questions.map(q => 
      q.id === selectedQuestion.id 
        ? { ...q, reply: replyText, status: 'Answered' } 
        : q
    ));
    setIsReplyOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Product Q&A</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">Manage customer questions from product pages.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search questions..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="w-full sm:w-auto border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white shadow-sm">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Answered</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Product</th>
                <th className="px-8 py-5">Question</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {questions.map((q) => (
                <tr 
                  key={q.id} 
                  onClick={() => handleOpenReply(q)}
                  className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-900">{q.customer}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-700">{q.product}</td>
                  <td className="px-8 py-5">
                    <div className="text-sm font-medium text-gray-900 line-clamp-2">{q.question}</div>
                    <div className="text-xs font-bold text-gray-400 mt-1">{q.date}</div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold border ${getStatusStyle(q.status)}`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold space-x-3 transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleOpenReply(q); }} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors"
                      title={q.status === 'Pending' ? 'Reply' : 'Edit Reply'}
                    >
                      {q.status === 'Pending' ? <><MessageSquare className="w-3.5 h-3.5" /> Reply</> : <><Edit3 className="w-3.5 h-3.5" /> Edit Reply</>}
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>

      <Modal
        isOpen={isReplyOpen}
        onClose={() => setIsReplyOpen(false)}
        title="Reply to Question"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsReplyOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSubmitReply}>Submit Reply</Button>
          </>
        }
      >
        {selectedQuestion && (
          <div className="space-y-4 py-2">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">Customer Question</p>
              <p className="text-sm font-medium text-gray-900 italic">"{selectedQuestion.question}"</p>
              <p className="text-xs font-bold text-gray-400 mt-2">— {selectedQuestion.customer} on {selectedQuestion.product}</p>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Reply</label>
              <textarea 
                rows="4"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full border border-gray-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                autoFocus
              ></textarea>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QA;
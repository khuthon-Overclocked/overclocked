import React, { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock, Leaf, Star, Calendar, ChevronRight, Heart, Share2, Award, Instagram, Facebook, Twitter, MessageCircle, X, Send } from "lucide-react"
import { useParams } from 'react-router-dom';

import { Button } from "../utils/ui/button.jsx"
import { Card, CardContent } from "../utils/ui/card.jsx"
import { Badge } from "../utils/ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../utils/ui/tabs.jsx"
import { Separator } from "../utils/ui/separator.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "../utils/ui/avatar.jsx"
import { Progress } from "../utils/ui/progress.jsx"

// Import farms data from FarmList
import { farms } from './FarmList';

const Detail = () => {
  const { id } = useParams();
  const [farm, setFarm] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'farm',
      content: `안녕하세요, 무엇을 도와드릴까요?`
    }
  ]);
  const chatModalRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const getFarmData = async () => {
      // 임시로 모든 농장 데이터를 가져와서 해당 ID의 농장을 찾습니다
      const allFarms = Object.values(farms).flatMap(category => 
        Object.values(category).flat()
      );
      const foundFarm = allFarms.find(f => f.id === parseInt(id));
      setFarm(foundFarm);
    };

    getFarmData();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatModalRef.current && !chatModalRef.current.contains(event.target)) {
        setShowChat(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // 사용자 메시지 추가
      const userMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: message
      };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');

      // 농장 응답 메시지 (실제로는 API 호출 등으로 대체)
      setTimeout(() => {
        const farmMessage = {
          id: messages.length + 2,
          sender: 'farm',
          content: '문의해 주셔서 감사합니다. 곧 답변 드리도록 하겠습니다.'
        };
        setMessages(prev => [...prev, farmMessage]);
      }, 1000);
    }
  };

  if (!farm) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-[85%] mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-[#688A08]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-black">{farm.name}</h1>
              <div className="flex items-center gap-2 text-black">
                <MapPin className="w-4 h-4" />
                <span>{farm.location}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="w-10 h-10 border-[#688A08] hover:bg-[#688A08]/10">
                <Heart className="w-5 h-5 text-[#688A08]" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 border-[#688A08] hover:bg-[#688A08]/10">
                <Share2 className="w-5 h-5 text-[#688A08]" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={farm.image}
                alt={farm.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-lg font-semibold text-black">{farm.rating}</span>
                </div>
                <span className="text-black">•</span>
                <span className="text-black">{farm.reviews}개의 리뷰</span>
                <span className="text-black">•</span>
                <span className="text-black">{farm.distance}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {farm.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-[#688A08]/10 text-[#688A08]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-[#688A08]" />
                  <span className="font-medium text-black">친환경 농법</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#688A08]" />
                  <span className="font-medium text-black">유기농 인증</span>
                </div>
              </div>
              <div className="pt-4">
                <h2 className="text-xl font-semibold mb-2 text-black">소개</h2>
                <p className="text-black">{farm.description}</p>
              </div>
            </div>
          </div>

          {/* 판매 상품 섹션 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">판매 상품</h2>
            <div className="grid grid-cols-3 gap-4">
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <img
                      src='https://images.unsplash.com/photo-1710012347916-51550f50ebec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fCVFQyVBMCU5MSVFQyU4QiU5QyUyMCVFQiU4QiVCOSVFQSVCNyVCQ3xlbnwwfDB8MHx8fDA%3D'
                      alt={`${farm.tags[0]} 이미지`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">유기농 {farm.tags[0]} 1kg</h3>
                  <p className="text-[#688A08] font-bold">₩5,000</p>
                </CardContent>
              </Card>
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <img
                      src='https://images.unsplash.com/photo-1628188833435-9352c0f6fea8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQiU4QiVCOSVFQSVCNyVCQyUyMCVFQiVCMCU5NSVFQyU4QSVBNHxlbnwwfDB8MHx8fDA%3D'
                      alt={`${farm.tags[0]} 이미지`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">유기농 {farm.tags[0]} 2kg</h3>
                  <p className="text-[#688A08] font-bold">₩9,000</p>
                </CardContent>
              </Card>
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <img
                      src='https://images.unsplash.com/photo-1690023946969-9215f22043c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCVFQiU4QiVCOSVFQSVCNyVCQyUyMCVFQyU5RSU5MCVFQiVBMyVBOHxlbnwwfDB8MHx8fDA%3D'
                      alt={`${farm.tags[0]} 이미지`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">유기농 {farm.tags[0]} 5kg</h3>
                  <p className="text-[#688A08] font-bold">₩20,000</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 리뷰 섹션 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">리뷰</h2>
            <div className="space-y-4">
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-black">홍길동</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-black">5.0</span>
                        </div>
                      </div>
                      <p className="text-black">신선하고 맛있는 당근이에요!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-black">김철수</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-black">4.5</span>
                        </div>
                      </div>
                      <p className="text-black">가격도 합리적이고 품질도 좋아요!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 농장 정보 섹션 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">농장 정보</h2>
            <div className="space-y-4">
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#688A08]" />
                      <span className="text-black">010-1234-5678</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#688A08]" />
                      <span className="text-black">farm@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#688A08]" />
                      <span className="text-black">09:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#688A08]" />
                      <span className="text-black">{farm.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-[#688A08]">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4 text-black">농장 소개</h3>
                  <p className="text-black">{farm.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 채팅 버튼 */}
          <Button
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-[#688A08] hover:bg-[#688A08]/90"
            onClick={() => setShowChat(true)}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>

          {/* 채팅 모달 */}
          {showChat && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div ref={chatModalRef} className="bg-white rounded-lg w-[350px] h-[500px] flex flex-col">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-base font-semibold text-black">{farm.name} 채팅</h3>
                  <button
                    onClick={() => setShowChat(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.sender === 'farm' && (
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <span className="text-xs text-black">농장</span>
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg p-2 ${
                          msg.sender === 'user'
                            ? 'bg-[#688A08] text-white'
                            : 'bg-gray-100 text-black'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-3 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                      placeholder="메시지를 입력하세요"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#688A08] text-black"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-[#688A08] text-white px-3 py-2 rounded-lg hover:bg-[#688A08]/90 text-sm"
                    >
                      전송
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Detail 
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../utils/ui/button';
import { Card } from '../utils/ui/card';
import { Badge } from '../utils/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../utils/ui/tabs';
import { Separator } from '../utils/ui/separator';
import { Avatar } from '../utils/ui/avatar';
import { Progress } from '../utils/ui/progress';
import { cn } from '../utils/cn';
import Header from '../partials/Header';

// Export farms data
export const farms = {
  '채소': {
    '당근': [
      {
        id: 1,
        name: "루트가든",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1000",
        rating: 4.8,
        reviews: 128,
        description: "신선한 당근을 직접 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 당근을 제공합니다.",
        tags: ["당근", "채소", "유기농"],
        distance: "3.5km",
        favorite: true
      },
      {
        id: 2,
        name: "노을밭",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVCJThCJUI5JUVBJUI3JUJDfGVufDB8MHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.7,
        reviews: 95,
        description: "달콤한 당근을 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 당근을 제공합니다.",
        tags: ["당근", "채소", "친환경"],
        distance: "4.2km",
        favorite: false
      },
      {
        id: 3,
        name: "새벽당근연구소",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1606916032083-e505604f1a9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQiU4QiVCOSVFQSVCNyVCQ3xlbnwwfDB8MHx8fDA%3D?q=80&w=1000",
        rating: 4.9,
        reviews: 156,
        description: "신선한 당근을 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 당근을 제공합니다.",
        tags: ["당근", "채소", "유기농"],
        distance: "3.8km",
        favorite: true
      },
      {
        id: 28,
        name: "길동이네 자연상회",
        location: "경기도 남양주시",
        image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJThCJUI5JUVBJUI3JUJDfGVufDB8MHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.6,
        reviews: 89,
        description: "신선한 당근을 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 당근을 제공합니다.",
        tags: ["당근", "채소", "유기농"],
        distance: "4.1km",
        favorite: false
      },
      {
        id: 29,
        name: "들꽃마당",
        location: "경기도 구리시",
        image: "https://images.unsplash.com/photo-1442897961655-905a8343c8eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fCVFQiU4QiVCOSVFQSVCNyVCQ3xlbnwwfDB8MHx8fDA%3D?q=80&w=1000",
        rating: 4.8,
        reviews: 112,
        description: "신선한 당근을 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 당근을 제공합니다.",
        tags: ["당근", "채소", "친환경"],
        distance: "3.9km",
        favorite: true
      },
      {
        id: 30,
        name: "캐럿동산",
        location: "경기도 하남시",
        image: "https://images.unsplash.com/photo-1668941476854-312b0fb87e1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fCVFQiU4QiVCOSVFQSVCNyVCQ3xlbnwwfDB8MHx8fDA%3D?q=80&w=1000",
        rating: 4.7,
        reviews: 98,
        description: "신선한 당근을 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 당근을 제공합니다.",
        tags: ["당근", "채소", "유기농"],
        distance: "4.3km",
        favorite: false
      }
    ],
    '시금치/쌈채소/나물': [
      {
        id: 4,
        name: "나라시금치 농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000",
        rating: 4.6,
        reviews: 87,
        description: "신선한 시금치를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 시금치를 제공합니다.",
        tags: ["시금치", "채소", "유기농"],
        distance: "4.5km",
        favorite: false
      },
      {
        id: 5,
        name: "달콤시금치 농장",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000",
        rating: 4.8,
        reviews: 112,
        description: "신선한 시금치를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 시금치를 제공합니다.",
        tags: ["시금치", "채소", "친환경"],
        distance: "3.8km",
        favorite: true
      },
      {
        id: 6,
        name: "푸른시금치 농장",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000",
        rating: 4.7,
        reviews: 98,
        description: "신선한 시금치를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 시금치를 제공합니다.",
        tags: ["시금치", "채소", "유기농"],
        distance: "4.0km",
        favorite: false
      }
    ],
    '브로콜리/파프리카/양배추': [
      {
        id: 7,
        name: "나라브로콜리 농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1000",
        rating: 4.9,
        reviews: 145,
        description: "신선한 브로콜리를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 브로콜리를 제공합니다.",
        tags: ["브로콜리", "채소", "유기농"],
        distance: "3.3km",
        favorite: true
      },
      {
        id: 8,
        name: "달콤브로콜리 농장",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1000",
        rating: 4.7,
        reviews: 103,
        description: "신선한 브로콜리를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 브로콜리를 제공합니다.",
        tags: ["브로콜리", "채소", "친환경"],
        distance: "4.8km",
        favorite: false
      },
      {
        id: 9,
        name: "푸른브로콜리 농장",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1000",
        rating: 4.8,
        reviews: 132,
        description: "신선한 브로콜리를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 브로콜리를 제공합니다.",
        tags: ["브로콜리", "채소", "유기농"],
        distance: "3.7km",
        favorite: true
      }
    ]
  },
  '과일': {
    '사과': [
      {
        id: 10,
        name: "나라농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=1000",
        rating: 4.9,
        reviews: 167,
        description: "달콤한 사과를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 사과를 제공합니다.",
        tags: ["사과", "과일", "유기농"],
        distance: "3.2km",
        favorite: true
      },
      {
        id: 11,
        name: "마루마루",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1675266123819-026acf00aefa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTgyJUFDJUVBJUIzJUJDJTIwJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww?q=80&w=1000",
        rating: 4.8,
        reviews: 145,
        description: "달콤한 사과를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 사과를 제공합니다.",
        tags: ["사과", "과일", "친환경"],
        distance: "4.5km",
        favorite: false
      },
      {
        id: 12,
        name: "달사과 정원",
        location: "경기도 포천시",
        image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTgyJUFDJUVBJUIzJUJDfGVufDB8fDB8fHww?q=80&w=1000",
        rating: 4.7,
        reviews: 123,
        description: "달콤한 사과를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 사과를 제공합니다.",
        tags: ["사과", "과일", "유기농"],
        distance: "3.9km",
        favorite: true
      },
      {
        id: 31,
        name: "레드골드팜",
        location: "경기도 남양주시",
        image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTgyJUFDJUVBJUIzJUJDfGVufDB8fDB8fHww?q=80&w=1000",
        rating: 4.8,
        reviews: 134,
        description: "달콤한 사과를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 사과를 제공합니다.",
        tags: ["사과", "과일", "유기농"],
        distance: "4.0km",
        favorite: false
      },
      {
        id: 32,
        name: "청명마을",
        location: "경기도 구리시",
        image: "https://plus.unsplash.com/premium_photo-1674473710805-32cdc657eb0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fCVFQyU4MiVBQyVFQSVCMyVCQ3xlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.7,
        reviews: 98,
        description: "달콤한 사과를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 사과를 제공합니다.",
        tags: ["사과", "과일", "친환경"],
        distance: "3.7km",
        favorite: true
      },
      {
        id: 33,
        name: "하늘담은 사과밭",
        location: "경기도 하남시",
        image: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fCVFQyU4MiVBQyVFQSVCMyVCQ3xlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.9,
        reviews: 156,
        description: "달콤한 사과를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 사과를 제공합니다.",
        tags: ["사과", "과일", "유기농"],
        distance: "4.2km",
        favorite: false
      }
    ],
    '배': [
      {
        id: 13,
        name: "나라배 농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000",
        rating: 4.8,
        reviews: 134,
        description: "달콤한 배를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 배를 제공합니다.",
        tags: ["배", "과일", "유기농"],
        distance: "3.4km",
        favorite: true
      },
      {
        id: 14,
        name: "달콤배 농장",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000",
        rating: 4.7,
        reviews: 112,
        description: "달콤한 배를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 배를 제공합니다.",
        tags: ["배", "과일", "친환경"],
        distance: "4.7km",
        favorite: false
      },
      {
        id: 15,
        name: "푸른배 농장",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000",
        rating: 4.9,
        reviews: 156,
        description: "달콤한 배를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 배를 제공합니다.",
        tags: ["배", "과일", "유기농"],
        distance: "3.6km",
        favorite: true
      }
    ]
  },
  '감자/고구마/옥수수': {
    '감자': [
      {
        id: 16,
        name: "흙내음",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000",
        rating: 4.7,
        reviews: 98,
        description: "신선한 감자를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 감자를 제공합니다.",
        tags: ["감자", "채소", "유기농"],
        distance: "3.8km",
        favorite: false
      },
      {
        id: 17,
        name: "은비네 초록정원",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1541683746238-470486ba4a00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQSVCMCU5MCVFQyU5RSU5MHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.8,
        reviews: 145,
        description: "신선한 감자를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 감자를 제공합니다.",
        tags: ["감자", "채소", "친환경"],
        distance: "4.3km",
        favorite: true
      },
      {
        id: 18,
        name: "포테이토힐즈",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQSVCMCU5MCVFQyU5RSU5MHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.9,
        reviews: 167,
        description: "신선한 감자를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 감자를 제공합니다.",
        tags: ["감자", "채소", "유기농"],
        distance: "3.5km",
        favorite: true
      },
      {
        id: 34,
        name: "감자골",
        location: "경기도 남양주시",
        image: "https://images.unsplash.com/photo-1628236879201-783fa93fe7bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQSVCMCU5MCVFQyU5RSU5MHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.6,
        reviews: 89,
        description: "신선한 감자를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 감자를 제공합니다.",
        tags: ["감자", "채소", "유기농"],
        distance: "4.1km",
        favorite: false
      },
      {
        id: 35,
        name: "고향농장",
        location: "경기도 구리시",
        image: "https://images.unsplash.com/photo-1578594640334-b71fbed2a406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQSVCMCU5MCVFQyU5RSU5MHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.8,
        reviews: 112,
        description: "신선한 감자를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 감자를 제공합니다.",
        tags: ["감자", "채소", "친환경"],
        distance: "3.9km",
        favorite: true
      },
      {
        id: 36,
        name: "밀레니엄농원",
        location: "경기도 하남시",
        image: "https://plus.unsplash.com/premium_photo-1686529811856-c05734b82434?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fCVFQSVCMCU5MCVFQyU5RSU5MHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1000",
        rating: 4.7,
        reviews: 98,
        description: "신선한 감자를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 감자를 제공합니다.",
        tags: ["감자", "채소", "유기농"],
        distance: "4.3km",
        favorite: false
      }
    ],
    '고구마': [
      {
        id: 19,
        name: "나라고구마 농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?q=80&w=1000",
        rating: 4.8,
        reviews: 134,
        description: "달콤한 고구마를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 고구마를 제공합니다.",
        tags: ["고구마", "채소", "유기농"],
        distance: "3.7km",
        favorite: true
      },
      {
        id: 20,
        name: "달콤고구마 농장",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?q=80&w=1000",
        rating: 4.7,
        reviews: 112,
        description: "달콤한 고구마를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 고구마를 제공합니다.",
        tags: ["고구마", "채소", "친환경"],
        distance: "4.6km",
        favorite: false
      },
      {
        id: 21,
        name: "푸른고구마 농장",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?q=80&w=1000",
        rating: 4.9,
        reviews: 156,
        description: "달콤한 고구마를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 고구마를 제공합니다.",
        tags: ["고구마", "채소", "유기농"],
        distance: "3.4km",
        favorite: true
      }
    ]
  },
  '견과': {
    '호두': [
      {
        id: 22,
        name: "나라호두 농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1000",
        rating: 4.8,
        reviews: 145,
        description: "신선한 호두를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 호두를 제공합니다.",
        tags: ["호두", "견과", "유기농"],
        distance: "3.6km",
        favorite: true
      },
      {
        id: 23,
        name: "달콤호두 농장",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1000",
        rating: 4.7,
        reviews: 123,
        description: "신선한 호두를 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 호두를 제공합니다.",
        tags: ["호두", "견과", "친환경"],
        distance: "4.4km",
        favorite: false
      },
      {
        id: 24,
        name: "푸른호두 농장",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1000",
        rating: 4.9,
        reviews: 167,
        description: "신선한 호두를 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 호두를 제공합니다.",
        tags: ["호두", "견과", "유기농"],
        distance: "3.3km",
        favorite: true
      }
    ],
    '잣': [
      {
        id: 25,
        name: "나라잣 농장",
        location: "경기도 가평군",
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1000",
        rating: 4.7,
        reviews: 98,
        description: "신선한 잣을 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 잣을 제공합니다.",
        tags: ["잣", "견과", "유기농"],
        distance: "3.9km",
        favorite: false
      },
      {
        id: 26,
        name: "달콤잣 농장",
        location: "경기도 양평군",
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1000",
        rating: 4.8,
        reviews: 145,
        description: "신선한 잣을 재배하는 농장입니다. 친환경 농법으로 재배하여 안전한 잣을 제공합니다.",
        tags: ["잣", "견과", "친환경"],
        distance: "4.2km",
        favorite: true
      },
      {
        id: 27,
        name: "푸른잣 농장",
        location: "경기도 포천시",
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1000",
        rating: 4.9,
        reviews: 156,
        description: "신선한 잣을 재배하는 농장입니다. 유기농 방식으로 재배하여 건강한 잣을 제공합니다.",
        tags: ["잣", "견과", "유기농"],
        distance: "3.5km",
        favorite: true
      }
    ]
  }
};

const FarmList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSideSubmenu, setShowSideSubmenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('채소');
  const [activeSubmenu, setActiveSubmenu] = useState('당근');
  const [hoverCategory, setHoverCategory] = useState('채소');
  const [showAllSubmenus, setShowAllSubmenus] = useState(false);
  const submenuRef = useRef(null);

  // close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setShowAllSubmenus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmenuClick = (category, submenu) => {
    setActiveCategory(category);
    setActiveSubmenu(submenu);
    setHoverCategory(category);
    setShowAllSubmenus(false);
    setShowSideSubmenu(false);
    console.log('Selected category:', category, 'submenu:', submenu);
    console.log('Available farms:', farms[category]?.[submenu]);
  };

  const toggleSubmenu = (category) => {
    setShowSideSubmenu(true);
    setHoverCategory(category);
  };

  const handleMouseLeave = () => {
    setShowSideSubmenu(false);
    if (!activeCategory) {
      setHoverCategory(null);
    }
  };

  const toggleAllSubmenus = () => {
    setShowAllSubmenus(!showAllSubmenus);
    if (!showAllSubmenus) {
      setShowSubmenu(true);
    } else {
      setShowSubmenu(false);
      setActiveCategory(null);
      setActiveSubmenu(null);
    }
  };

  const categories = [
    { id: "vegetables", name: "채소" },
    { id: "fruits", name: "과일" },
    { id: "potatoes", name: "감자/고구마/옥수수" },
    { id: "nuts", name: "견과" },
    { id: "rice", name: "쌀/잡곡" },
    { id: "seasoning", name: "장류/양념류/기름" },
    { id: "processed", name: "농수산 가공품" }
  ];

  const getSubmenuName = (category, submenu) => {
    const submenuNames = {
      '당근': '당근',
      '시금치/쌈채소/나물': '시금치/쌈채소/나물',
      '브로콜리/파프리카/양배추': '브로콜리/파프리카/양배추',
      '양파/대파/마늘/배추': '양파/대파/마늘/배추',
      '오이/호박/고추': '오이/호박/고추',
      '사과': '사과',
      '배': '배',
      '감자': '감자',
      '고구마': '고구마',
      '조': '조',
      '수수': '수수',
      '취나물': '취나물',
      '참나물': '참나물',
      '고추장': '고추장',
      '된장': '된장',
      '간장': '간장',
      '고춧가루': '고춧가루',
      '마늘': '마늘',
      '참기름': '참기름',
      '들기름': '들기름',
      '미숫가루': '미숫가루',
      '누룽지': '누룽지',
      '잼': '잼',
      '과일청': '과일청',
      '건과일': '건과일',
      '김치': '김치',
      '호두': '호두',
      '잣': '잣'
    };
    return submenuNames[submenu] || submenu;
  };

  const getDisplayFarms = () => {
    // 카테고리와 서브메뉴가 모두 선택된 경우
    if (activeCategory && activeSubmenu) {
      // 선택된 카테고리와 서브메뉴에 해당하는 농장만 반환
      const selectedFarms = farms[activeCategory]?.[activeSubmenu] || [];
      console.log('Displaying farms:', selectedFarms);
      return selectedFarms;
    }
    
    // 초기 상태나 카테고리/서브메뉴가 선택되지 않은 경우
    return [];
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm -mt-8">
        <div className="w-[85%] mx-auto">
          <div className="flex items-center justify-between h-12">
          </div>
          <nav className="flex items-center py-2">
            <div className="relative flex items-center" ref={submenuRef}>
              <button
                className="p-2"
                onClick={toggleAllSubmenus}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              {showAllSubmenus && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 w-[800px] z-50">
                  <div className="grid grid-cols-4 gap-4 px-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">채소</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('채소', '당근')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            당근
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('채소', '시금치/쌈채소/나물')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            시금치/쌈채소/나물
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('채소', '브로콜리/파프리카/양배추')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            브로콜리/파프리카/양배추
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('채소', '양파/대파/마늘/배추')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            양파/대파/마늘/배추
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('채소', '오이/호박/고추')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            오이/호박/고추
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">과일</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('과일', '사과')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            사과
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('과일', '배')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            배
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('과일', '감귤')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            감귤
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('과일', '포도')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            포도
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('과일', '복숭아')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            복숭아
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('과일', '딸기')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            딸기
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">감자/고구마/옥수수</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('감자/고구마/옥수수', '감자')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            감자
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('감자/고구마/옥수수', '고구마')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            고구마
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('감자/고구마/옥수수', '옥수수')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            옥수수
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">견과</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('견과', '호두')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            호두
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('견과', '잣')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            잣
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">쌀/잡곡</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '조')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            조
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '수수')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            수수
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '보리')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            보리
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '현미')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            현미
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '흑미')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            흑미
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '찹쌀')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            찹쌀
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '귀리')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            귀리
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('쌀/잡곡', '기장')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            기장
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">장류/양념류/기름</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '고추장')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            고추장
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '된장')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            된장
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '간장')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            간장
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '고춧가루')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            고춧가루
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '마늘')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            마늘
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '참기름')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            참기름
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('장류/양념류/기름', '들기름')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            들기름
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">농수산 가공품</h3>
                      <ul className="space-y-1">
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('농수산 가공품', '미숫가루')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            미숫가루
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('농수산 가공품', '누룽지')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            누룽지
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('농수산 가공품', '잼')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            잼
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('농수산 가공품', '과일청')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            과일청
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('농수산 가공품', '건과일')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            건과일
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleSubmenuClick('농수산 가공품', '김치')}
                            className="text-gray-600 hover:text-gray-200"
                          >
                            김치
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <ul className="flex space-x-8">
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('채소')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  채소
                </button>
                {showSideSubmenu && hoverCategory === '채소' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('채소', '당근')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      당근
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('채소', '시금치/쌈채소/나물')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      시금치/쌈채소/나물
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('채소', '브로콜리/파프리카/양배추')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      브로콜리/파프리카/양배추
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('채소', '양파/대파/마늘/배추')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      양파/대파/마늘/배추
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('채소', '오이/호박/고추')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      오이/호박/고추
                    </button>
                  </div>
                )}
              </li>
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('과일')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  과일
                </button>
                {showSideSubmenu && hoverCategory === '과일' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('과일', '사과')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      사과
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('과일', '배')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      배
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('과일', '감귤')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      감귤
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('과일', '포도')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      포도
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('과일', '복숭아')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      복숭아
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('과일', '딸기')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      딸기
                    </button>
                  </div>
                )}
              </li>
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('감자/고구마/옥수수')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  감자/고구마/옥수수
                </button>
                {showSideSubmenu && hoverCategory === '감자/고구마/옥수수' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('감자/고구마/옥수수', '감자')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      감자
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('감자/고구마/옥수수', '고구마')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      고구마
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('감자/고구마/옥수수', '옥수수')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      옥수수
                    </button>
                  </div>
                )}
              </li>
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('견과')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  견과
                </button>
                {showSideSubmenu && hoverCategory === '견과' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('견과', '호두')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      호두
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('견과', '잣')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      잣
                    </button>
                  </div>
                )}
              </li>
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('쌀/잡곡')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  쌀/잡곡
                </button>
                {showSideSubmenu && hoverCategory === '쌀/잡곡' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '조')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      조
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '수수')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      수수
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '보리')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      보리
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '현미')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      현미
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '흑미')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      흑미
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '찹쌀')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      찹쌀
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '귀리')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      귀리
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('쌀/잡곡', '기장')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      기장
                    </button>
                  </div>
                )}
              </li>
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('장류/양념류/기름')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  장류/양념류/기름
                </button>
                {showSideSubmenu && hoverCategory === '장류/양념류/기름' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '고추장')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      고추장
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '된장')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      된장
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '간장')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      간장
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '고춧가루')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      고춧가루
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '마늘')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      마늘
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '참기름')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      참기름
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('장류/양념류/기름', '들기름')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      들기름
                    </button>
                  </div>
                )}
              </li>
              <li className="relative" onMouseLeave={handleMouseLeave}>
                <button
                  onMouseEnter={() => toggleSubmenu('농수산 가공품')}
                  className="font-medium text-gray-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  농수산 가공품
                </button>
                {showSideSubmenu && hoverCategory === '농수산 가공품' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-green-100">
                    <button 
                      onClick={() => handleSubmenuClick('농수산 가공품', '미숫가루')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      미숫가루
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('농수산 가공품', '누룽지')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      누룽지
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('농수산 가공품', '잼')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      잼
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('농수산 가공품', '과일청')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      과일청
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('농수산 가공품', '건과일')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      건과일
                    </button>
                    <button 
                      onClick={() => handleSubmenuClick('농수산 가공품', '김치')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      김치
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="w-[85%] mx-auto py-8 pt-28 relative z-0">
        {/* 현재 경로 표시 */}
        {activeCategory && (
          <div className="mb-6 text-gray-600">
            <span className="font-medium text-[#688A08]">{activeCategory}</span>
            {activeSubmenu && (
              <>
                <span className="mx-2">›</span>
                <span className="font-medium text-[#688A08]">
                  {getSubmenuName(activeCategory, activeSubmenu)}
                </span>
              </>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getDisplayFarms().map((farm) => (
            <Link to={`/farm/${farm.id}`} key={farm.id}>
              <Card className="overflow-hidden border-[#688A08]/20 hover:shadow-lg hover:shadow-[#688A08]/10 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col">
                  <div className="relative w-full h-48">
                    <img
                      src={farm.image}
                      alt={farm.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{farm.name}</h3>
                        <p className="text-gray-600 mb-2">{farm.location}</p>
                        <div className="flex items-center gap-2 mb-4 min-w-[280px]">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-400"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="ml-1 text-black">{farm.rating}</span>
                          </div>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500 whitespace-nowrap">{farm.reviews}개의 리뷰</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">{farm.distance}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{farm.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {farm.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#688A08]/10 text-[#688A08]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmList;

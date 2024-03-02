'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ExpandingArrow from '@/components/expanding-arrow'
import Uploader from '@/components/uploader'
import TranscriptComponent from '@/components/transcripts'
import { Toaster } from '@/components/toaster'
import Player from '@/components/player'
import VideoPlayer from '../components/player';

const videoUrl = "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/aa49jf2uijrtct3e/index.m3u8"
export default function Home() {
  const [transcript, setTranscript] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/transcript', {
        method: 'GET'
      });
      const data = await response.json();
      setTranscript(data.data.transcript);
      console.log(data.data.transcript);
    };
    fetchData();
  }, [])
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Toaster />
      {/* <Link
        href="https://vercel.com/templates/next.js/blob-starter"
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>Deploy your own to Vercel</p>
        <ExpandingArrow />
      </Link> */}
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-4xl">
        Sentient Scribe AI
      </h1>
      <div className="flex">
        <div style={{display: "contents"}} className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg w-full">
          <VideoPlayer src={videoUrl}/>
        </div>
      </div>
      <h2 style={{fontWeight: "600"}}>Summary</h2>
      <p style={{paddingLeft: '50px', paddingRight: '50px', }}className="font-light text-gray-600 w-full text-start">
        {/* <Link
          href="https://vercel.com/blob"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Vercel Blob
        </Link>{' '}
        demo. Built with{' '}
        <Link
          href="https://nextjs.org/docs"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Next.js App Router
        </Link>
        . */}
        {transcript && transcript.summary.shorthand_bullet}
      </p>
      {/* <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href="https://vercel.com">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/vercel/examples/tree/main/storage/blob-starter"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link> */}
      {/* </div> */}
    </main>
  )
}

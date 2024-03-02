'use client'

// components/TranscriptComponent.js
import React, { useState, useEffect } from 'react';
import TranscriptCard from './card';

function TranscriptComponent({timestamp}: {timestamp: number}) {
  const [transcript, setTranscript] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/transcript', {
        method: 'GET'
      });
      const data = await response.json();
      setTranscript(data);
      console.log(data);
    };
    
    
    fetchData();
  }, []);

  useEffect(() => {
  }, [timestamp]);

  const isTimeStampLessThanEndTime = (endTime: number, startTime: number) => {
    return  timestamp > startTime && timestamp  < endTime;
  }

  if (!transcript) return <div>Loading...</div>;

  return (
    <div>
      {/* <h1>{transcript.data.transcript.title}</h1> */}
      {transcript.data.transcript.sentences.map((sentence, index) => (
        <div key={index}>
          {/* <p style={{ fontWeight: isTimeStampLessThanEndTime(sentence.end_time, sentence.start_time) ? 'bold' : 'normal' }}>Speaker {sentence.speaker_id}</p>
          <p style={{ fontWeight: isTimeStampLessThanEndTime(sentence.end_time, sentence.start_time) ? 'bold' : 'normal' }}>{sentence.text}</p>
          <p style={{ fontWeight: isTimeStampLessThanEndTime(sentence.end_time, sentence.start_time) ? 'bold' : 'normal' }}>Sentiment {sentence.ai_filters.sentiment}</p> */}
          <TranscriptCard 
            speakerName={`Speaker ${sentence.speaker_id+1}`} 
            sentence={sentence.text}
            tags={sentence.ai_filters}
            highlight={isTimeStampLessThanEndTime(sentence.end_time, sentence.start_time)}
            />
        </div>
      ))}
    </div>
  );
}

export default TranscriptComponent;

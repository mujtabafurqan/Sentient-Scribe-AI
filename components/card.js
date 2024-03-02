'use client';
// components/TranscriptCard.js
import React from 'react';

const TranscriptCard = ({ speakerName, sentence, tags, highlight }) => {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        // marginBottom: '20px',
        backgroundColor: highlight ? 'rgb(178 215 255)': '#f9f9f9',
      };
      
      const titleStyle = {
        // margin: '0 0 5px 0',
        color: '#333',
        fontWeight: 'bold', 
      };
      
      const sentenceStyle = {
        margin: '0 0 15px 0',
      };
      
      const tagsContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
      };
      
      const tagStyle = {
        padding: '5px 10px',
        borderRadius: '15px',
        backgroundColor: '#e0e0e0',
        color: '#555',
      };  
  return (
    <div style={cardStyle}>
      <span style={titleStyle}>{speakerName} : </span>
      <span style={sentenceStyle}>{sentence}</span>
      <div style={tagsContainerStyle}>
        {tags.sentiment && <span style={tagStyle}>{tags.sentiment}</span>}
        {tags.question && <span style={tagStyle}>question</span>}
        {tags.date_and_time && <span style={tagStyle}>date_and_time</span>}
        {tags.metric && <span style={tagStyle}>metric</span>}
        {tags.pricing && <span style={tagStyle}>pricing</span>}
        {tags.task && <span style={tagStyle}>task</span>}
      </div>
    </div>
  );
};

// Styles


export default TranscriptCard;

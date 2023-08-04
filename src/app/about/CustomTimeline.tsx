'use client'

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function CustomTimeline() {
  return (
    <div id = "about" className="container mx-32 mt-10 font-mono">
      <h1 className='lg:text-2xl font-extrabold'>About</h1>
      <div className="font-mono">
      <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.5,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className='font-sans'>September 2019</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">University of Michigan</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="white">
          May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Ford Motor Company</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="white">
          December 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 bg-gradient-to-r from-blue-500 to-green-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Kappa Theta Pi</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="white">
          May 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 bg-gradient-to-r from-orange-400 to-orange-700">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Amazon</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>   
      <TimelineItem>
        <TimelineOppositeContent color="white">
          August 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Johns Hopkins</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>        
    </Timeline>
    </div>
    </div>
    
  );
}
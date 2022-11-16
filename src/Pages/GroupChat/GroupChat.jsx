import './GroupChat.css';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Header from '../../components/Header';
// import React, { useEffect, useState } from 'react'
// import CheckBox from '@mui/material/CheckBox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function GroupChat() {
  return (
    <div className="group-chat">
      <Header />
      <input type="text" id="group-name" placeholder="Group Name" />
      <div className="group-chat-child" id="invite-friends">
        <p>Invite Friends</p>
        <svg width="8%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
        <input type="text" id="phone-number" placeholder="Phone Number" />
      </div>

      <div className="group-user">
        <svg width="5%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="profile-pic"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /></svg>
        Qiyuan Cheng
        <Checkbox {...label} color="default" class="checkbox" />
      </div>

      <div className="group-user">
        <svg width="5%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="profile-pic"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /></svg>
        Allen Shen
        <Checkbox {...label} color="default" class="checkbox" />
      </div>

      <div className="group-user">
        <svg width="5%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="profile-pic"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /></svg>
        Joseph Kuang
        <Checkbox {...label} color="default" class="checkbox" />
      </div>

      <div className="group-user">
        <svg width="5%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="profile-pic"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /></svg>
        Daniel Moon
        <Checkbox {...label} color="default" class="checkbox" />
      </div>

      <div className="group-user">
        <svg width="5%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="profile-pic"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /></svg>
        Rakshana Jayaprakash
        <Checkbox {...label} color="default" class="checkbox" />
      </div>

      <div className="group-chat-child" id="create-group-button">
        Create Group
      </div>
    </div>
  );
}
export default GroupChat;

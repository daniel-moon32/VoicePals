import GroupName from '../components/GroupName';
import Reply from '../components/Reply';

const replies = [
  {
    avatar: 'https://i.imgur.com/0y0qY0x.png',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    text: 'This is a reply',
    isGroupLeader: true,
  },
  {
    avatar: 'https://i.imgur.com/0y0qY0x.png',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    text: 'This is a reply',
    isGroupLeader: false,
  },
];

export default function Listen({ data }) {
  return (
    <>
      <GroupName groupName="The Unoriginal Dr JAQ" />
      {replies.map((reply) => (
        <Reply {...reply} />))}
    </>
  );
}

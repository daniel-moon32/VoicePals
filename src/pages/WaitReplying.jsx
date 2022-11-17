import GroupName from '../components/GroupName';
import TimeTravel from '../components/TimeTravel';
import QuestionAudio from '../components/QuestionAudio';
import WaitReplyNotice from '../components/WaitReplyNotice';
import JumptoListenButton from '../components/JumptoListenButton';

export default function WaitReplying() {
  return (
    <>
      <GroupName groupName="Long Live Pinto Bean" />
      <br />
      <QuestionAudio />
      <hr style={{ width: '92%' }} />
      <br />
      <TimeTravel peopleReply="7" />
      <br />
      <WaitReplyNotice />
      <br />
      <JumptoListenButton />
    </>
  );
}

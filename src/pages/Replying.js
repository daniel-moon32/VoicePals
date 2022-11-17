import DaysLeft from '../components/DaysLeft';
import GroupName from '../components/GroupName';
import SendButton from '../components/SendButton';
import TimeTravel from '../components/TimeTravel';
import QuestionAudio from '../components/QuestionAudio';

export default function Replying() {
  return (
    <>
      <GroupName groupName="Long Live Pinto Bean" />
      <br />
      <QuestionAudio />
      <hr style={{ width: '92%' }} />
      <br />
      <TimeTravel />
      <br />
      <DaysLeft />
      <br />
      <SendButton />
    </>
  );
}

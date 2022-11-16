import DaysLeft from '../components/DaysLeft';
import HeaderwithGroupName from '../components/HeaderwithGroupName';
import SendButton from '../components/SendButton';
import TimeTravel from '../components/TimeTravel';
import QuestionAudio from '../components/QuestionAudio';

export default function Replying() {
  return (
    <>
      <HeaderwithGroupName name="Long Live Pinto Bean" />
      <br />
      <QuestionAudio />
      <br />
      <TimeTravel />
      <br />
      <DaysLeft />
      <br />
      <SendButton />
    </>
  );
}

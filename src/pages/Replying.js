import DaysLeft from '../components/days_left';
import HeaderwithGroupName from '../components/HeaderwithGroupName';
import SendButton from '../components/send_button';
import TimeTravel from '../components/time_travel';

export default function Replying() {
  return (
    <>
      <HeaderwithGroupName name="Long Live Pinto Bean " />
      <br />
      <TimeTravel />
      <br />
      <DaysLeft />
      <br />
      <SendButton />
    </>
  );
}

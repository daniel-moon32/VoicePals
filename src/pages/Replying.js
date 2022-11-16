import DaysLeft from '../components/days_left';
import SendButton from '../components/send_button';
import TimeTravel from '../components/time_travel';

export default function Replying() {
  return (
    <div>
      <br />
      <TimeTravel />
      <br />
      <DaysLeft />
      <br />
      <SendButton />
    </div>
  );
}

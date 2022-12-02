import { useParams } from 'react-router-dom';
import GroupName from '../components/GroupName';
import TimeTravel from '../components/TimeTravel';
// eslint-disable-next-line import/no-named-as-default
import QuestionAudio from '../components/QuestionAudio';
import WaitReplyNotice from '../components/WaitReplyNotice';
// import JumptoListenButton from '../components/JumptoListenButton';

export default function WaitReplying({ groups }) {
  const { groupid } = useParams();
  const { question } = groups[groupid - 1];
  return (
    <>
      <GroupName groupName={question.group_name} />
      <br />
      <QuestionAudio question={question} />
      <hr style={{ width: '92%' }} />
      <br />
      <TimeTravel peopleReplying="7" />
      <br />
      <WaitReplyNotice />
      {/* <br />
      <JumptoListenButton /> */}
    </>
  );
}

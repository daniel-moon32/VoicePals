import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DaysLeft from '../components/DaysLeft';
import GroupName from '../components/GroupName';
import SendButton from '../components/SendButton';
import TimeTravel from '../components/TimeTravel';
import QuestionAudio from '../components/QuestionAudio';
import Record from '../components/Record';

export default function Replying({ data }) {
  const { groupid } = useParams();
  const [blobURL, setBlobURL] = useState('');
  const [question, setQuestion] = useState('');

  return (
    <>
      <GroupName groupName={data[groupid - 1].group_name} />
      <br />
      <QuestionAudio question={data[groupid - 1].question} />
      <hr style={{ width: '92%' }} />
      <br />
      <TimeTravel peopleReplying={data[groupid - 1].responses.length} />
      <br />
      <DaysLeft days={data[groupid - 1].days_left} />
      <br />
      <Record
        blobURL={blobURL}
        setBlobURL={setBlobURL}
        question={question}
        setQuestion={setQuestion}
      />
      <SendButton />
    </>
  );
}

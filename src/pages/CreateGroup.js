import Header from '../components/Header';
// eslint-disable-next-line import/no-named-as-default
import PeopleBanner from '../components/PeopleBanner';

export default function CreateGroup({ groups, setGroups }) {
  return (
    <>
      <Header />
      <PeopleBanner setGroups={setGroups} groups={groups} />
    </>

  );
}

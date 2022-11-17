import CreateGroupName from '../components/CreateGroupName';
import Header from '../components/Header';
import InviteFriends from '../components/InviteFriends';
import PeopleBanner from '../components/PeopleBanner';

export default function CreateGroup() {
  return (
    <>
      <Header />
      <CreateGroupName />
      <InviteFriends />
      <PeopleBanner />
    </>

  );
}

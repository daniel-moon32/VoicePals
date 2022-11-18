import GroupBanner from '../components/GroupBanner';
import HeaderwithSearch from '../components/HeaderwithSearch';

function MainScreen({ groups }) {
  return (
    <>
      <HeaderwithSearch />
      <GroupBanner groups={groups} />
    </>
  );
}

export default MainScreen;

import GroupBanner from '../components/GroupBanner';
import HeaderwithSearch from '../components/HeaderwithSearch';

function MainScreen({ data }) {
  return (
    <>
      <HeaderwithSearch />
      <GroupBanner data={data} />
    </>
  );
}

export default MainScreen;

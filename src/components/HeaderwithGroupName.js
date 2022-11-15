import Header from './Header';
import GroupName from './GroupName';

function HeaderwithGroupName({ name }) {
  return (
    <>
      <Header />
      <GroupName groupName={name} />
    </>
  );
}

export default HeaderwithGroupName;

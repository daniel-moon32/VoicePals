import Header from './Header';
import GroupName from './GroupName';

function HeaderWithGroupName({ name }) {
  return (
    <>
      <Header />
      <GroupName groupName={name} />
    </>
  );
}

export default HeaderWithGroupName;

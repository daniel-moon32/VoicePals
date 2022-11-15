import Header from "./Header";
import GroupName from "./GroupName";

function HeaderwithGroupName(header) {
  return (
    <>
    <Header />
    <GroupName groupName = {header.name}/>
   
    </>


  );
}

export default HeaderwithGroupName;
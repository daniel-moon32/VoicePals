import Header from "./Header";
import GroupName from "./GroupName";

function HeaderwithGroupName(props) {
  return (
    <>
    <Header />
    <GroupName name = {props.name}/>
   
    </>


  );
}

export default HeaderwithGroupName;
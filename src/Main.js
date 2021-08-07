
import NavBarr from './components/NavBarr.js';
import  Feed from './components/Feed'



const ArrayData = [
    {
        id: 0,
        name: "fotiecodes",
        loading: false,
    },
    {
        id: 0,
        name: "fotiecodes",
        loading: true,

    }
];
function Main() {
  return (
    <div>
     <NavBarr/>
     {
         ArrayData.map(item => {
            return  item.loading ? <Feed loading/> : <Feed/>
            
         })
     }
    



    </div>
  );
}

export default Main;
